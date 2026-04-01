import React, { useState, useEffect } from "react";
import { StatusBar, useColorScheme, View, Text } from "react-native";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "./src/components/login";
import Signup from "./src/components/signup";
import Drawermenu from "./src/components/drawer";
import SplashScreen from "./src/components/SplashScreen";

enableScreens();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        // ✅ Clear token on every app start
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("refreshToken");
        setToken(null);
      } catch (error) {
        console.log("Error clearing token:", error);
      }
    };

  Promise.all([
    loadToken(),
    new Promise<void>(resolve => setTimeout(resolve, 6000))
  ]).then(() => setLoading(false));

}, []);// ✅ useEffect closes here

  // ✅ return is outside useEffect
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="#fff"
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {loading ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : !token ? (
            <>
              <Stack.Screen name="Login">
                {(props) => <Login {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Signup">
                {(props) => <Signup {...props} setToken={setToken} />}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="Dashboard">
              {(props) => <Drawermenu {...props} setToken={setToken} token={token} />}
            </Stack.Screen>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;