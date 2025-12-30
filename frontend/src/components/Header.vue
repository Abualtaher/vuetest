<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
import ContactList from "./ContactList.vue";
import EditContact from "./EditContact.vue";
const props = defineProps({
  title: String,
  required: true,
});
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">{{ props.title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link active" to="/">Home</RouterLink>
          <RouterLink class="nav-item nav-link" to="create-contact"
            >Create Contact</RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
