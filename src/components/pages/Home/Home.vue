<template>
  <main :class="componentClasses">
    <UserCard />
  </main>
</template>

<script setup>
import { computed } from 'vue'

import UserCard from '@/components/organisms/UserCard/UserCard.vue'

const componentClasses = computed(() => {
  return ['page', 'page--home'];
});
</script>