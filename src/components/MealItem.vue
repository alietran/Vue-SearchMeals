<template>
  <div class="overflow-hidden shadow-lg bg-white border">
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
      <img
        class="w-full h-48 object-cover"
        :src="meal.strMealThumb"
        alt="Food Image"
      />
    </router-link>

    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">{{ meal.strMeal }}</h2>
      <p class="text-gray-700 text-sm">
        A tasty meal that you will absolutely love. Try it now!
      </p>
      <div class="mt-4 flex justify-between items-center">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>

<style lang="scss" scoped></style>
