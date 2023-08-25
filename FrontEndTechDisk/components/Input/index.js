import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Provider, MD2Colors } from "react-native-paper";

export default function Input({label}) {
  return (
    <>
     <TextInput
            label={label}
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
    </>
  )
}