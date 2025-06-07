<template>
  <div class="user-card-contact">
    <div v-if="src" class="user-card-contact__col user-card-contact__col--xs">
      <Avatar :src="src" />
    </div>
    <div class="user-card-contact__col">
      wsknakjnakjnxl
    </div>
    <div class="user-card-contact__col user-card-contact__col--xs user-card-contact__col--text-right">
      <Btn variant="primary" label="Pobierz dane użytkownika" />
    </div>
  </div>
</template>

<script setup>
import Btn from '@/components/atoms/Btn/Btn.vue'
import Avatar from '@/components/molecules/Avatar/Avatar.vue';

defineProps({
  src: String,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>