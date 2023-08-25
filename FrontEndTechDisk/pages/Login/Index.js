import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Provider, MD2Colors } from "react-native-paper";
import ButtonPersonalizado from "../../components/Button";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <View style={styles.container}>
      <View style={{ width: "100%"}}>
        <Text style={{ fontSize: 27, textAlign: "center",color : "#23386D" }}>
          FAÇA SEU LOGIN PARA RECEBER AJUDA!
        </Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.containerInput}>
          <Text style={styles.textLabel}>
            Digite seu{" "}
            <Text style={{ textDecorationLine: "underline",color : "#23386D" }}>E-Mail</Text>
          </Text>
          <TextInput
            label="Email"
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textLabel}>
            Digite sua{" "}
            <Text style={{ textDecorationLine: "underline",color : "#23386D" }}>Senha</Text>
          </Text>
          <TextInput
            label="Senha"
            secureTextEntry
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
            
          />
          <TouchableOpacity style={styles.buttonForgetPassword}><Text style={{color : "#FFFFFF",fontSize : 20}}>Esqueci Senha? Clique Aqui!!</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttosFoter}>
      <ButtonPersonalizado text={"Entrar"} onPress={() => {
          navigation.replace("Home");
        }}/>
      <ButtonPersonalizado text={"Cadastre-se"} onPress={() => {
          navigation.replace("Register");
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
    gap: 30,
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
    gap: 10,
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

export default Login;
