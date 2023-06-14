<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
        }
    }
}
</script>

<template>
    <div class="card h-100">
        <h5>{{ project.title }}</h5>
        <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top" :alt="project.title" />
        <div v-else>
            Nessuna immagine presente
        </div>
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