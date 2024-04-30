import * as React from 'react';
import { Button, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loginScreenStyles, forgotPasswordScreenStyles, dashboardScreen } from './src/styles/styles';
import cores from './src/styles/styles'


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
    <View style={dashboardScreen.container}>
      {/* Título */}
      <View style={dashboardScreen.titleContainer}>
        <Text style={dashboardScreen.titleName}>
          Olá, {'<usuário>'}
        </Text>
      </View>

      {/* Planos */}
      <View style={dashboardScreen.plansContainer}>
        <Text style={dashboardScreen.planName}>
          {'<Nome do Plano>'}
        </Text>
        <View style={dashboardScreen.sessionInfo}>
          <Text style={dashboardScreen.sessionParagraph}>Você está na sua</Text>
          <Text style={[dashboardScreen.sessionParagraph, { fontWeight: 'bold', fontSize: 30 }]}>
            {'<cont>ª'}
          </Text> 
          <Text style={dashboardScreen.sessionParagraph}>sessão de treinos.</Text>
        </View>
        <View style={dashboardScreen.buttonsContainer}>
          {/* Botão de acessar aulas*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={dashboardScreen.buttonPlan}
          >
            <Text style={dashboardScreen.buttonText}>Acesse suas aulas</Text>
          </TouchableOpacity>

          {/* Botão de acessar treinos */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={dashboardScreen.buttonPlan}
          >
            <Text style={dashboardScreen.buttonText}>Acesse seu treino</Text>
          </TouchableOpacity>
        </View>
        <View style={dashboardScreen.upgradeContainer}>
          {/* Imagem */}
          <Image
            source={require('./assets/img/fundoDashboard.png')} // Substitua pelo caminho da sua imagem
        
          />
          {/* Botão de acessar treinos */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[dashboardScreen.button, dashboardScreen.upgradeButton]}
          >
            <Text style={dashboardScreen.buttonText}>UPGRADE DO PLANO</Text>
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

export default function App() {
  return (
    // Container de navegação
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
