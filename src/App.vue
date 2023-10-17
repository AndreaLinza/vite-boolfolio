<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
//import axios from 'axios';

export default {


  components:{
    TheHeader,
    TheMain,
    TheFooter
  }

}
</script>


<template>

  <TheHeader></TheHeader>

  <TheMain></TheMain>

  <TheFooter></TheFooter>
</template>

<style lang="scss"></style>