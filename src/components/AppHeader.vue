<!-- <script>

export default {
    name: "AppHeader",
    data() {
        return {
            menuItems: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "Projects",
                    routeName: "projects"
                },
                {
                    label: "About Us",
                    routeName: "aboutus"
                },

            ]
        }
    }
}

</script>
<template>
    <header >
        <nav class="navbar navbar-expand-lg  bg-primary header">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BoolFolio By Diego G.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" class="nav-link active" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
.header{
    height: 50px;
}


</style> -->

<!-- CON TOGGLER ATTIVO -->
<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        menuItems: [
          {
            label: "Home",
            routeName: "home",
          },
          {
            label: "Projects",
            routeName: "projects",
          },
          {
            label: "About Us",
            routeName: "aboutus",
          },
        ],
        isNavOpen: false,
      };
    },
  };
  </script>

<template>
    <header>
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark header">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
            <a class="navbar-brand text-dark" href="#">BoolFolio By Diego G.</a>
            <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item" v-for="item in menuItems" :key="item.label">
                  <router-link :to="{ name: item.routeName }" class="nav-link active text-dark" aria-current="page">
                    {{ item.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="isNavOpen = !isNavOpen"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  </template>

  
  
  
  <style lang="scss" scoped>
  .header {
    height: 50px;
  }
  
  .navbar-collapse.show {
    background-color: var(--bs-primary);
    padding: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
  </style>
  