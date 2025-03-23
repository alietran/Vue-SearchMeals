<template>
  <div class="flex justify-center p-8"></div>
  <pre>{{ ingredients }}</pre>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";

const meals = computed(() => store.state.meals);

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
