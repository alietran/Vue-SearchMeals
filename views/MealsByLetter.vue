<template>
  <div class="min-h-screen flex flex-col items-center p-6 bg-gray-100">
    <div class="flex flex-wrap justify-center gap-2 mb-6">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition-all duration-200"
        :class="{ 'bg-red-500 text-white': letter === route.params.letter }"
      >
        {{ letter }}
      </router-link>
    </div>

    <transition name="fade" mode="out-in">
      <Meals
        :meals="meals"
        :key="route.params.letter || 'all'"
        class="flex-grow w-full max-w-6xl"
      />
    </transition>
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../src/components/Meals.vue";
import store from "../store";

const route = useRoute();
const letters = "ABCDEFGHIKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetters);

watch(route, () => {
  if (route.params.letter) {
    store.dispatch("searchMealByLetters", route.params.letter);
  }
});

onMounted(() => {
  if (route.params.letter) {
    store.dispatch("searchMealByLetters", route.params.letter);
  }
});
</script>

<style lang="scss" scoped></style>
