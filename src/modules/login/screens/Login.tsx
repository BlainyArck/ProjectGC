import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/theme/theme";

const Login = () => {
    return(
        <View>
            <ContainerLogin>
                <Input 
                    errorMessage="Usuário ou senha inválido" 
                    placeholder="Digite seu email" 
                    title="Email:">    
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