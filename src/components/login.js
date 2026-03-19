import { View, Text } from 'react-native'
import React from 'react'
import { TextInput,Button } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Login({navigation}) {
  return (
    <View style={styles.container}
    >
      <Text style={styles.title} >LOGIN</Text>
      <TextInput style={styles.input}
        placeholder='username'
      />
      <TextInput style={styles.input}
        placeholder='password'
      />
      <Button title="Submit" onPress={()=> navigation.replace('Dashboard')}></Button>
    </View>
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
  input: {
    width: '50%',
    borderWidth: 5,
    borderColor: '#0e0d0db4',
    paddingBottom: 10,
    paddingTop:10,
    marginBottom: 10,
    borderRadius: 15,
  },
}

);