<template>
  <div @click="clickHandler" :class="componentClasses">{{ label }}</div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  src: String,
});

const componentClasses = computed(() => {
  return ['user-card', props.variant ? `user-card--${props.variant}` : ''];
});

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>