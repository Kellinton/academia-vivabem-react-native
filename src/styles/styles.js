// styles.js
const cores = {
    primary: '#34495E',
    secondary: '#48C9B0',
    accent: '#F1C40F'
}
// Tela de Login
export const loginScreenStyles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    logo: {
      width: '100%',
      marginTop: '4em',
      marginBottom: '1em',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: cores.primary,
      marginBottom: '1em',
    },
    input: {
      width: '100%',
      height: 40,
      color: cores.primary,
      borderColor: cores.secondary,
      borderBottomWidth: 2,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    buttonLogin: {
      width: '60%',
      fontWeight: '800',
      backgroundColor: cores.primary,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginTop: 10,
      marginBottom: 80,
    },
    buttonPassword: {
        width: '50%',
        fontWeight: '800',
        backgroundColor: cores.secondary,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 80,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },

  };

  

export default cores;