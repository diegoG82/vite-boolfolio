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
          
            if (!this.post.content) {
                return 'Nessun contenuto'
            } else if (this.project.content.length > 150) {
                return this.project.content.substring(0, 150) + "...";
            } else {
                return this.project.content
            }
        },
        imgSrc() {
           
            if (!this.project.image) return "";
            if (this.project.image.startsWith('https://')) {
                return this.project.image;
            } else {
                return `${this.store.apiBaseUrl}/storage/${this.project.image}`;
            }
        }
    }

    
}
</script>

<template>
    <div class="card h-100">
        <h5>{{ project.title }}</h5>
        <!-- <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top" :alt="project.title" />
        <div v-else>
            Nessuna immagine presente
        </div> -->
        <img v-if="project.image" :src="imgSrc" alt="">

        <div class="card-body">
            <h5>{{ project.title }}</h5>
            <p>{{ project.content }}</p>
            <p class="text-warning">PROJECT TYPE: {{ project.type.name }}</p>
            <p class="text-success">
                PROJECT TECH:
                <span v-if="project.technologies && project.technologies.length > 0">
                    {{ project.technologies.map(tech => tech.name).join(", ") }}
                </span>
                <span v-else>
                    No tech
                </span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>