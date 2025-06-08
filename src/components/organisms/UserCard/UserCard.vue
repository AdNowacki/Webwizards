<template>
  <div class="user-card">
    <UserCardContact @click="emit('click')" :user="user" />
    <div class="user-card__details">
      CCCC
    </div>
  </div>
</template>

<script setup>
import UserCardContact from '@/components/organisms/UserCardContact/UserCardContact.vue';

const props = defineProps({
  user: Object | null,
});

const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>