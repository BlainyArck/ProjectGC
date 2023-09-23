import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";

import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";

const Login = () => {
    return(
        <View>
            <ContainerLogin>
                <Text/>
                <Input></Input>
                <Button margin="16px" title="ENTRAR" />
            </ContainerLogin>
        </View>
    )
};

export default Login;