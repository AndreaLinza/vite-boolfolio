<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
//import axios from 'axios';

export default {


  components: {
    TheHeader,
    TheMain,
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

main{
  flex-grow: 1;

}
</style>