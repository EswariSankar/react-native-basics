import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const Input = () => {
  return (
    <TextInput style={styles.input}></TextInput>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0d0db4',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlignVertical: 'center'   // ✅ centers text inside input
}
    
})