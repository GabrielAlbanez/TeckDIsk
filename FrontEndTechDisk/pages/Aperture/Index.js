import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native'
import Logo from "../../assets/imgs/Logo.png"
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons'; 

export default function Aperture({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={Logo} style={styles.LogoImg} />
      </View>
      <View style={styles.footer}>
         <Text style={styles.Text}>CLIQUE ABAIXO</Text>
         <TouchableOpacity style={styles.buttoEntar} onPress={()=>{
          navigation.navigate('Login')
         }}>
         <AntDesign name="right" size={80} color="black" />
         </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    backgroundColor: "white"
    
  },

  Logo : {
    width : "100%",
    height : "55%",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
  },

  LogoImg : {
    width : "70%",
    height : "65%",
    borderRadius : 200
  },

  footer : {
    width : "100%",
    height : "100%",
    display : "flex",
    alignItems : "center",
  },

  buttoEntar : {
     backgroundColor : "white",
     borderRadius : 300,
     height : "23%",
     width : "45%",
     shadowColor: 'black',
     shadowRadius: 20,
     borderWidth: 0.5,
     elevation: 5,
     alignItems : "center",
     justifyContent : "center"
     
  },

 Text : {
  fontSize: 35,
  lineHeight: 84,
  textAlign: 'center',
 }
})