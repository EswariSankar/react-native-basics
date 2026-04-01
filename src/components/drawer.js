import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './tab';
import Profile from './profile';

const Drawer = createDrawerNavigator();

export default function Drawermenu({ setToken,token }) {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>

      {/* Tabs (HIDDEN from drawer) */}

      <Drawer.Screen name="Tabs" options={{ drawerItemStyle: { display: 'none' } }}>
        {(props) => <Tabs {...props} token={token} />}
      </Drawer.Screen>

      {/* Only visible item */}
      <Drawer.Screen 
        name="Profile" 
        options={{ drawerLabel: '👤 Profile' }}
      >
        {(props) => <Profile {...props} setToken={setToken} />}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
}