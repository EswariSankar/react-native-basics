import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './dashboard';
import History from './history';
import { Button } from 'react-native';
const Drawer= createDrawerNavigator();
const Stack=createNativeStackNavigator();

function Dash({navigation}){
    return(
    <Stack.Navigator>
        <Stack.Screen name='Dash' component={Dashboard} options={{
            title:'Dashboard',
            headerLeft:()=>(<Button title='☰' color='hsla(29, 92%, 46%, 0.76)' onPress={()=>navigation.toggleDrawer()} />)
        }} />
    </Stack.Navigator>
    )
}

function His({navigation}){
    return(
    <Stack.Navigator>
        <Stack.Screen name='His' component={History} options={{
            title:'History',
            headerLeft:()=>(<Button title='☰'  color='hsla(29, 92%, 46%, 0.76)' onPress={()=>navigation.toggleDrawer()} />)
        }} />
    </Stack.Navigator>
    )
}
export default function  Drawermenu ()  {
  return (
   
    <Drawer.Navigator initialRouteName='Dashboard' screenOptions={{headerShown:false}}>

        <Drawer.Screen name="Dashboard" component={Dash}/>
        <Drawer.Screen name="History" component={His}/>
    
    </Drawer.Navigator>
   
  )
}