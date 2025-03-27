<template>
  <div class="max-w-7xl mx-auto p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <MealItem
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"
        class="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div class="flex justify-center text-gray-500 text-lg mt-10" v-if="!meals?.length">
      🍽️ No meals available
    </div>
  </div>
</template>


<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>
