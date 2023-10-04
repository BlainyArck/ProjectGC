import { useEffect } from "react";
import { ContainerSplash, ImagelogoSplash } from "../styles/splash.style";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { useUserReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { getAutorizationToken } from "../../../shared/functions/connection/auth";

const TIME_SLEEP = 5000;
const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { setUser } = useUserReducer();
    useEffect(() => {
        const findUser = async () => {
            let returnUser = undefined;
            const token = await getAutorizationToken();
            if (token){
                returnUser = await request({
                    url: URL_USER,
                    method: MethodEnum.GET,
                    saveGlobal: setUser,
                });
            }
            return returnUser;
        }

        const verifyLogin = async () => {
            const [returnUser] = await Promise.all([
                findUser(),
                new Promise((r) => setTimeout(r, TIME_SLEEP)),
            ]);

            if (returnUser){
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME}]
                })
            } else {
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.LOGIN}]
                })
            }
        }
        verifyLogin();
    }, []);

    return(
        <ContainerSplash>
            <ImagelogoSplash resizeMode="contain" source={require('../../../assets/images/Logo.png')}/>
        </ContainerSplash>
    )
}

export default Splash;