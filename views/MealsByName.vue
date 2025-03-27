<template>
  <div class="min-h-screen flex flex-col items-center space-y-6 py-6">
    <div class="relative w-full max-w-md">
      <input
        v-model="keyword"
        type="text"
        class="w-full pl-12 pr-4 py-3 text-lg rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm transition-all"
        placeholder="Search for meals..."
        @change="searchKeyWord"
      />
      <svg
        class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-4.35-4.35"
        ></path>
        <circle cx="10" cy="10" r="7"></circle>
      </svg>
    </div>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../src/components/Meals.vue";
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
