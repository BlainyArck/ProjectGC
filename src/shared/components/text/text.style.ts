import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    fontSize: string;
    customMargin?: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props : any) => (props.color ? `color: ${props.color}` : '')};
    ${(props : any) => (props.customMargin ? `margin: ${props.customMargin};` : '')}

    padding-top: 3px;
    font-family: ${(props : any) => props.fontFamily};
    font-size: ${(props : any) => props.fontSize};
`;