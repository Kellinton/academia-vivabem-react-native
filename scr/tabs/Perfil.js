import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Ícone para a foto de perfil */}
        <View style={styles.profileIconContainer}>
          <Ionicons name="person-circle-outline" size={150} color="#34495e" />
          <TouchableOpacity style={styles.editIconContainer}>
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

        {/* Botão de salvar */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Fundo branco
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
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
    width: "90%",
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1c40f", // Cor da borda inferior dos inputs
    color: "black", // Cor do texto dos inputs
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#191970",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: '60%'
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
