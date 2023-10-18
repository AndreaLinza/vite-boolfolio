<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            project: {},
        };
    },

    methods: {
        fetchData() {
            //this.route  definishe un oggetto relativo alla rotta attuale

            axios.get("http://localhost:8000/api/projects/" + this.$route.params.slug)
                .then(resp => {
                    this.project = resp.data;
                })
                .catch(error => {
                    this.$router.push({ name: 'not-found' });
                })
        },

        getThumbUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.thumb}`;
        },
        formatDate(data) {
            return dayjs(data).format("DD/MM/YYYY");
        },


    },
    mounted(){
        this.fetchData()
    }

}
</script>

<template>
    <div class="container">
        <div class="card p-5 shadow">

            <h1>{{ project.title }}</h1>
            <img class="" :src="getThumbUrl(project)" alt="">
            <div class="card-body">


                <p class="card-text">{{ project.description }}</p>
                
                <p class="badge" :style="`background-color: rgb(${project.type?.color})`">{{ project.type?.name }}</p>
                <div v-for="technology in project.technologies">
                    <p>{{ technology?.name }} <i :class="`${technology.icon }`"></i></p>
                </div>

                <a class="card-text" :href="project.link">{{ project.link }}</a><br>
                <small class="card-text">{{ formatDate(project.release) }}</small>
            </div>
            <div class="d-flex m-auto">
                <router-link :to="{name:'projects'}">Indietro</router-link>
                <!-- <a  class="my-button h-75 m-3"><span>Indietro</span></a> -->
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>