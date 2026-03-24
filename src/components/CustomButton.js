import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor = '#4CAF50', textColor = '#fff', style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});