<template>
  <div class="error-data">{{ message }}</div>
</template>

<script setup>
const props = defineProps({
  message: String
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>