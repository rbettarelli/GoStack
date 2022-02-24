import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';


interface RepositoryParams {
    repository: string;

}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();


    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronsLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>

                <header>
                    <img src="https://avatars.githubusercontent.com/u/3624098?v=4" alt="Andrew Clark" />
                    <div>
                        <strong>facebook/react</strong>
                        <p>React core at Facebook. Hi!</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1080</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>4000</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1500</strong>
                        <span>Issues Abertas </span>
                    </li>

                </ul>

            </RepositoryInfo>

            <Issues>


                <Link to="sdafdsaf">
                    <div>
                        <strong>asfdasasdfasfd</strong>
                        <p>sgsfsfdsfs</p>
                    </div>
                    <FiChevronsRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;


