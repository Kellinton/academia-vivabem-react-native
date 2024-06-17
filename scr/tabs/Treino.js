import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Section = ({ title, exercises, toggleExerciseCompleted }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={24} color="black" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.sectionContent}>
          {exercises.map((exercise, index) => (
            <TouchableOpacity key={index} style={styles.exercise} onPress={() => toggleExerciseCompleted(title, index)}>
              <Text>{exercise.name}</Text>
              <Ionicons name={exercise.completed ? "checkmark-circle" : "ellipse-outline"} size={24} color={exercise.completed ? "#4ACFAC" : "grey"} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default function TreinoScreen() {
  const initialTreino = [
    {
      title: "Braço",
      exercises: [
        { name: "Exercício 1", completed: true },
        { name: "Exercício 2", completed: false }
      ]
    },
    {
      title: "Peito",
      exercises: [
        { name: "Exercício 1", completed: false },
        { name: "Exercício 2", completed: true }
      ]
    },
    {
      title: "Pernas",
      exercises: [
        { name: "Agachamento com barra", completed: true },
        { name: "Agachamento hack", completed: true },
        { name: "Prensa de pernas", completed: true },
        { name: "Cadeira extensora", completed: true },
        { name: "Flexora deitado", completed: false },
        { name: "Elevação de panturrilhas", completed: false },
        { name: "Agachamento unilateral", completed: false }
      ]
    }
  ];

  const [treino, setTreino] = useState(initialTreino);

  const toggleExerciseCompleted = (sectionTitle, exerciseIndex) => {
    setTreino(prevTreino =>
      prevTreino.map(section =>
        section.title === sectionTitle
          ? {
              ...section,
              exercises: section.exercises.map((exercise, index) =>
                index === exerciseIndex ? { ...exercise, completed: !exercise.completed } : exercise
              )
            }
          : section
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.pageTitle}>Treino</Text>
        {treino.map((section, index) => (
          <Section key={index} title={section.title} exercises={section.exercises} toggleExerciseCompleted={toggleExerciseCompleted} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backIcon: {
    margin: 16
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionContent: {
    padding: 16
  },
  exercise: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  }
});
