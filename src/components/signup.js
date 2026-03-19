import { StyleSheet, Text, View,TouchableOpacity ,Button} from 'react-native'
import Label from './label'
import Input from './input'
import Dropdown from './dropdown'
import React, { useState } from 'react' 
import DateTimePicker from '@react-native-community/datetimepicker';
import { Switch } from 'react-native';

  


const Signup = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [maritalStatus, setMaritalStatus] = useState(null);
    const [age, setage] = useState(null);
    const[iseligible,setiseligible]=useState(false);

    const toggleSwitch = () => setiseligible(prev => !prev);

    const onChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) {
        setDate(selectedDate);
        }
    };

    const marital_data=[
      { label: 'Married', value: 'married' },
      {label:'Unmarried', value:'unmarried'}
    ]

    const age_data=[
      {label:'Below 18',value:'below 18'},
      {label:'Above 18',value:'Above 18'},
    ]
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Label name='Name' />
      <Input />
      </View>
      <View style={styles.row}>
      <Label name='DOB' />
      <TouchableOpacity 
          style={styles.dateBox}
          onPress={() => setShow(true)}
        >
          <Text>{date.toDateString()}</Text>
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
      <View style={styles.row}>
        <Label name='Marital Status'/>
        <Dropdown
          data={marital_data}
          value={maritalStatus}
          setValue={setMaritalStatus}
          placeholder='Select Status'
        />
      </View>
      <View style={styles.row}>
        <Label name='Age'/>
        <Dropdown
          data={age_data}
          value={age}
          setValue={setage}
          placeholder='Select Age'
        />
      </View>
      <View style={styles.row}>
        <Label name='Eligible to Vote' />

        <View style={styles.switch}>
          <Text>{iseligible ? "Yes" : "No"}</Text>

          <Switch
            value={iseligible}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#ccc", true: "#4CAF50" }}
          />
        </View>
      </View>
      <View style={styles.row}>
      <Label name='Mobile No.' />
      <Input />
      </View >
      <View style={styles.btn}>
      <Button  title="Finish" onPress={()=> navigation.replace('Dashboard')}></Button>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:50,
        paddingBottom:20
    },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15
  },
  dateBox: {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: '#0e0d0db4',
  justifyContent: 'center',
  paddingHorizontal: 10,
  borderRadius: 15,
  backgroundColor: '#fff'
},
switch: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
},
btn: {
  width: '90%',          
  alignItems: 'flex-end', 
  marginTop: 20
}
    
})