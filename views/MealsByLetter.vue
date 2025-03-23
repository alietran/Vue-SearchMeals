<template>
  <div class="flex justify-center gap-2 h-10 items-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../src/components/MealItem.vue";
import store from "../store";

const route = useRoute();
const letters = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetters);

watch(route, () => {
  store.dispatch("searchMealByLetters", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealByLetters", route.params.letter);
});
</script>

<style lang="scss" scoped></style>
