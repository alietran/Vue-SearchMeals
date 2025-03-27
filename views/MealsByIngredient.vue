<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../src/components/Meals.vue";
import store from "../store";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredients);
console.log('meals', meals)
onMounted(() => {
  store.dispatch("searchMealByIngrdients", route.params.ingredient);
});
</script>

<style lang="scss" scoped></style>
