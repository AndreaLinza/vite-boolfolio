<script>

export default {

}

</script>

<template>
  <header>
    <nav class="navbar nav-position navbar-expand-lg shadow">
      <div class="container-fluid">
        <router-link class="navbar-brand ms-3" aria-current="page" :to="{ name: 'home' }"><img class="logo"
            src="/LogoV.png" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex justify-content-end me-5">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'projects' }">Progetti</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'contacts' }">Contatti</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Login
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Accedi</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped >
@use "../styles/partials/variables" as *;

.navbar {
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 1rem 0;

  background-color: transparent !important;
  transition: ease-out .5s;

  .logo {
    max-width: 50px;
  }

  .navbar-brand {
    color: white;
  }

  .nav-link {
    font-size: 1.1rem;

    &:active,
    &:focus {
      color:$secondary-color;
      font-weight: bolder;
    }

  }

}
</style>