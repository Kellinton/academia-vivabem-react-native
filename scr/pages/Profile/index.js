import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Ícone para a foto de perfil */}
      <View style={styles.profileIconContainer}>
        <Ionicons name="person-circle-outline" size={100} color="#34495e" />
        <TouchableOpacity
          style={styles.editIconContainer}
        >
          <Ionicons name="create-outline" size={24} color="#f1c40f" />
        </TouchableOpacity>
      </View>
      
      {/* Inputs para editar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#34495e"
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          placeholderTextColor="#34495e"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#34495e"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#34495e"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#34495e"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Fundo branco
  },
  profileIconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1c40f", // Cor da borda inferior dos inputs
    color: "black", // Cor do texto dos inputs
  },
});
