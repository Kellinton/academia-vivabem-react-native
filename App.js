import * as React from 'react';
import { Button, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loginScreenStyles } from './src/styles/styles';
import cores from './src/styles/styles'







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
        style={loginScreenStyles.buttonLogin}
      >
        <Text style={loginScreenStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Esqueci a Senha */}
      <TouchableOpacity
        style={loginScreenStyles.buttonPassword}
      >
        <Text style={loginScreenStyles.buttonText}>Esqueci a senha</Text>
      </TouchableOpacity>
  
        {/* <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
        /> */}

    </View>
  );
}







function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Notificações"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}








function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}







function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Voltar" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}







const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // Container de navegação
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
