import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Aperture from "../pages/Aperture/Index";

import ForgotPassword from "../pages/forgotPassword/Index";
import Navbar from "../components/Navbar";
import Register from "../pages/Register/Index";
import Login from "../pages/Login/Index";
import Home from "../pages/Home";
import { TemaProvider } from "../common/context/Tema";
import { useColorScheme } from "react-native";

export default function MyRoutes() {
  const Stack = createStackNavigator();

  
 

  return (
    <NavigationContainer>
      <TemaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Aperture" component={Aperture} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </TemaProvider>
    </NavigationContainer>
  );
}
