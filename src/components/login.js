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
import Header from './Header.js'
import { getRandomUsers } from '../api/randomUserApi.js'; // import the API function

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // **Updated handleLogin function**
  const handleLogin = async () => {
    setLoading(true);
    try {
      const users = await getRandomUsers(1); // fetch 1 random user
      if (users.length > 0) {
        const user = users[0];
        setLoading(false);
        // Optional alert to show fetched user
        Alert.alert(
          'Random User',
          `Random User: ${user.name.first} ${user.name.last}`,
          [
            {
              text: 'OK',
              onPress: () => {
                // Navigate to Signup after alert is dismissed
                navigation.replace('Signup', { randomUser: user });
              },
            },
          ],
          { cancelable: false } // prevents dismissing by tapping outside
        );
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
      <Header title="Login" />
      <FadeInView style={styles.container}>
        
        <Text style={styles.title}>WELCOME</Text>

        {/* You can remove these username/password fields if you want */}
        <View style={styles.row}>
          <Icon name="person" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Username" />
          <Input
            value={username}
            onChangeText={setUsername} 
          />
        </View>
        <View style={styles.row}>
          <Icon name="lock" size={24} color="gray" style={{ marginRight: 10 }} />
          <Label name="Password" />
          <Input 
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login button now uses Random User API */}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor:"#c5a0f8"
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