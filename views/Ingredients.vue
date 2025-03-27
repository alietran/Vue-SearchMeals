<template>
  <div class="max-w-7xl mx-auto p-8">
    <h1
      class="text-center text-5xl font-extrabold text-gray-800 mb-10 tracking-wide"
    >
      🍽️ Ingredients
    </h1>

    <div class="flex justify-center mb-10">
      <input
        v-model="keyword"
        type="text"
        class="w-full max-w-xl px-5 py-3 border-2 border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
        placeholder="🔍 Search for ingredients..."
      />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8"
    >
      <router-link
        v-for="ingredient in computedIngredient"
        :key="ingredient.id"
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        class="bg-white/80 backdrop-blur-lg shadow-lg rounded-xl p-5 text-center border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      >
        <div
          class="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md mb-4"
        >
          <img
            :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`"
            :alt="ingredient.strIngredient"
            class="w-full h-full object-cover"
          />
        </div>

        <h3 class="text-xl font-semibold text-gray-900">
          {{ ingredient.strIngredient }}
        </h3>
        <p class="text-gray-600 text-sm mt-2">
          {{
            ingredient.strDescription
              ? ingredient.strDescription.substring(0, 80) + "..."
              : "No description available"
          }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref("");

const computedIngredient = computed(() => {
  if (!computedIngredient) return ingredients;
  return ingredients.value.filter((item) => {
    return item.strIngredient
      .toLowerCase()
      .includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    console.log(data);
    ingredients.value = data.meals;
  });
});
</script>

<style lang="scss" scoped></style>
