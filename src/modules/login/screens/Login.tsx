import { View, Text } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/button/input/input";

const Login = () => {
    return(
        <View>
            <ContainerLogin>
                <Text>Login</Text>
                <Input></Input>
            </ContainerLogin>
        </View>
    )
};

export default Login;