import { View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/theme/theme";
import { useLogin } from "../hooks/useLogin";


const Login = () => {
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();
    
    return(
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="contain" source={require('../../../assets/images/Logo.png')}/>
                <Input
                    value={email}
                    errorMessage={errorMessage}
                    customMargin="0px 0px 8px 0px"  
                    placeholder="Digite seu email" 
                    title="Email:"
                    onChange={handleOnChangeEmail}
                >    
                </Input>
                <Input 
                    value={password}
                    errorMessage={errorMessage}
                    secureTextEntry 
                    placeholder="Digite sua senha" 
                    title="Senha:"
                    onChange={handleOnChangePassword}
                >    
                </Input>
                <Button 
                    loading={loading}
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