import styled from "styled-components/native";

interface DisplayProps {
    customMargin?: string;
}

export const DisplayFlexColum = styled.View<DisplayProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: ${(props : any) => (props.customMargin ? props.customMargin : '0px')};
`