import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from './Icon';

const Header = ({ title, onBack, rightComponent }) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <Pressable onPress={onBack} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <Icon name="arrow-back" size={24} color="white" />
        </Pressable>
      ) : (
        <View style={{ width: 24 }} /> // placeholder to keep title centered
      )}

      <Text style={styles.title}>{title}</Text>

      <View style={styles.right}>
        {rightComponent ? rightComponent : <View style={{ width: 24 }} />} 
        {/* Empty view if no button */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'rgb(129, 53, 190)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width:'100%'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  right: {
    width: 24,
  },
});