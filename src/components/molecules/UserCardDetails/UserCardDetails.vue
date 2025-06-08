<template>
  <div class="user-card-details">
    {{ content }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Btn from '@/components/atoms/Btn/Btn.vue'

const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>