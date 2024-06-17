import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Aula() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Página Perfil
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});