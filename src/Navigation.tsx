import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} ></Stack.Screen>
              <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} ></Stack.Screen>
              <Stack.Screen name={MenuUrl.HOME} component={Home} options={{title: 'Home'}} ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
    );
};

export default Navigation;