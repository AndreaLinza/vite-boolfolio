<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {

    components: {
        ProjectCard
    },
    data() {

        return {
            projects: [],
            pagination: {}
        }
    },
    methods: {
        fetchData(url) {
            axios.get(url ?? 'http://127.0.0.1:8000/api/projects')
                .then((response) => {

                    //Andiamo a salvare la risposta in una costante
                    const results = response.data;

                    //Salviamo la lista dei progetti nella variabile projects
                    this.projects = results.data;

                    //Elimino la chiave data dall'oggetto risultati
                    delete results.data;

                    //Salvo i dati della paginazione nella variabile pagination
                    this.pagination = results;
                    console.log(results)
                })
        },


    },

    mounted() {
        this.fetchData();
    }
}

</script>

<template>
    <div class="container">
        <h1>Progetti my Friend</h1>

        <!-- Card -->
        <div class="card p-5">

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 border p-4 rounded shadow-lg mt-3 g-4">
                <div class="col" v-for="project in projects" :key="project.id">
                    <router-link class="text-decoration-none" :to="{ name: 'project.show', params: { slug: project.slug } }">
                        <ProjectCard :card="project"></ProjectCard>
                    </router-link>

                </div>
            </div>
        </div>

        <!-- Paginazione -->
        <div class="d-flex justify-content-center">
            <a v-for="pageLink in pagination.links" class="btn btn primary" @click="fetchData(pageLink.url)"
                v-html="pageLink.label"></a>
        </div>


    </div>
</template>


<style lang="scss"></style>