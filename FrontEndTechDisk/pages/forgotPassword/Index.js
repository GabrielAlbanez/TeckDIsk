import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Provider, MD2Colors } from "react-native-paper";
import { useTema } from "../../common/context/Tema";
import ButtonPersonalizado from "../../components/Button";

export default function ForgotPassword({navigation}) {

  const { tema, setTema ,text } = useTema();

  return (
    <View style={{  flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 80,
      backgroundColor : tema
      }}>
      <View style={{ width: "100%"}}>
        <Text style={{ fontSize: 27, textAlign: "center",color : text }}>
          ESQUECI A SENHA
        </Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.containerInput}>
          <Text style={{fontSize: 25,
    textAlign: "center",color : text}}>
            Digite Sua Nova{" "}
            <Text style={{ textDecorationLine: "underline",color : text}}>Senha</Text>
          </Text>
          <TextInput
            label="Senha"
            style={styles.input}
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
            secureTextEntry 
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={{fontSize: 25,
    textAlign: "center",color : text}}>
            Confirme Sua{" "}
            <Text style={{ textDecorationLine: "underline",color : text }}>Senha</Text>
          </Text>
          <TextInput
            label="Senha"
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
            secureTextEntry 
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
            
          />
        </View>
      </View>
      <View style={styles.buttosFoter}>
      <ButtonPersonalizado texto={"Entrar"} onPress={() => {
          navigation.replace("Login");
        }}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 80,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    border: "black",


    
  },
  button: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "black",
  },
  containerInput: {
    width: "100%",
    gap: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 25,
    textAlign: "center",
  },
  buttonForgetPassword : {
    width : "80%",
    height : "18%",
    backgroundColor : "#304FFE",
    alignItems : "center",
    justifyContent : "center",
    marginTop : 20,
    shadowColor : "#0026CA",
    elevation: 15,
    shadowRadius: 20,
    borderRadius : 10,

  },
  buttosFoter:{
    alignItems : "center",
    justifyContent : "center",
    width : "100%",
    height : "15%",
    gap : 30
    
  },
  oneButtonFooter:{
    backgroundColor : "rgba(48, 79, 254, 0.60)",
    width: "70%",
    alignItems : "center",
    justifyContent : "center",
    height : "40%",
    borderRadius : 20
  }
});