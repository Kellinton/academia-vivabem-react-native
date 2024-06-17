import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Instanciar o axios com o token de autenticação
const createAxiosInstance = async () => {
    const token = await AsyncStorage.getItem('userToken');
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
};
export default createAxiosInstance;