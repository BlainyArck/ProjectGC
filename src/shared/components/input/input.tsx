import { theme } from "../../theme/theme";
import { DisplayFlexColum } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerInput } from "./input.style"
import { TextInputProps } from "react-native/";

interface InputProps extends TextInputProps{
    title?: string
};

const Input = ({ title, ...props}: InputProps) => {
    return(
        <DisplayFlexColum>
            { title && (
                <Text 
                    margin="0px 0px 4px 8px"
                    color={theme.colors.grayTheme.gray100} 
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                        {title}
                </Text>
            )}
            <ContainerInput {...props}/>
        </DisplayFlexColum>
    );
};

export default Input;