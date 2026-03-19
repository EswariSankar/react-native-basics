/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, useColorScheme,View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/login'; 
import Signup from './src/components/signup'
import Drawermenu from './src/components/drawer';


const Stack= createNativeStackNavigator()
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}



function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} options={{ title: "Sign Up", headerTitleAlign: "center"}}
  />
          <Stack.Screen name='Dashboard' component={Drawermenu} options={{headerShown:false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
    </SafeAreaView>
  )
}


export default App;
