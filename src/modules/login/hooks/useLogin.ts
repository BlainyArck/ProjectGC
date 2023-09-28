import {NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import { useState } from "react";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () =>{
        setLoading(true);
        await connectionAPIPost('http://192.168.86.7:8080/auth', {
            email,
            password,
        }).catch(() => {
            setErrorMessage('Usuário ou senha inválido')
        });
        setLoading(false);        
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(event.nativeEvent.text);
        setErrorMessage('');
    };
    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(event.nativeEvent.text);
        setErrorMessage('');
    };
    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    }
}