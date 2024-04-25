import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('./assets/guts-perfil.jpg')}/>

      <Text style={styles.txt}>Guts</Text>
       
      <StatusBar style="auto" />

      <TextInput 
      style={styles.textInput}
      placeholder='E-mail: '/>

      <TextInput
      secureTextEntry={true}
      style={styles.textInput}
      placeholder='Senha: ' />

      <button style={styles.btn} onPress={ () => alert('Olá') }>Entrar</button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    fontSize: 40,
    marginTop: 20,
  },
  btn: {
    width: 200,
    height: 50,
    padding: 20,
    borderRadius: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  textInput: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    border: 'none'
  }
});
