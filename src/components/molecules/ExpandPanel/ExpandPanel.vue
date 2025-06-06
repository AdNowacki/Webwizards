<template>
  <div @click="clickHandler" :class="componentClasses">{{ label }}</div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  src: String,
});

const componentClasses = computed(() => {
  return ['expand-panel', props.variant ? `expand-panel--${props.variant}` : ''];
});

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>