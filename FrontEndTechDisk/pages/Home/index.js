import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useTema } from "../../common/context/Tema";

export default function Home() {
   
  const { tema, setTema ,text } = useTema();


  return (
    <View style={{    flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 30,
      backgroundColor : tema}}>
      <View style={styles.header}>
        <Text style={{ textAlign: "center", fontSize: 35, color: text }}>
          Sobre Nós
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={{ textAlign: "justify",fontSize : 30, color : text }}>
          A Tech Disk é um trabalho de TCC do curso de informática da FIEC. Nós
          escolhemos este tema na procura de um objetivo para nosso aplicativo.
        </Text>
        <Text style={{ textAlign: "justify",fontSize : 30, color : text }}>
          Detectamos uma carência de plataformas acessíveis para a contratação
          de profissionais de informática, com o foco em ajudar os idodos na
          internet.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 30,
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent : "center",
    gap : 20,
    
  },
});
