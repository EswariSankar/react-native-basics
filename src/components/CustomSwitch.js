import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Label from './label';

const CustomSwitch = ({ label, value, onValueChange, activeColor = "#4CAF50" }) => {
  return (
    <View style={styles.row}>
      <Label name={label} />
      <View style={styles.switchContainer}>
        
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: "#ccc", true: activeColor }}
        />
      </View>
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center', 
    justifyContent: 'flex-end',
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4}],
    paddingHorizontal:50
  },
});