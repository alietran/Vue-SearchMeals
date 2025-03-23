<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl my-4">
    <h1 class="text-4xl font-bold text-gray-800 text-center mb-4">
      {{ meal.strMeal }}
    </h1>

    <div class="flex justify-center">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full md:w-2/3 rounded-xl shadow-md"
      />
    </div>

    <p class="my-2">{{ meal.strInstructions }}</p>

    <div class="mt-6 text-lg text-gray-700 space-y-2">
      <p><strong>🗂 Category:</strong> {{ meal.strCategory }}</p>
      <p><strong>🌍 Area:</strong> {{ meal.strArea }}</p>
      <p v-if="meal.strTags"><strong>🏷 Tags:</strong> {{ meal.strTags }}</p>
    </div>

    <div class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-3">🥗 Ingredients</h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
        <li
          v-for="(ingredient, index) in ingredients"
          :key="index"
          class="px-4 py-2 bg-gray-100 rounded-lg text-center shadow-sm"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="my-4 flex gap-2">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <a :href="meal.strSource" target="_blank">
        <button
          class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          View original source
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../src/components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  console.log("route.params.id", route.params.id);
  axiosClient.get("lookup.php?i=" + route.params.id).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});

const ingredients = computed(() =>
  Object.keys(meal.value)
    .filter((key) => key.startsWith("strIngredient") && meal.value[key])
    .map((key) => meal.value[key])
);
</script>

<style scoped></style>
