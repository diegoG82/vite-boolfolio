<script>
export default {
    name: "NotFound",
    methods: {
        goBack() {
            console.log(this.$router);
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5 text-danger">404 PROJECT NOT FOUND</h2>
        <div>
            <router-link :to="{ name: 'home' }" class="btn btn-success">Go home</router-link>
          
        </div>
    </div>
</template>