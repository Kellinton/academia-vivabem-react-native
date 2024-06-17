// DetalhesPerfil.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";

export default function DetalhesPerfil({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "black" }}>Detalhes do Perfil</Text>
      <Button title="Voltar para o Perfil" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
