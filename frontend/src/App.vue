<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Contact List</RouterLink> |
      <RouterLink to="/create-contact">Add Contact</RouterLink>
      <RouterView />
    </nav>
  </div>
</template>

<style scoped></style>
