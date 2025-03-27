<template>
  <div
    class="overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
  >
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
      <div class="relative">
        <img
          class="w-full h-64 object-cover rounded-t-3xl"
          :src="meal.strMealThumb"
          alt="Food Image"
        />
        <div
          class="absolute top-3 left-3 bg-black/60 text-white text-xs px-4 py-1 rounded-full shadow-md"
        >
          🍽️ {{ meal.strCategory || "Meal" }}
        </div>
      </div>
    </router-link>

    <div class="p-6">
      <h2 class="font-extrabold text-2xl text-gray-900 mb-3 truncate">
        {{ meal.strMeal }}
      </h2>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        Savor the exquisite taste of this dish! Perfect for food lovers seeking
        a delightful experience.
      </p>
      <div class="flex justify-between items-center" v-if="meal.strYoutube">
        <YoutubeButton
          :href="meal.strYoutube"
          class="px-5 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full flex items-center gap-2 shadow-md hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105"
        >
          ▶ Watch on YouTube
        </YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
console.log("Meal Youtube Link:", meal);
const { meal } = defineProps({
  meal: Object,
});
</script>

<style lang="scss" scoped></style>
