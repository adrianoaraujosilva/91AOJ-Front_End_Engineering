<script setup>
import { computed, ref } from "vue";
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes = {
  "/": HomePage,
  "/login": LoginPage,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(
  () => routes[currentPath.value.slice(1)] || routes["/"]
);
</script>

<template>
  <component :is="currentView" />
</template>

<style scoped></style>
