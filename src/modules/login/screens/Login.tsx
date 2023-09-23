import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/theme/theme";

const Login = () => {
    return(
        <View>
            <ContainerLogin>
                <Text/>
                <Input></Input>
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