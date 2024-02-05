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
        <div class="row row-cols-1 row-cols-lg-2">
            <div class="col">
                <div class="desciption">
                    <h1 class="display-3 fw-bold z-5 position-relative">Hi,<br> I'm Andrea Linza, <br> Full-Stack <br> Web
                        Developer
                    </h1>
                </div>
            </div>
            <div class="col">
                <img src="/jumbo-img.png" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section{

    .col {
        position: relative;
        
        img {
            width: 100%;
            max-width: 500px;
            min-height: 100%;
            max-height: 700px ;
            object-fit: cover;
            position: relative;
            right: 0;
        }
        
        
    }
}
</style>