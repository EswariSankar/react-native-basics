import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const MyDropdown = ({ data, value, setValue, placeholder }) => {

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default MyDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dropdown: {
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0d0db4',
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  }
});