<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: "ProjectPage",
  data() {
    return {
      apiBaseUrl: "http://127.0.0.1:8000",
      projects: [],
      types: [],
      selectedType: "all",
      currentPage: 1,
      lastPage: null,
      totalProjects: 0,
      loading: false,
    }
  },

  components: { ProjectCard },

  mounted() {
    this.getProjects();
    this.getTypes();
  },

  methods: {
    getTypes() {
      axios.get(`${this.apiBaseUrl}/api/types`).then((resp) => {
        this.types = resp.data.results;
      });
    },

    getProjects(pageNumber = 1) {
      this.loading = true;
      const params = {
        page: pageNumber,
      };

      if (this.selectedType !== "all") {
        params.type_id = this.selectedType;
      }

      axios.get(`${this.apiBaseUrl}/api/projects`, { params }).then((resp) => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.totalProjects = resp.data.results.total;
      }).finally(() => {
        this.loading = false;
      });
    }
  },
}
</script>

<template>
  <div class="container">
    <section v-if="!loading">
      <h1 class="text-center text-primary mt-4 mb-4">PROJECT LIST</h1>
      <h5 class="text-center text-success mt-4 mb-4">Number of current Projects: {{ totalProjects }}</h5>

      <p>
        <label class="form-label" for="type">TYPE</label>
        <select v-model="selectedType" id="type" class="form-select" @change="getProjects()">
          <option value="all">ALL</option>
          <option v-for="type in types" :value="type.id" :key="type.id">
            {{ type.name }}
          </option>
        </select>
      </p>

      <div class="row row-cols-5 g-3">
        <div class="col" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>

      <nav v-if="lastPage" class="mt-4 d-flex justify-content-center">
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
.container {
  height: calc(100vh - 100px);

  .col {
    height: 550px;

    .card {
      font-size: 0.7rem;
      height: 550px;

    }
  }
}
</style>
