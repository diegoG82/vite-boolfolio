<script>
import axios from 'axios';
import { store } from "../store";
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name:"ProjectPage",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalProjects: 0,
      loading: false,
      store
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects(pageNumber = 1) {
      this.loading = true;
      axios.get(`${this.baseUrl}/api/projects`, {
        params: {
          page: pageNumber
        }
      })
        .then(resp => {
          this.projects = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
          this.totalProjects = resp.data.results.total;
        }).finally(() => {
          this.loading = false;
        }
        )
    }
  },
  components: { ProjectCard }
};
</script>


<template>
  <div class="container">
    <section v-if="!loading">
      <h1 class="text-center text-primary  mt-4 mb-4">PROJECT LIST</h1>
      <h5 class="text-center text-success mt-4 mb-4">Number of current Projects: {{ totalProjects }}</h5>
      <div class="row row-cols-5 g-3">
        <div class="col" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>

      <nav v-if="lastPage" class="mt-4 d-flex justify-content-center" >
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <a @click.prevent="getProjects(currentPage - 1)" class="page-link" href="#">Prev</a>
          </li>
          <li class="page-item" :class="{ 'active': pageNum === currentPage }" v-for="pageNum in lastPage" :key="pageNum">
            <a @click.prevent="getProjects(pageNum)" class="page-link" href="#">{{ pageNum }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
            <a @click.prevent="getProjects(currentPage + 1)" class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </section>
    <section v-else>
      <p>PROJECTS LOADING...</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container{
 height: calc(100vh - 100px);
}
</style>
