import { ContainerInput } from "./input.style"
import { TextInputProps } from "react-native/types";

interface InputProps extends TextInputProps{

}

const Input = ({...props}: InputProps) => {
    return(
        <ContainerInput {...props}/>
    )
};

export default Input;