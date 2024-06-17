import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //Importando tipo de
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Aula from "./pages/Aula";
import Treino from "./pages/Treino";
import Profile from "./pages/Profile";

//Importando telas

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator tabBarOptions={{
      tabStyle: { padding: 5 } // Ajuste o valor de acordo com sua preferência
    }}>
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={20} color="#34495e" />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Aula"
        component={Aula}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam" size={size} color="#34495e" />
          ),
          tabBarLabel: "Aulas",
        }}
      />
      <Tab.Screen
        name="Treinos"
        component={Treino}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={24} color="#34495e" />
          ),
          tabBarLabel: "Treinos",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color="#34495e" />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
