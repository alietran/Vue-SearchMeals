<template>
  <div class="flex justify-center p-8">
   
  </div>
  <div class="flex justify-center gap-1">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      key="letter"
      v-for="letter of letters.split('')"
    >
      {{ letter }}
    </router-link>
  </div>

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
