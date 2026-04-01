import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, StyleSheet } from "react-native";

import Label from "./label.js";
import Input from "./input.js";
import CustomButton from "./CustomButton.js";
import Loader from "./Loader.js";
import FadeInView from "./FadeInView.js";
import Icon from "./Icon.js";
import Header from "./Header.js";

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  if (!username || !password) {
    Alert.alert("Validation Error", "Enter username and password");
    return;
  }

  setLoading(true);

  try {
    const res = await api.post("/auth/login", {
      username: username.trim(),
      password: password.trim(),
    });

    const data = res.data;

    if (!data.accessToken) {
      throw new Error("Token not received from server");
    }

    // ✅ Save tokens
    await AsyncStorage.setItem("token", data.accessToken);
    await AsyncStorage.setItem("refreshToken", data.refreshToken);

    // ✅ Credentials valid — now go to Signup
    navigation.navigate("Signup");

  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Login failed. Try again.";
    Alert.alert("Login Failed", message); // ✅ stays on Login if invalid
  } finally {
    setLoading(false);
  }
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Login" />

      <FadeInView style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>

        <View style={styles.row}>
          <Icon name="person" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Username" />
          <Input
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
          />
        </View>

        <View style={styles.row}>
          <Icon name="lock" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Password" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry={true}
          />
        </View>

        <CustomButton
          style={styles.btn}
          backgroundColor="rgb(129, 53, 190)"
          title="Login"
          onPress={handleLogin}
        />

        <Loader visible={loading} />
      </FadeInView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#c5a0f8",
  },
  title: { fontSize: 28, marginBottom: 20, fontWeight: "600" },
  row: { flexDirection: "row", alignItems: "center", width: "90%", marginBottom: 15 },
  btn: { marginTop: 20, width: "30%", alignSelf: "center" },
});