import * as React from 'react';
import { Button, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { loginScreenStyles, forgotPasswordScreenStyles, dashboardScreenStyles } from './src/styles/styles';
import cores from './src/styles/styles';


// 648x1266 imagem de background




function LoginScreen({ navigation }) {
  return (
    <View style={loginScreenStyles.container}>

      {/* Logo */}
      
      <Image
        source={require('./assets/img/logoVivaBem.png')}
        style={loginScreenStyles.logo}
      />

      {/* Título */}
      <Text style={loginScreenStyles.title}>LOGIN</Text>

      {/* Campos de Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor={cores.primary}
        keyboardType="email-address"
        style={loginScreenStyles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor={cores.primary}
        secureTextEntry={true}
        style={loginScreenStyles.input}
      />
        
      {/* Botão de Entrar */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={loginScreenStyles.buttonLogin}
      >
        <Text style={loginScreenStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Esqueci a Senha */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Esqueci a senha')}
        style={loginScreenStyles.buttonPassword}
      >
        <Text style={loginScreenStyles.buttonText}>Esqueci a senha</Text>
      </TouchableOpacity>


    </View>
  );
}







function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={forgotPasswordScreenStyles.container}>

    {/* Logo */}

    <Image
    source={require('./assets/img/logoVivaBem.png')}
    style={forgotPasswordScreenStyles.logo}
    />

    {/* Título */}
    <Text style={forgotPasswordScreenStyles.title}>PREENCHA SEUS DADOS</Text>

    {/* Campos de Input */}
    <TextInput
    placeholder="Email: "
    placeholderTextColor={cores.primary}
    keyboardType="email-address"
    style={forgotPasswordScreenStyles.input}
    />
    <TextInput
    placeholder="Data Nasc: "
    placeholderTextColor={cores.primary}
    keyboardType="numeric"
    style={forgotPasswordScreenStyles.input}
    />
    <TextInput
    placeholder="Telefone: "
    placeholderTextColor={cores.primary}
    keyboardType="numeric"
    style={forgotPasswordScreenStyles.input}
    />

    
    {/* Botão de Confirmar */}
    <TouchableOpacity
    onPress={() => navigation.navigate('Login')}
    style={forgotPasswordScreenStyles.buttonConfirm}
    >
    <Text style={forgotPasswordScreenStyles.buttonText}>CONFIRMAR</Text>
    </TouchableOpacity>

    </View>
  );
}








function DashboardScreen({ navigation }) {
  return (
    <View style={dashboardScreenStyles.container}>
      {/* Título */}
      <View style={dashboardScreenStyles.titleContainer}>
        <Text style={dashboardScreenStyles.titleName}>
          Olá, {'<usuário>'}
        </Text>
      </View>

      {/* Planos */}
      <View style={dashboardScreenStyles.plansContainer}>
        <Text style={dashboardScreenStyles.planName}>
          {'<Nome do Plano>'}
        </Text>
        <View style={dashboardScreenStyles.sessionInfo}>
          <Text style={dashboardScreenStyles.sessionParagraph}>Você está na sua</Text>
          <Text style={[dashboardScreenStyles.sessionParagraph, { fontWeight: 'bold', fontSize: 30 }]}>
            {'<cont>ª'}
          </Text> 
          <Text style={dashboardScreenStyles.sessionParagraph}>sessão de treinos.</Text>
        </View>
        <View style={dashboardScreenStyles.buttonsContainer}>
          {/* Botão de acessar aulas*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={dashboardScreenStyles.buttonPlan}
          >
            <Text style={dashboardScreenStyles.buttonText}>Acesse suas aulas</Text>
          </TouchableOpacity>

          {/* Botão de acessar treinos */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={dashboardScreenStyles.buttonPlan}
          >
            <Text style={dashboardScreenStyles.buttonText}>Acesse seu treino</Text>
          </TouchableOpacity>
        </View>
        <View style={dashboardScreenStyles.upgradeContainer}>
          {/* Imagem */}
          <Image
            source={require('./assets/img/fundoDashboard.png')} // Substitua pelo caminho da sua imagem
        
          />
          {/* Botão de acessar treinos */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[dashboardScreenStyles.button, dashboardScreenStyles.upgradeButton]}
          >
            <Text style={dashboardScreenStyles.buttonText}>UPGRADE DO PLANO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}














const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Esqueci a senha" component={ForgotPasswordScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
//   <Stack.Navigator screenOptions={{ headerShown: false }}></Stack.Navigator>
}

const Tab = createBottomTabNavigator();

    export default function App() {
    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Exercícios" component={MyStack} options={{tabBarIcon:({color, size}) => <Ionicons name='barbell-outline' color={color} size={size} /> }} />
            <Tab.Screen name="Vídeos" component={MyStack} options={{tabBarIcon:({color, size}) => <Ionicons name='play-outline' color={color} size={size} /> }} />
            <Tab.Screen name="Aulas" component={MyStack} options={{tabBarIcon:({color, size}) => <Ionicons name='body-outline' color={color} size={size} /> }} />
            <Tab.Screen name="Perfil" component={MyStack} options={{tabBarIcon:({color, size}) => <Ionicons name='person-circle-outline' color={color} size={size} /> }} />
            {/* Adicione mais tabs conforme necessário */}
        </Tab.Navigator>
        </NavigationContainer>
    );
}
