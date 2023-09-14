import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, Provider, MD2Colors } from "react-native-paper";
import ButtonPersonalizado from "../../components/Button";
import { useTema } from "../../common/context/Tema";

export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { tema, setTema ,text } = useTema();

  return (
    <View style={{  flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      gap: 30,
      marginTop : 25,
      backgroundColor : tema
      }}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 27, textAlign: "center", color: text }}>
          FAÇA SEU CADASTRO!
        </Text>
      </View>
      <View style={styles.containerInput}>
        <View style={styles.containerInput}>
          <Text style={{  fontSize: 25,
    textAlign: "center",color : text}}>
            Digite seu{" "}
            <Text style={{ textDecorationLine: "underline", color: text }}>
              Nome
            </Text>
          </Text>
          <TextInput
            label="Nome"
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={{  fontSize: 25,
    textAlign: "center",color : text}}>
            Digite seu{" "}
            <Text style={{ textDecorationLine: "underline", color: text }}>
              E-Mail
            </Text>
          </Text>
          <TextInput
            label="E-Mail"
            secureTextEntry
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
          {/* <TouchableOpacity style={styles.buttonForgetPassword}>
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Esqueci Senha? Clique Aqui!!
            </Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.containerInput}>
          <Text style={{  fontSize: 25,
    textAlign: "center",color : text}}>
            Digite sua{" "}
            <Text style={{ textDecorationLine: "underline", color: text }}>
              Senha
            </Text>
          </Text>
          <TextInput
            label="Senha"
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={{  fontSize: 25,
    textAlign: "center",color : text}}>
            Digite seu{" "}
            <Text style={{ textDecorationLine: "underline", color: text }}>
              Telefone
            </Text>
          </Text>
          <TextInput
            label="Telefone"
            style={styles.input}
            activeUnderlineColor={MD2Colors.white}
            textColor="black"
            cursorColor={MD2Colors.black}
            outlineColor="black"
          />
        </View>
      </View>
      <View style={styles.buttosFoter}>
      <ButtonPersonalizado texto={"Cadastre-se"} onPress={() => {
          navigation.replace("Home");
        }}/>
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
    marginTop : 25
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
    marginTop : 4
  },
  textLabel: {
    fontSize: 25,
    textAlign: "center",
  },
  buttonForgetPassword: {
    width: "80%",
    height: "18%",
    backgroundColor: "#304FFE",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#0026CA",
    elevation: 15,
    shadowRadius: 20,
    borderRadius: 10,
  },
  buttosFoter: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    gap: 30,
  },
  oneButtonFooter: {
    backgroundColor: "rgba(48, 79, 254, 0.60)",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    borderRadius: 20,
  },
});
