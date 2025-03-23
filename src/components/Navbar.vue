<template>
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{name:'home'}" class="inline-flex">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'byName'}" class="inline-flex transition-colors px-2 h-full hover:bg-purple-200">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="inline-flex transition-colors px-2 h-full hover:bg-purple-200">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'byIngredient'}" class="inline-flex transition-colors px-2 h-full hover:bg-purple-200">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>