import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text"
import { logout } from "../../../shared/functions/connection/auth";
import { View } from "react-native";

const Profile = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    return  (
        <View>
            <Text>
                Profile
            </Text>
            <Button title="Sair" onPress={() => logout(navigation)}/>
        </View>
    )
}

export default Profile;