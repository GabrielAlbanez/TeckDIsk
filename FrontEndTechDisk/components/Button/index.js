import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonPersonalizado({ text,onPress }) {
  return (
    <>
      <TouchableOpacity
        
        style={styles.oneButtonFooter}
        onPress={onPress}
      >
        <Text style={{ fontSize: 27 }}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  oneButtonFooter: {
    backgroundColor: "rgba(48, 79, 254, 0.60)",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    borderRadius: 20,
  },
});
