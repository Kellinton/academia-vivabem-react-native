import * as React from "react";
import {useState} from "react"; // Reconhe os comandos de start Inicial

import Modal from "react-native-modal";


import axios from "axios"; // Faz a requisição HTTP para a API
import AsyncStorage from "@react-native-async-storage/async-storage"; // É usado para armazenar e recuperar dados localmente em aplicativos React Native.

//importação dos atributos
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
//importação dos tipos de navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//Importação da biblioteca de ícones
import { Ionicons, Entypo } from "@expo/vector-icons";

//importação das telas
import Aula from "./scr/tabs/Aula";
import Treino from "./scr/tabs/Treino";
import Perfil from "./scr/tabs/Perfil";
import Home from "./scr/tabs/Home";
import Matricula from "./scr/tabs/Matricula";
import Video from "./scr/tabs/videos";


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Defina suas tabs como stacks para permitir navegações internas
function HomeStack({route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} initialParams={{ idAluno: route.params.idAluno }} />
      <Stack.Screen name="Matricula" component={Matricula} />
    </Stack.Navigator>
  );
}

function AulaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aula" component={Aula} />
    </Stack.Navigator>
  );
}

function TreinoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Treino" component={Treino} />
    </Stack.Navigator>
  );
}

function PerfilStack({route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} initialParams={{idAluno: route.params.idAluno}}  />
    </Stack.Navigator>
  );
}

function VideoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Video} />
    </Stack.Navigator>
  );
}

// Função para criar as tabs usando as stacks definidas acima
function MyTabs({route}) {
  return (
    <Tab.Navigator>



      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        initialParams={{idAluno: route.params.idAluno}} //  id sendo variável global
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color="#34495e" />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Vídeos"
        component={VideoStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="video" color="#34495e" size={26} />
          ),
        }}
      />


      <Tab.Screen
        name="Aula"
        component={AulaStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle" color="#34495e" size={26} />
          ),
          tabBarLabel: "Aulas",
        }}
      />
      <Tab.Screen
        name="Treino"
        component={TreinoStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell-sharp" size={24} color="#34495e" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
        initialParams={{idAluno: route.params.idAluno}}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" color="#34495e" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Funções de tela de login e redefinição de senha
function LoginScreen({ navigation }) {

  // Preparando as variáveis
  const [email, setEmail] = useState("");  // Declara uma variável de estado 'email' com valor inicial vazio e uma função 'setEmail' para atualizar esse estado
  const [senha, setSenha] = useState("");  // Declara uma variável de estado 'senha' com valor inicial vazio e uma função 'setSenha' para atualizar esse estado

  const [errorModalVisible, setErrorModalVisible] = useState(false);  // Declara uma variável de estado 'errorModalVisible' com valor inicial 'false' e uma função 'setErrorModalVisible' para atualizar esse estado
  
  const [isFocused, setIsFocused] = React.useState(false);  // Declara uma variável de estado 'isFocused' com valor inicial 'false' e uma função 'setIsFocused' para atualizar esse estado

  const handleLogin = async () => {  // Declara uma função assíncrona 'handleLogin' para tratar a ação de login, e verificando se o email ou a senha estõa preenchidos
  if (!email.trim() || !senha.trim()){
    console.log(email);
    setErrorModalVisible(true);
    return;
  }

  try {
    const resposta = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: email,
        senha: senha
    });
    if (resposta.data) {  // Verifica se a resposta contém dados
      const aluno = resposta.data;  // Armazena os dados da resposta na variável 'aluno'
  
      if (aluno) {  // Verifica se 'aluno' não é nulo ou indefinido
        console.log(aluno);  // Imprime o objeto 'aluno' no console
        console.log(aluno.usuario.dados_aluno.idAluno);  // Imprime o 'idAluno' do aluno no console
        console.log(aluno.usuario.dados_aluno.nome);  // Imprime o 'nomeAluno' no console
        console.log(aluno.acess_token);  // Imprime o token de acesso no console
  
        const idAluno = aluno.usuario.dados_aluno.idAluno;  // Extrai e armazena o 'idAluno' da resposta
        const token = aluno.acess_token;  // Extrai e armazena o token de acesso da resposta
  
        // Armazena o token na memória do aplicativo (AsyncStorage) para manter o estado de logado quando sair do aplicativo e retornar
        await AsyncStorage.setItem('userToken', token);
  
        navigation.navigate('Home', { idAluno });  // Navega para a tela 'Home' passando 'idAluno' como parâmetro
      }
    }
  } catch (error) {
    console.error("Erro ao verificar o email e a senha", error);  // Imprime o erro no console se ocorrer algum erro na requisição ou no processamento
    setErrorModalVisible("Erro", "Erro ao verificar email e senha");  // Exibe um modal de erro com a mensagem apropriada
  }
  
};
  


  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.img} source={require("./assets/logo1.png")} />
      <Text style={styles.text}>LOGIN</Text>
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        placeholder="Digite seu e-mail:"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TextInput
        secureTextEntry={true}
        style={[styles.input, isFocused && styles.focusedInput]}
        placeholder="Digite sua senha:"
        value={senha}
        onChangeText={setSenha}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={handleLogin} // executando a função handleLogin ao clicar
      >
        <Text style={styles.btnText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
        <Text style={styles.resetSenha}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <Modal isVisiblie={errorModalVisible} onBackdropPress={() => setErrorModalVisible(false)}>
          <View style={styles.errorModalVisible}>
            <Text style={styles.errorModalTitle}>Erro</Text>
            <Text style={styles.errorModalMessage}>Email ou senha incorreta. Tente novamente.</Text>
            <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
              <Text style={styles.errorModalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
      </Modal>

    </SafeAreaView>
  );
}

function ResetScreen({ navigation }) {
  return (
    <View style={styles.resetContainer}>
      <Image style={styles.img} source={require("./assets/logo1.png")} />
      <Text style={styles.instructionText}>Preencha seus Dados</Text>
      <TextInput style={styles.inputField} placeholder="Seu email" />
      <TextInput style={styles.inputField} placeholder="Sua Data Nasc" />
      <TextInput style={styles.inputField} placeholder="Seu Telefone" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Defina a navegação principal usando a stack que contém as tabs
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de login
        />
        <Stack.Screen
          name="Home" // Main
          component={MyTabs}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela principal
        />
        <Stack.Screen name="Reset" component={ResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






// estilização dos itens
const styles = StyleSheet.create({
  resetSenha: {
    color: "#48c9b0",
    margin: 10,
  },
  text: {
    fontSize: 40,
    margin: 30,
    fontWeight: "bold",
    color: "#34495e",
    letterSpacing: 2,
  },
  img: {
    width: 300,
    height: 100,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: "#48c9b0",
    width: "90%",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  btn: {
    backgroundColor: "#f1c40f",
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  btnText: {
    color: "#fff",
    backgroundColor: "#f1c40f",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  focusedInput: {
    borderBottomColor: "#f1c40f",
  },
  resetContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 135,
    height: 50,
    marginTop: 40,
  },
  instructionText: {
    fontSize: 25,
    color: "#23475F",
    marginTop: 15,
  },
  inputField: {
    width: "90%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#48C9B0",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
  resetButton: {
    width: "40%",
    height: 40,
    backgroundColor: "#34495E",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});