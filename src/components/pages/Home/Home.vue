<template>
  <main :class="componentClasses">
    <Btn variant="primary" label="Pierwszy button" />
  </main>
</template>

<script setup>
import { computed } from 'vue'

import Btn from '@/components/atoms/Btn/Btn.vue'

const componentClasses = computed(() => {
  return ['page', 'page--home'];
});
</script>