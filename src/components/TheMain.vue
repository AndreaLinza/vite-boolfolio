<script>
// import axios from 'axios';
// import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        //ProjectCard
    },
    data() {

        return {
            // projects: [],
            // pagination: {}
        }
    },
    methods: {
        // fetchData(url) {
        //     axios.get(url ?? 'http://127.0.0.1:8000/api/projects')
        //         .then((response) => {

        //             //Andiamo a salvare la risposta in una costante
        //             const results = response.data;

        //             //Salviamo la lista dei progetti nella variabile projects
        //             this.projects = results.data;

        //             //Elimino la chiave data dall'oggetto risultati
        //             delete results.data;

        //             //Salvo i dati della paginazione nella variabile pagination
        //             this.pagination = results;
        //             console.log(results)
        //         })
        // },

    },

    mounted() {
        //this.fetchData();
    }


}

</script>

<template>
    
</template>


<style lang="scss">


</style>