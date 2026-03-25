// components/IconButton.js
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({ name, size = 24, color = 'gray', style }) => {
  return <Icon name={name} size={size} color={color} style={style} />;
};

export default IconButton;