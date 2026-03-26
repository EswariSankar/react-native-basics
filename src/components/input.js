import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Input = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}               
      onChangeText={onChangeText} 
      placeholder={placeholder}   
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0d0db4',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlignVertical: 'center',
  },
});