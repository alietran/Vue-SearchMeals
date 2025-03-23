<template>
  <div>
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-2 w-64 p-3"
      placeholder="Search For Meals"
      @change="searchKeyWord()"
    />
  </div>
  <div class="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../src/components/MealItem.vue";
import store from "../store";
const keyword = ref("");
const meals = computed(() => store.state.searchMeals);
const route = useRoute();

function searchKeyWord() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchKeyWord();
  }
});
</script>

<style lang="scss" scoped></style>
