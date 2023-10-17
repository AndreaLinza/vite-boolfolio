import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    projects: [],
    pagination: {}
});


export function fetchData(url) {
    axios.get(url ?? 'http://127.0.0.1:8000/api/projects')
        .then((response) => {
            //Andiamo a salvare la risposta in una costante
            const results = response.data;

            //Salviamo la lista dei progetti nella variabile projects
            store.projects = results.data;

            //Elimino la chiave data dall'oggetto risultati
            delete results.data;

            //Salvo i dati della paginazione nella variabile pagination
            store.pagination = results;
            console.log(results)
        })
};

export function getThumbUrl(){
    
    
    return `http://127.0.0.1:8000/storage/${store.projects.thumb}`;
}


