import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style"
import Text from "../text/Text";
import { theme } from "../../theme/theme";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    margin?: string;
};

const Button = ({title, margin, ...props} : ButtonProps) => {
    return(
        <ButtonContainer margin={margin} {...props}>
            <Text color={theme.colors.neutralTheme.white}>{title}</Text>
        </ButtonContainer>
    )
};

export default Button;