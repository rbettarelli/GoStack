import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import api from './services/api'

// view = container div, footer, header, main, aside, section
// nao possuem valor semantico
// Text: p, spam, h1, h2, h3
// nao possuem estilizacao propria




export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
            
        });

    }, []);

   async function handleAddProject() {
       const response = await api.post('projects', {
           title: `Novo Projeto' ${Date.now()}`,
           owner: 'Ricardo'

       });
       const project = response.data;
       setProjects([...projects, project])

    }

    return (
        <>
            
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <SafeAreaView style={styles.container}>
           <FlatList 
           data={projects}
           keyExtractor={project => project.id}
           renderItem={({item: project}) => (
            <Text style={styles.project}> {project.title}</Text>

           )}
           />
           <TouchableOpacity 
           activeOpacity={0.6} 
           style={styles.button} 
           onPress={handleAddProject}
           >
               <Text style={styles.buttonText}>Adicionar Projeto</Text>
           </TouchableOpacity>
           </SafeAreaView>
        </>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
       

    },
    project: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        

    },
    button: {
        
        backgroundColor:"#fff",
        maring: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: {

        fontWeight: 'bold',
        fontSize: 16,

    }
})