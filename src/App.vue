<script>
export default{
  data(){
    return{
      projects:[]
    }
  },
  mounted(){
    this.getProjects();
  },
  methods:{
    getProjects(){
console.log('test');
    }

   
  }
}

</script>
<template>
  <h1>Ciao</h1>
</template>

<style lang="scss">
@use "./styles/general.scss" as *

</style>