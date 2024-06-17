import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker } from "react-native";

export default function Treino() {
  const [modalidade, setModalidade] = useState(null); // Estado para controlar a modalidade selecionada
  const [exercicios, setExercicios] = useState([]); // Estado para controlar os exercícios selecionados

  // Função para selecionar a modalidade de exercício
  const selecionarModalidade = (modalidadeSelecionada) => {
    setModalidade(modalidadeSelecionada);
    // Aqui você pode definir a lógica para carregar os exercícios da modalidade selecionada
    // Por enquanto, vamos deixar uma lista vazia
    if (modalidadeSelecionada === 'braco') {
      setExercicios([
        { nome: 'Flexão de Braço' },
        { nome: 'Rosca Direta' },
        { nome: 'Tríceps Pulley' },
      ]);
    } else {
      setExercicios([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Treino</Text>
      
      {/* Inputs de seleção para as modalidades */}
      <View style={styles.selectContainer}>
        <Text style={styles.label}>Selecione a modalidade:</Text>
        <Picker
          selectedValue={modalidade}
          style={styles.select}
          onValueChange={(itemValue) => selecionarModalidade(itemValue)}
        >
          <Picker.Item label="Selecione" value={null} />
          <Picker.Item label="Braço" value="braco" />
          {/* Adicione mais opções para outras modalidades, se necessário */}
        </Picker>
      </View>

      {/* Lista de exercícios */}
      <View style={styles.exerciciosContainer}>
        <Text style={styles.label}>Exercícios:</Text>
        {exercicios.map((exercicio, index) => (
          <Text key={index}>{exercicio.nome}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectContainer: {
    marginBottom: 20,
    width: '80%',
  },
  select: {
    height: 50,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
  },
  exerciciosContainer: {
    width: '80%',
  },
});
