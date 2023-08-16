import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import imgBack from "../../assets/imgs/backImg.jpg"
import React from 'react'

export default function Aperture() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgBack} resizeMode='cover'  style={styles.img}>
        <Text style={styles.Text}>Aperture</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    backgroundColor: "white"
    
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
 },
 img : {
  flex: 1,
  paddingTop : 50,
  alignItems: 'center',
  opacity : 0.6,
  backgroundColor : 'black'
 },
 Text : {
  fontSize: 42,
  lineHeight: 84,
  fontWeight: 'bold',
  textAlign: 'center',
 }
})