import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import connectionAPI, { MethodType, connectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";
import { MenuUrl } from "../enums/MenuUrl.enum";
import { setAutorizationToken } from "../functions/connection/auth";

interface requestProps <T> {
    url: string;
    method: MethodType;
    saveGlobal?: (object: T) => void;
    body?: unknown;
    message?: string;
}

export const useRequest = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { setUser } = useUserReducer();
    const { setModal } = useGlobalReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const request = async <T>({url, method, saveGlobal, body, message}: requestProps<T>): Promise<T | undefined> => {
        setLoading(true);
        const returnObject: T | undefined = await connectionAPI.connect<T>(url, method, body)
        .then((result) => {
            if(saveGlobal){
                saveGlobal(result);
            }
            if (message){
                setModal({
                    visible: true,
                    title: 'Sucesso!', 
                    text: message,
                });
            }
            return result;
        })
        .catch((error: Error) => {
            setModal({
                visible: true,
                title: 'Ops!', 
                text: error.message,
            });
            return undefined;
        });
        setLoading(false);
        return returnObject;
    }

    const authRequest = async(body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('http://192.168.86.7:8080/auth', body)
        .then((result) => {
            setAutorizationToken(result.accessToken);
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
        request,
        authRequest,
        setErrorMessage,
    };
};