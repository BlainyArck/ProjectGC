import styled from "styled-components/native";
import { theme } from "../../theme/theme";
import { Icon } from "../icon/icon";


export const ContainerModal = styled.View`
    position: absolute;
    bottom: 0;
    background-color: ${theme.colors.grayTheme.gray100};
    height: 200px;

    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 16px;
    z-index: 9;
`

export const IconCloseModal = styled(Icon)`
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 10;
`