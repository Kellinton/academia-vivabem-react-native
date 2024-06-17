import React from "react";
import { StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground, } from "react-native";

export default function Home() {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../../../assets/logo1.png")} />
        
        <Text style={styles.text}>LOGIN</Text>
        <TextInput
          style={[styles.input, isFocused && styles.focusedInput]}
          placeholder="Digite seu e-mail:"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextInput
          secureTextEntry={true}
          style={[styles.input, isFocused && styles.focusedInput]}
          placeholder="Digite sua senha:"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.resetSenha}>Esqueceu a senha?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  // Adicione o estilo para quando o TextInput estiver focado
  focusedInput: {
    borderBottomColor: "#f1c40f", // Altere para a cor desejada
  },
});
