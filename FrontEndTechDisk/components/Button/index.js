import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTema } from "../../common/context/Tema";

export default function ButtonPersonalizado({ texto,onPress }) {

  const { tema, setTema, text, corButton } = useTema();

  return (
    <>
      <TouchableOpacity
        
        style={{
          backgroundColor: corButton,
          width: "70%",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
          borderRadius: 20,
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 27 , color : text }}>{texto}</Text>
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
