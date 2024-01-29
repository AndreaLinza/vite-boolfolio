<script>
import Jumbosection from '../components/HomeComponent/Jumbosection.vue';


export default {
    components: { Jumbosection }
}

</script>

<template>
    <Jumbosection></Jumbosection>
    <div class="container">
        <div class="desciption">
            <h1 class="z-5 position-relative">HomePage Payeturo</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.desciption{
    padding-top: 10rem;
}

</style>