import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/theme/theme";
import { Icon } from "../../../shared/components/icon/icon";

const Login = () => {
    return(
        <View>
            <ContainerLogin>
                <Icon name="home3" color="blue" size={44}/>
                <Input
                    customMargin="0px 0px 8px 0px"  
                    placeholder="Digite seu email" 
                    title="Email:">    
                </Input>
                <Input 
                    secureTextEntry 
                    placeholder="Digite sua senha" 
                    title="Senha:">    
                </Input>
                <Button 
                    type={theme.buttons.buttonsTheme.primary} 
                    margin="16px" 
                    title="ENTRAR"
                />
            </ContainerLogin>
        </View>
    )
};

export default Login;