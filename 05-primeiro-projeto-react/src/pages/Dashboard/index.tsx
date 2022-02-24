import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';
import { FiChevronRight } from 'react-icons/fi';



const Dashboard: React.FC = () => {

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore reposiótios no GitHub</Title>
            <Form >
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>

            </Form>

            <Repositories>
                <a href='teste'>
                    <img src='https://avatars.githubusercontent.com/u/69378187?v=4' alt='Ricardo Bettarelli'/>
                    <div>
                    <strong>rbettarelli</strong>
                    <p>Repositorio para guardar material de estudos</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
               
            </Repositories>
        </>
    );
};

export default Dashboard;



