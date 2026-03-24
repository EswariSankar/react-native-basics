import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './tab';
import Profile from './profile';

const Drawer = createDrawerNavigator();

export default function Drawermenu() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>

      {/* Tabs (HIDDEN from drawer) */}
      <Drawer.Screen 
        name="Tabs" 
        component={Tabs}
        options={{ drawerItemStyle: { display: 'none' } }}
      />

      {/* Only visible item */}
      <Drawer.Screen 
        name="Profile" 
        component={Profile}
        options={{ drawerLabel: '👤 Profile' }}
      />

    </Drawer.Navigator>
  );
}