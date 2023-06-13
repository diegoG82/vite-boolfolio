<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      projects: []
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.baseUrl}/api/projects`)
        .then(resp => {
          this.projects = resp.data.results;
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
  </template>




<style lang="scss">
@import "./styles/general.scss";
</style>
