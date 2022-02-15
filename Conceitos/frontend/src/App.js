import React , {useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header.js";
import api from './services/api';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })

    }, []);

// use state retorna um array 
//1. Variavel com o seu valor inicial 
//2: Funcao para atualizar esse valor



   async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);
        //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
		    owner: "Ricardo"
        });
        const project = response.data;

        setProjects([...projects, project]);
      
    }

    return (
        <>
            <Header title="Projects" />
            

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type ="button" onClick={handleAddProject}>Adicionar projeto</button>
              
           
            

           

        </>

    );
}

export default App;