<script>

import { store } from "../store";

export default {
    name: 'ProjectCard',
    data() {
        return {
            store
        }
    },

    props: {
        project: Object
    },

    computed: {
        contentPreview() {

            if (!this.project.content) {
                return 'NO PROJECT'
            } else if (this.project.content.length > 150) {
                return this.project.content.substring(0, 150) + "...";
            } else {
                return this.project.content
            }
        },
        imgSrc() {
            if (!this.project.image) return "";
            if (this.project.image.startsWith('http://') || this.project.image.startsWith('https://')) {
                return this.project.image;
            } else {
                return `${this.store.apiBaseUrl}/storage/${this.project.image}`;
            }
        }

    }


}
</script>


<template>
    <div class="card h-100 bg-dark">
        <h5 class="card-title text-primary">{{ project.title }}</h5>
      <img v-if="project.image" :src="imgSrc" alt="" class="card-img-top">
      <div class="card-body">
       
        <p class="card-text text-danger">{{ project.content }}</p>
        <p class="card-text text-warning">PROJECT TYPE: {{ project.type.name }}</p>
        <p class="card-text text-success">
          PROJECT TECH:
          <span v-if="project.technologies && project.technologies.length > 0">
            {{ project.technologies.map(tech => tech.name).join(", ") }}
          </span>
          <span v-else>
            No tech
          </span>
        </p>
      </div>
      <div class="card-footer text-center">
        <router-link :to='{ name: "single-project", params: { slug: project.slug } }' class="btn btn-primary ">Details</router-link>
      </div>
    </div>
  </template>
  

<style lang="scss" scoped></style>