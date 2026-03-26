import React, { useState, useEffect } from 'react' 
import { StyleSheet, Text, View } from 'react-native'
import Label from './label'
import Input from './input'
import Dropdown from './dropdown'
import { SafeAreaView } from 'react-native-safe-area-context';
import CalenderPicker from './calender'
import CustomSwitch from './CustomSwitch'
import CustomButton from './CustomButton'
import Loader from './Loader'
import FadeInView from './FadeInView'
import Header from './Header'

const Signup = ({navigation, route}) => {
    const randomUser = route.params?.randomUser; // Get random user from Login

    const [date, setDate] = useState(new Date());
    const [maritalStatus, setMaritalStatus] = useState(null);
    const [age, setage] = useState(null);
    const [iseligible, setiseligible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mobile, setMobile] = useState('');
    // **New state for Name and Username**
    const [name, setName] = useState('');
    // Prefill Name & Username if Random User exists
    useEffect(() => {
        if (randomUser) {
            setName(`${randomUser.name.first} ${randomUser.name.last}`);
        }
    }, [randomUser]);

    const handleRegister = () => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        // Pass the user info to Dashboard
        navigation.replace('Dashboard', { user: { name} });
      }, 2000);
    };

    const marital_data = [
      { label: 'Married', value: 'married' },
      { label: 'Unmarried', value: 'unmarried' }
    ];

    const age_data = [
      { label: 'Below 18', value: 'below 18' },
      { label: 'Above 18', value: 'Above 18' },
    ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Signup" />

      <FadeInView style={styles.container}>

        {/* Name field prefilled from Random User */}
        <View style={styles.row}>
          <Label name="Name" />
          <Input value={name} onChangeText={setName} placeholder="Enter Name" />
        </View>

        

        <CalenderPicker label="DOB" date={date} setDate={setDate} />

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

        <CustomSwitch
          label="Eligible to Vote"
          value={iseligible}
          onValueChange={() => setiseligible(prev => !prev)}
        />

        <View style={styles.row}>
          <Label name='Mobile No.' />
          <Input
            value={mobile}
            onChangeText={setMobile}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad" // optional, shows numeric keyboard
          />
        </View>

        <CustomButton
          title="Register" 
          backgroundColor='purple'
          onPress={handleRegister}
          style={styles.btn}
        />
        <Loader visible={loading} />

      </FadeInView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:20
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      marginBottom: 15
    },
    btn: {
      width: '30%',          
      alignSelf: 'flex-end', 
      marginTop: 20,
      marginHorizontal:20
    },
    icon:{
      fontSize:18
    }
})