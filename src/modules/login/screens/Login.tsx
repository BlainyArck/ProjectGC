import { View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/theme/theme";
import axios from "axios";

const Login = () => {
    const handleOnPress = async () =>{
        console.log('clicou')
    }
    return(
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="contain" source={require('../../../assets/images/Logo.png')}/>
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
                    onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    )
};

export default Login;