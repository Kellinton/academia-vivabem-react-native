import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Aula = ({ image, title, description }) => (
  <View style={styles.aulaContainer}>
    <Image source={image} style={styles.image} />
    <View style={styles.overlay}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function AulasScreen() {
  const aulas = [
    {
      image: require('../../assets/ginastica.jpg'),
      title: 'ZUMBA',
      description: 'Descubra a alegria de se exercitar com as nossas animadas aulas de Zumba! Misturando movimentos de dança de alta energia com ritmos latinos contagiantes, as aulas de Zumba são perfeitas para todas as idades e níveis de condicionamento físico'
    },

    {
      image: require('../../assets/danca.jpg'),
      title: 'YOGA',
      description: 'Descubra a magia da dança com nossas aulas dinâmicas e envolventes! Oferecemos uma variedade de estilos, desde ballet clássico até hip-hop, atendendo a todas as idades e níveis de habilidade'
    },
    

    {
      image: require('../../assets/pilates.jpg'),
      title: 'PILATES',
      description: 'Fortaleça seu corpo e mente com nossas aulas de Pilates! Focadas em melhorar a flexibilidade, a força muscular e o equilíbrio, nossas sessões são adequadas para todos os níveis de condicionamento físico'
    },

    {
      image: require('../../assets/artesmarciais.jpg'),
      title: 'LUTAS',
      description: 'Liberte seu potencial com nossas intensas e empolgantes aulas de lutas! Oferecemos uma variedade de estilos, incluindo boxe, jiu-jitsu, muay thai e karatê, para todas as idades e níveis de habilidade. '
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
               <Text style={styles.pageTitle}>Aulas</Text>
        {aulas.map((aula, index) => (
          <Aula key={index} image={aula.image} title={aula.title} description={aula.description} />
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
  aulaContainer: {
    marginBottom: 20,
    position: 'relative',
    marginHorizontal: 16
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4ACFAC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
