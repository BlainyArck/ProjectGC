import { TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, ButtonDisabled, ButtonSecundary, GradientButton } from "./button.style"
import Text from "../text/Text";
import { theme } from "../../theme/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
};

const Button = ({loading, disabled, title, type, margin, onPress, ...props} : ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disabled && onPress){
            onPress();
        }
    }

    const renderText = (color: string) => (
        <>
            <Text type={textTypes.BUTTON_BOLD} color={color}>
                {title}
            </Text>
            {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white}/>}
        </>
    );

    if (disabled) {
        return(
            <ButtonDisabled {...props} margin={margin}>
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        )
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return(
                <ButtonSecundary {...props} margin={margin} onPress={handleOnPress}>
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecundary>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return(
                <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
                    <GradientButton 
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
                        start={{ x: 0.0, y: 0.0}}
                        end={{ x: 1.0, y: 1.0}}
                    >
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
            );
    }    
};

export default Button;