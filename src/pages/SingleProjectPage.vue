<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: "SingleProjectPage",
    data() {
        return {
            store,
            project: null,
            errorMessage: ""
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        console.log(slug);
        axios.get(`${this.store.apiBaseUrl}/api/projects/${slug}`)
            .then((resp) => {
                if (resp.data.success) {
                    this.project = resp.data.results;
                } else {
                    this.errorMessage = resp.data.error;
                }
            })
            .catch((error) => {
                this.errorMessage = "Error retrieving project data.";
                console.error(error);
            });
    }
}
</script>

<template>
    <section class="container">

        <div v-if="project">
            <h2 class="text-success mt-4">{{ project.title }}</h2>

            <div class="img-container">
                <img class="img-thumbnail" v-if="project.image" :src="`${store.apiBaseUrl}/storage/${project.image}`" alt="">
                <p v-else>No Image</p>
            </div>

            <p class="text-primary">
                {{ project.content }}
            </p>
            <p class="text-warning">Project Type: {{ project.type.name }}</p>
            <span class="text-danger" v-if="project.technologies && project.technologies.length > 0">
                   Project Technologies: {{ project.technologies.map(tech => tech.name).join(", ") }}
                </span> 
        </div>
        <div v-else-if="errorMessage" class="my-4">
            {{ errorMessage }}
        </div>
        <router-link :to="{ name: 'projects' }" class="btn btn-success mb-3 mt-4">Back</router-link>
    </section>
</template>

<style lang="scss" scoped>
.container{
    margin-top: 50px;
    border: 5px solid cornflowerblue;
    img{
   width: 20%;
}
}

</style>