import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Label from './label.js';
import Input from './input.js';
import CustomButton from './CustomButton.js';
import Loader from './Loader.js';
import FadeInView from './FadeInView.js';
import Icon from './Icon.js';
import { getRandomUsers } from '../api/randomUserApi.js'; // import the API function

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  // **Updated handleLogin function**
  const handleLogin = async () => {
    setLoading(true);
    try {
      const users = await getRandomUsers(1); // fetch 1 random user
      if (users.length > 0) {
        const user = users[0];
        setLoading(false);
        // Optional alert to show fetched user
        Alert.alert(`Random User: ${user.name.first} ${user.name.last}`);
        // Navigate to Signup with pre-filled random user
        navigation.replace('Signup', { randomUser: user });
      } else {
        setLoading(false);
        Alert.alert('Failed to fetch random user');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error fetching random user');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FadeInView style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>

        {/* You can remove these username/password fields if you want */}
        <View style={styles.row}>
          <Icon name="person" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Username" />
          <Input />
        </View>
        <View style={styles.row}>
          <Icon name="lock" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Password" />
          <Input />
        </View>

        {/* Login button now uses Random User API */}
        <CustomButton
          style={styles.btn}
          backgroundColor="red"
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: '600'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15
  },
  btn: {
    marginTop: 20,
    width: '30%',
    alignSelf: 'center'
  }
});