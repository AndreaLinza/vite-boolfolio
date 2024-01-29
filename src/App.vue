<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Jumbosection from './components/HomeComponent/Jumbosection.vue';
//import axios from 'axios';

export default {


  components: {
    TheHeader,
    TheFooter,
    Jumbosection
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
  flex-grow: 1;
}
</style>