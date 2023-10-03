import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorare, setItemStorage } from "../storageProxy";


export const unsetAuthorizationToken = () => removeItemStorare(AUTHORIZATION_KEY);

export const setAutorizationToken = async (token: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAutorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);