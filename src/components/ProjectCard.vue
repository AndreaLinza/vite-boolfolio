<script>
import { getThumbUrl, store } from '../store';

export default {

  data(){

    return{
      store 
    }
  },
  props: {
    card: {
      type: Object,
      required: true

    }
  },
  methods: {

    getThumbUrl(card) {
        return `http://127.0.0.1:8000/storage/${card.thumb}`;
    },
  },
  mounted() {
  }

}
</script>


<template>
  <div class="card h-100">
    <img :src="getThumbUrl(card)" class="card-img-top" style="height: 150px;" alt="image">
    <div class="card-body">
      <h5 class="card-title text-decoration-none">{{ card.title }}</h5>
      <p class="card-text">{{ card.description }}</p>
      <p class="badge" :style="`background-color: rgb(${card.type.color})`">
        {{ card.type.name }}</p>
      <div class="row row-cols-5">
        <div class="col" v-for="technology in card.technologies" :key="technology.id">
          <i :class="`${technology.icon} rounded-circle p-2`"
            :style="`background-color:rgb(${technology.color}); width:30px; aspect-ratio:1/1`"></i>
        </div>
      </div>
      <!-- <a :href="card.link" class="">Link</a> -->
    </div>

  </div>
</template>

<style lang="scss" scoped></style>