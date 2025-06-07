<template>
  <div class="user-card">
    <UserCardContact src="/public/avatar.jpg" />
    <div class="user-card__details">
      CCCC
    </div>
  </div>
</template>

<script setup>
import UserCardContact from '@/components/organisms/UserCardContact/UserCardContact.vue';
defineProps({
  src: String,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>