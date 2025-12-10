<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>

  <RouterView />
</template>
