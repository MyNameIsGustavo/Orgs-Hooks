import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/telas/Home';

function App() {
  return <SafeAreaView style={estilos.tela}>
    <Home/>
  </SafeAreaView> 
}
const estilos = StyleSheet.create({
  tela:{
    flex: 1,
  }
})

export default App;