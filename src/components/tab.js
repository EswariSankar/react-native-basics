import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './dashboard';
import History from './history';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dashboard Stack
function DashboardStack({ navigation, token }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="transparent"
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      >
        {(props) => <Dashboard {...props} token={token} />}
      </Stack.Screen>
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
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="transparent"
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Tabs({ token }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'darkred',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'DashboardTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'HistoryTab') {
            iconName = focused ? 'time' : 'time-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      {/* ✅ children pattern so token can be passed into DashboardStack */}
      <Tab.Screen
        name="DashboardTab"
        options={{ tabBarLabel: 'Dashboard' }}
      >
        {(props) => <DashboardStack {...props} token={token} />}
      </Tab.Screen>

      <Tab.Screen
        name="HistoryTab"
        component={HistoryStack}
        options={{ tabBarLabel: 'History' }}
      />
    </Tab.Navigator>
  );
}