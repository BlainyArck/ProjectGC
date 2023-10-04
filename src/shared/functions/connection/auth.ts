import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorare, setItemStorage } from "../storageProxy";
import { MenuUrl } from "../../enums/MenuUrl.enum";


export const unsetAuthorizationToken = () => removeItemStorare(AUTHORIZATION_KEY);

export const setAutorizationToken = async (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAutorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
    unsetAuthorizationToken();
    navigate.reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN}],
    });
};