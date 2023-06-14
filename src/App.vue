<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalPosts: 0,
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects(pageNumber = 1) {
      axios.get(`${this.baseUrl}/api/projects`, {
        params: {
          page: pageNumber
        }
      })
        .then(resp => {
          this.projects = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
          this.totalPosts = resp.data.results.total;
        });
    }
  },
  components: { ProjectCard }
};
</script>


<template>
  <div class="container">
    <h1 class="text-center mt-4 mb-4">PROJECT LIST</h1>
    <div class="row row-cols-5 g-3">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
  <nav v-if="lastPage" class="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
        <a @click.prevent="getProjects(currentPage - 1)" class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item" :class="{ 'active': pageNum === currentPage }" v-for="pageNum in lastPage" :key="pageNum">
        <a @click.prevent="getProjects(pageNum)" class="page-link" href="#">{{ pageNum }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
        <a @click.prevent="getProjects(currentPage + 1)" class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "./styles/general.scss";
</style>
