<template>
  <div class="error-data">{{ message }}</div>
</template>

<script setup>
const props = defineProps({
  message: Object | null,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>