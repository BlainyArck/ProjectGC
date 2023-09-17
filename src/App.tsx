import { Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text`
    font-size: 34px;
    color: red;
`

const App = () => {
    return(
        <SafeAreaView>
            <Text>Testando</Text>
            <TextNew>Styled Component</TextNew>
        </SafeAreaView>
    );
};

export default App;