<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full shadow-md hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<style lang="scss" scoped></style>
