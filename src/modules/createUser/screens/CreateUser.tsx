import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/Button';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
    return (
        <CreateUserContainer>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Nome completo:"/>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Telefone:"/>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Email:"/>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="CPF:"/>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Senha:"/>
            <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="A senha novamente:"/>
            <Button margin="0px 0px 32px 0px" title='Criar Usuário'/>
        </CreateUserContainer>
    )
}

export default CreateUser;