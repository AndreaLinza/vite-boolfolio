<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <section>
        <div class="jumbo">
        </div>
        <img src="../../../Jumbo.JPG" alt="jumbo">
    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section{

    img {
        max-width: 100%;
        width: 100%;
        height: 800px;
        
        object-fit: cover;
        position: absolute;
        
    }

}

</style>