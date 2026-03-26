import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/login';
import Signup from './src/components/signup';
import Drawermenu from './src/components/drawer';
import SplashScreen from './src/components/SplashScreen';
enableScreens();
const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#fff"  translucent={false} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen"
          screenOptions={{

            
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          }
        }}
        >
          <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown:false}}
            />
          <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{ headerShown:false }} 
          />
          <Stack.Screen 
            name="Dashboard" 
            component={Drawermenu} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;