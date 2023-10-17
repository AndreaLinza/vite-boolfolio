<script>
import axios from 'axios';

export default {

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
    getThumbUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.thumb}`
    }
  },

  mounted() {
    this.fetchData();
  }

}
</script>


<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex justify-content-end">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 " style="color: white !important;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://127.0.0.1:8000/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
  <div class="container">
    <h1>Hello My Friend</h1>

    <!-- Card -->
    <div class="card p-5">

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 border p-4 rounded shadow-lg mt-3 g-4">
        <div class="col" v-for="project in projects" :key="project.id">
          <div class="card h-100">
            <img :src="getThumbUrl(project)" class="card-img-top h-100" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <p class="badge" :style="`background-color: rgb(${project.type.color})`">
                {{ project.type.name }}</p>
              <div class="row row-cols-5">
                <div class="col" v-for="technology in project.technologies" :key="technology.id">
                  <i :class="`${technology.icon} rounded-circle p-2`"
                    :style="`background-color:rgb(${technology.color}); width:30px; aspect-ratio:1/1`"></i>
                </div>
              </div>

              <a href="{{ $project.link }}" class="">Link</a>
            </div>
          </div>
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