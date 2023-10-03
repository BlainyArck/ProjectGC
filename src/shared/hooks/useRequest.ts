import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import { MenuUrl } from "../enums/MenuUrl.enum";

export const useRequest = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async(body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('http://192.168.86.7:8080/auth', body)
        .then((result) => {
            setUser(result.user);
            reset({
                index: 0,
                routes: [{ name: MenuUrl.HOME }]
            })
        })
        .catch(() => {
            setModal({
                visible: true,
                title: 'Ops!', 
                text: 'Usuário ou senha inválidos',
            });
        });
        setLoading(false);
    }
    return {        
        loading,
        errorMessage,
        authRequest,
        setErrorMessage,
    }
}