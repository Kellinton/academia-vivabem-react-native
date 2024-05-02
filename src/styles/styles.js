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

// Tela de Equeci a senha
export const forgotPasswordScreenStyles = {
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
      buttonConfirm: {
        width: '60%',
        fontWeight: '800',
        backgroundColor: cores.primary,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 30,
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

// Tela de Dashboard
export const dashboardScreenStyles = {
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
    titleContainer: {
        marginTop: '2em',
    },
    titleName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: cores.primary,
        marginBottom: 10,
    },
    plansContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planName: {
        fontSize: 20,
        fontWeight: 'light',
        color: cores.primary,
        marginBottom: '1em',
    },
    sessionInfo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em',
        borderWidth: 1,
        borderColor: 'gray',
    },
    sessionParagraph: {
        fontSize: 20,
        fontWeight: 'light',
        color: cores.primary,
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '1em',
    },
    buttonPlan: {
        width: '47%',
        fontWeight: '800',
        backgroundColor: cores.secondary,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    upgradeContainer: {
        alignItems: 'center',
        
    },
    upgradeButton: {
        width: '60%',
        fontWeight: '800',
        backgroundColor: cores.accent,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        padding: 20,
        marginTop: 5,
        borderWidth: 1,
        borderColor: cores.primary,
    }
};
  

export default cores;