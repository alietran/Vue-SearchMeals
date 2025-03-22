<template>
  <div class="flex justify-center p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-2 w-64 p-3"
      placeholder="search for meal"
    />
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
</template>
<script setup>
import { computed, onMounted } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response);
});
</script>
