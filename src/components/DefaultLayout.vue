<template>
   <div class="bg-gray-100 h-full">
    <navbar />
    <main>
        <router-view/>
    </main>
   </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';

</script>

<style lang="scss" scoped>

</style>