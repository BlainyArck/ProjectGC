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
    flex-direction: row;
    background-color: blue;
    justify-content: center;
    align-items: center;
`
export const GradientButton = styled (LinearGradient)<ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    flex-direction: row;
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
export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
    background-color: ${theme.colors.grayTheme.gray100};
`

export const ActivityIndicatorButton = styled.ActivityIndicator`
    margin-left: 8px;
`