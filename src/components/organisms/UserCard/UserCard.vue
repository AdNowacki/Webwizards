<template>
  <div class="user-card">
    <UserCardContact @click="emit('click')" :user="user" />
    <div v-if="user.about" class="user-card__details">
      <UserCardDetails :content="user.about" />
    </div>
  </div>
</template>

<script setup>
import UserCardContact from '@/components/molecules/UserCardContact/UserCardContact.vue';
import UserCardDetails from '@/components/molecules/UserCardDetails/UserCardDetails.vue';

const props = defineProps({
  user: Object | null,
});

const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>