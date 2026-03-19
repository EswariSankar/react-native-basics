import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({name,color='#000',fontsize=20}) => {
  return (
    <Text style={[styles.label,{color,fontSize:fontsize}]}>{name}</Text>
    
  )
}

export default Label

const styles = StyleSheet.create({
    label:{
    fontWeight:'500',
    width: 110,
    marginRight: 10,
    textAlignVertical: 'center',   // ✅ helps vertical alignment
    includeFontPadding: false      // ✅ VERY IMPORTANT (Android fix)
}
})