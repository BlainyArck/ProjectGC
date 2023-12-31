import { useState, forwardRef } from "react";
import { TextInput } from "react-native"
import { theme } from "../../theme/theme";
import { DisplayFlexColum } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ContainerInput, IconEye } from "./input.style"
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, View } from "react-native/";
import { insertMaskInCpf } from "../../functions/cpf";
import { insertMaskInPhone } from "../../functions/phone";

interface InputProps extends TextInputProps{
    title?: string
    errorMessage?: string;
    secureTextEntry?: boolean;
    customMargin?: string;
    type?: 'cel-phone' | 'cpf';
};

const Input = forwardRef<TextInput, InputProps> (({ customMargin, secureTextEntry, title, errorMessage, type, onChange, ...props}: InputProps, ref) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        if(onChange){
            let text = event.nativeEvent.text;
      switch (type) {
        case 'cpf':
          text = insertMaskInCpf(text)
          break;
        case 'cel-phone':
          text = insertMaskInPhone(text)
          break;
        default:
          text = event.nativeEvent.text;
          break;
      }
            onChange({
                ...event,
                nativeEvent: {
                    ...event.nativeEvent,
                    text,
                }
            });
        }
    };

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
                    {...props}
                    hasSecureTextEntry={secureTextEntry} 
                    secureTextEntry={currentSecure}
                    isError={!!errorMessage} 
                    onChange={handleOnChange}
                    ref={ref}
                />
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
});

export default Input;