<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
//import axios from 'axios';

export default {


  components: {
    TheHeader,
    TheFooter
  }

}
</script>


<template>
  <TheHeader></TheHeader>

  <main>
    <!-- Possiamo vederlo come lo @yield di Blade-->
    <router-view></router-view>
  </main>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
main {
  padding: 7rem 0;
  flex-grow: 1;

}
</style>