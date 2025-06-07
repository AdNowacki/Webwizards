<template>
  <div class="user-card-contact">
    <div class="user-card-contact__col user-card-contact__col--xs">
      AASSs
    </div>
    <div class="user-card-contact__col">
      wsknakjnakjnxl
    </div>
    <div class="user-card-contact__col user-card-contact__col--xs">
      <Btn variant="primary" label="Pierwszy button" />
    </div>
  </div>
</template>

<script setup>
import Btn from '@/components/atoms/Btn/Btn.vue'

defineProps({
  src: String,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>