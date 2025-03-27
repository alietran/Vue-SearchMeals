<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">
      🍽️ Explore Delicious Meals
    </h1>

    <div class="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        🔍 Available Ingredients
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="ingredient in ingredients.meals"
          :key="ingredient.idIngredient"
          class="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 text-center text-sm font-medium"
        >
          {{ ingredient.strIngredient }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref({ meals: [] });

onMounted(async () => {
  try {
    const response = await axiosClient.get("/list.php?i=list");
    ingredients.value = response.data;
  } catch (error) {
    console.error("Failed to fetch ingredients:", error);
  }
});
</script>
