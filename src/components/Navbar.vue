<template>
  <header
    class="bg-white shadow-md h-16 flex justify-between items-center px-6 md:px-12"
  >
    <router-link
      :to="{ name: 'home' }"
      class="text-xl font-bold text-gray-800 hover:text-purple-600 transition"
    >
      Home
    </router-link>

    <div class="flex items-center gap-4">
      <router-link
        :to="{ name: 'byName' }"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-900 transition"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-900 transition"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-900 transition"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
