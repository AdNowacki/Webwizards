<template>
  <button @click="clickHandler" :class="componentClasses">{{ label }}</button>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  label: String,
  variant: String
});

const emit = defineEmits(['click']);

const componentClasses = computed(() => {
  return ['btn', props.variant ? `btn--${props.variant}` : ''];
});

const clickHandler = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>