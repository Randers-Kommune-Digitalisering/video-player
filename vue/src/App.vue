<script setup>
  import { ref } from 'vue'
  const currentComponent = ref(null)
</script>

<template>
  <router-view ref="currentComponent" />
</template>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
  text-align: center;
}
</style>