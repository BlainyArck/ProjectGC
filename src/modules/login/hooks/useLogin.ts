import {NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import { useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, errorMessage, loading, user, setErrorMessage } = useRequest();

    console.log('user', user);
    const handleOnPress = async () =>{
        authRequest({
            email,
            password,
        })
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