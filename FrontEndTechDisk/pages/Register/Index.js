import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { TextInput, Provider, MD2Colors } from "react-native-paper";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (email, senha) => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((dadosDoUsuario) => {
        console.log(dadosDoUsuario);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 25, textAlign: "center" }}>
          FAÇA SEU LOGIN PARA RECEBER AJUDA!
        </Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.containerInput}>
          <Text style={styles.textLabel}>
            Digite seu{" "}
            <Text style={{ textDecorationLine: "underline" }}>E-Mail</Text>
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            <Text style={{ textDecorationLine: "underline" }}>Senha</Text>
          </Text>
          <TextInput
            label="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
            
          />
          <TouchableOpacity><Text>Esqueci Senha</Text></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity><Text>Cadastrar</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    gap: 20,
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
});

export default Register;
