<template>
  <figure class="avatar">
    <img :src="src" alt="Avatar" class="avatar__picture" />
  </figure>
</template>

<script setup>

defineProps({
  src: String,
});

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>