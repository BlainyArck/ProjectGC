import {NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
import { useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

export const useLogin = () => {
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();

    const handleOnPress = async () =>{
        authRequest({
            email,
            password,
        })
    };

    const handleGoToCreateUser = () => {
        navigate(MenuUrl.CREATE_USER);
    }

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
        handleGoToCreateUser,
    }
}