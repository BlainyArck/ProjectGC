import styled from "styled-components/native";
import { theme } from "../../theme/theme";

interface ContainerInputProps{
    isError?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    color: ${theme.colors.neutralTheme.black};
    border-radius: 8px;

    border-width: 1px;
    border-color: ${(props : any) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;