import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import Label from './label.js'
import Input from './input.js'
import CustomButton from './CustomButton.js'
import Loader from './Loader.js'

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Signup');
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}
    >
      <Text style={styles.title} >WELCOME</Text>
      <View style={styles.row}>
      <Label name='Username' />
      <Input />
      </View>
      <View style={styles.row}>
      <Label name='Password' />
      <Input />
      </View>
      <CustomButton style={styles.btn} backgroundColor='red'
        title="Login"
        onPress={handleLogin}
      />
      <Loader visible={loading} />
      
    </View>
  </SafeAreaView>
    
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20
    },
    title: {
      fontSize: 28,
      marginBottom: 20,
      fontWeight:'600'
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
  alignSelf: 'center' , 
 
  },
  
}

);