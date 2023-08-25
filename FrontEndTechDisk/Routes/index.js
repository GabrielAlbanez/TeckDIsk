import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Aperture from "../pages/Aperture/Index";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import ForgotPassword from "../pages/forgotPassword/Index";
import Navbar from "../components/Navbar";


export default function MyRoutes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Aperture" component={Aperture} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
