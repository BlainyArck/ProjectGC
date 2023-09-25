import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Pressable, View} from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import { theme } from '../../theme/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReact{
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props}: ModalProps) => {
    return(
        <ModalReact
            animationType="slide"
            transparent={true}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onCloseModal();
            }}
                {...props}
            >
            <ContainerModal >
                <Text 
                    type={textTypes.PARAGRAPH_SEMI_BOLD}
                    color={theme.colors.mainTheme.primary}
                    margin="16px">
                        {title}
                </Text>
                <Text>{text}</Text>
                <Button title='Ok' onPress={onCloseModal}/>
                <IconCloseModal onPress={onCloseModal} name='cross'/>
                
            </ContainerModal>
        </ModalReact>
    )
}

export default Modal;