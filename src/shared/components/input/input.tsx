import { useState } from "react";
import { theme } from "../../theme/theme";
import { DisplayFlexColum } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerInput, IconEye } from "./input.style"
import { TextInputProps, View } from "react-native/";

interface InputProps extends TextInputProps{
    title?: string
    errorMessage?: string;
    secureTextEntry?: boolean;
    customMargin?: string;
};

const Input = ({ customMargin, secureTextEntry, title, errorMessage, ...props}: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);
    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current);
    };

    return(
        <DisplayFlexColum customMargin={customMargin}>
            { title && (
                <Text 
                    margin="0px 0px 4px 8px"
                    color={theme.colors.grayTheme.gray100} 
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                        {title}
                </Text>
            )}
            <View>
                <ContainerInput 
                    hasSecureTextEntry={secureTextEntry} 
                    secureTextEntry={currentSecure}
                    isError={!!errorMessage} 
                    {...props}/>
                {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20}/>}
            </View>
            {errorMessage && (
                <Text 
                    margin="0px 0px 0px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                    color={theme.colors.orangeTheme.orange80}>
                        {errorMessage}
                </Text>
            )}
        </DisplayFlexColum>
    );
};

export default Input;