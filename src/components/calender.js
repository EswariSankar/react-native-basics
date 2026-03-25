import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Label from './label';
import Icon from './Icon'
const CalenderPicker = ({ label, date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.row}>
      <Label name={label} />
      <TouchableOpacity style={styles.dateBox} onPress={() => setShow(true)}>
        <Text>{date.toDateString()}</Text>
        <Icon name="date-range" size={24} color="red" style={{ marginRight: 10 }} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CalenderPicker;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  
  dateBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#0e0d0db4',
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 18,
  },
});