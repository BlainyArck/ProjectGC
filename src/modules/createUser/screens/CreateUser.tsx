import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import { CreateUserContainer } from '../styles/createUser.style';
import { useCreateUser } from '../hooks/useCreateUser';

const CreateUser = () => {
    const { createUser, disabled, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();
    return (
        <CreateUserContainer>
            <Input 
                value={createUser.name}
                onChange={(event) => handleOnChangeInput(event, 'name')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu nome" 
                title="Nome completo:"/>
            <Input 
                value={createUser.phone}
                onChange={(event) => handleOnChangeInput(event, 'phone')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu telefone" 
                type='cel-phone'
                title="Telefone:"/>
            <Input
                value={createUser.email} 
                onChange={(event) => handleOnChangeInput(event, 'email')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu email" 
                title="Email:"/>
            <Input
                value={createUser.cpf} 
                onChange={(event) => handleOnChangeInput(event, 'cpf')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite seu cpf" 
                type='cpf'
                title="CPF:"/>
            <Input
                value={createUser.password} 
                onChange={(event) => handleOnChangeInput(event, 'password')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite sua senha" 
                secureTextEntry
                title="Senha:"/>
            <Input
                value={createUser.confirmPassword} 
                onChange={(event) => handleOnChangeInput(event, 'confirmPassword')} 
                customMargin="0px 0px 16px 0px" 
                placeholder="Digite novamente sua senha" 
                secureTextEntry
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