import { View, Text } from "react-native";
import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Image } from "react-native";

export default function Navbar() {
  return (
    <View style={{ padding: 30, justifyContent: "center", paddingBottom: 10 }}>
      <Image
        source={Logo}
        style={{ width: 50, height: 50,borderRadius :30 }}
      />
    </View>
  );
}
