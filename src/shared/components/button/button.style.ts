import styled from "styled-components/native";
import { theme } from "../../theme/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
    margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    ${(props : any) => (props.margin ? `margin: ${props.margin};` : '')}
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background-color: blue;
    justify-content: center;
    align-items: center;
`
export const GradientButton = styled (LinearGradient)<ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: blue;
    justify-content: center;
    align-items: center;
`

export const ButtonSecundary = styled(ButtonContainer)<ButtonContainerProps>`
    ${(props : any) => (props.margin ? `margin: ${props.margin};` : '')};
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
`