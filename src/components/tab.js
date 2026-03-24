import React from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './dashboard';
import History from './history';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dashboard Stack
function DashboardStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// History Stack
function HistoryStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: 'History',
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'darkred',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 18 }}>🏠 Dashboard</Text>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryStack}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 18 }}>⏱️ History</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}