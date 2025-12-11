<script setup>
import { RouterView, RouterLink } from "vue-router";
import My from "./components/My.vue";
</script>
<template>
  <My />
  <div class="p-10 text-center">
    <h1 class="text-4xl font-bold text-blue-600">Tailwind is working! 🎉</h1>
  </div>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/conect">Conect</RouterLink>
  <RouterView />
</template>
<style scoped></style>
