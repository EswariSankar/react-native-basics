import { View, Text } from 'react-native'
import React from 'react'
import { TextInput,Button } from 'react-native'
import { StyleSheet } from 'react-native'
import Label from './label.js'
import Input from './input.js'

export default function Login({navigation}) {
  return (
    <View style={styles.container}
    >
      <Text style={styles.title} >LOGIN</Text>
      <View style={styles.row}>
      <Label name='Username' />
      <Input />
      </View>
      <View style={styles.row}>
      <Label name='Password' />
      <Input />
      </View>

      <Button style={styles.btn} title="Submit" onPress={()=> navigation.replace('Signup')}></Button>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15
  },
  btn: {
  marginTop: 20,
  width: '80%',        
  alignSelf: 'center' , 
  marginLeft: 60
  },
  
}

);