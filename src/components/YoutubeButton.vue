<template>
  <a :href="href" target="_blank">
    <button
      class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      <slot></slot>
    </button>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<style lang="scss" scoped></style>
