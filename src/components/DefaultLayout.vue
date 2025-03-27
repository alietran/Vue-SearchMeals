<template>
  <navbar />
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
</script>

<style lang="scss" scoped></style>
