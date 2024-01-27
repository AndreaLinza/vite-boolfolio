<script>
import { fetchData, store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {

  components: {
    ProjectCard
  },
  data() {

    return {
      store
    }
  },
  methods: {
    fetchData

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
        <div class="col" v-for="project in store.projects" :key="project.id">
          <router-link class="text-decoration-none" :to="{ name: 'project.show', params: { slug: project.slug } }">
            <ProjectCard :card="project"></ProjectCard>
          </router-link>

        </div>
      </div>
    </div>

    <!-- Paginazione -->
    <div class="d-flex justify-content-center">
      <a v-for="pageLink in store.pagination.links" class="btn btn primary" @click="fetchData(pageLink.url)"
        v-html="pageLink.label"></a>
    </div>


  </div>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

</style>