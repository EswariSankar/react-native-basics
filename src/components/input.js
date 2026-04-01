import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const [hidden, setHidden] = useState(secureTextEntry || false);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text.replace(/\s/g, ""))}
        placeholder={placeholder}
        secureTextEntry={hidden}  // ✅ actually passed to TextInput now
      />
      {/* ✅ show eye icon only for password fields */}
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setHidden(prev => !prev)} style={styles.eye}>
          <Icon name={hidden ? "visibility-off" : "visibility"} size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0e0d0db4",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000'
  },
  eye: {
    paddingLeft: 6,
  },
});