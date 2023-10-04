import { View, TouchableOpacity } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/theme/theme";
import { useLogin } from "../hooks/useLogin";
import { useNavigation } from "@react-navigation/native";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";

const Login = () => {
    const navigation = useNavigation();
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleGoToCreateUser,
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
                    title="ENTRAR"
                    margin="16px" 
                    onPress={handleOnPress}
                />
                <TouchableOpacity onPress={handleGoToCreateUser}>
                    <Text                         
                        color={theme.colors.mainTheme.primary}
                        type={textTypes.PARAGRAPH_SEMI_BOLD}
                        >Cadastrar Usuário
                    </Text>
                </TouchableOpacity>
            </ContainerLogin>
        </View>
    )
};

export default Login;