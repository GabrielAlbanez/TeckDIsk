import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 30,
  }
});