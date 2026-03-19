import React from "react";
import {StyleSheet,View,Text} from 'react-native';
export  default function Dashboard({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> WELCOME TO MY DASHBOARD</Text>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center", 
        alignItems: "center",     
        padding: 20,
    },
    text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
  },
})