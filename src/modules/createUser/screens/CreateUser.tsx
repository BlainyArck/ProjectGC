import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import { CreateUserContainer } from '../styles/createUser.style';
import { useCreateUser } from '../hooks/useCreateUser';
import { useRef } from 'react';
import { TextInput } from 'react-native';

const CreateUser = () => {
    const { createUser, disabled, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();
    const phoneInput = useRef<TextInput>(null);
    const emailInput = useRef<TextInput>(null);
    const cpfInput = useRef<TextInput>(null);
    const passwordInput = useRef<TextInput>(null);
    const confirmPasswordInput = useRef<TextInput>(null);

    return (
        <CreateUserContainer>
            <Input 
                value={createUser.name}
                onChange={(event) => handleOnChangeInput(event, 'name')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu nome" 
                onSubmitEditing={() => phoneInput.current?.focus()}
                title="Nome completo:"/>
            <Input 
                value={createUser.phone}
                onChange={(event) => handleOnChangeInput(event, 'phone')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu telefone" 
                type='cel-phone'
                onSubmitEditing={() => emailInput.current?.focus()}
                ref={phoneInput}
                keyboardType='number-pad'
                title="Telefone:"/>
            <Input
                value={createUser.email} 
                onChange={(event) => handleOnChangeInput(event, 'email')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu email" 
                onSubmitEditing={() => cpfInput.current?.focus()}
                ref={emailInput}
                keyboardType='email-address'
                title="Email:"/>
            <Input
                value={createUser.cpf} 
                onChange={(event) => handleOnChangeInput(event, 'cpf')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu cpf" 
                type='cpf'
                onSubmitEditing={() => passwordInput.current?.focus()}
                ref={cpfInput}
                keyboardType='number-pad'
                title="CPF:"/>
            <Input
                value={createUser.password} 
                onChange={(event) => handleOnChangeInput(event, 'password')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite sua senha" 
                secureTextEntry
                onSubmitEditing={() => confirmPasswordInput.current?.focus()}
                ref={passwordInput}
                title="Senha:"/>
            <Input
                value={createUser.confirmPassword} 
                onChange={(event) => handleOnChangeInput(event, 'confirmPassword')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite novamente sua senha" 
                secureTextEntry
                onSubmitEditing={handleCreateUser}
                ref={confirmPasswordInput}
                title="Confirmar senha:"/>
            <Button
                disabled={disabled}
                onPress={handleCreateUser}
                loading={loading} 
                margin="0px 0px 32px 0px" 
                title='Cadastrar Usuário'/>
        </CreateUserContainer>
    )
}

export default CreateUser;