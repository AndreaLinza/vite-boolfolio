<script>
import {store} from "../store";


export default {

}

</script>

<template>
    <header>

        <nav class="navbar nav-position navbar-expand-lg bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex justify-content-end">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 " style="color: white !important;">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'projects'}">Progetti</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'about'}">About</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name:'contacts'}">Contatti</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://127.0.0.1:8000/login" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Accedi</a></li>
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
    </header>
</template>


<style lang="scss">

.nav-position{
    position: fixed;
    width: 100%;
    z-index: 10;

}
</style>