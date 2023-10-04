import { View } from "react-native";
import Text from "../../../shared/components/text/Text";
import Button from "../../../shared/components/button/Button";
import { logout } from "../../../shared/functions/connection/auth";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    return (
        <View>
            <Text>HOME</Text>
            <Button title="SAIR" onPress={() => logout(navigation)}/>
        </View>
    )
}

export default Home;