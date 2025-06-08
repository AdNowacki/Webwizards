<template>
  <div class="user-card-contact">
    <div v-if="src" class="user-card-contact__col user-card-contact__col--xs">
      <Avatar :src="src" />
    </div>
    <div v-if="user" class="user-card-contact__col">
      <h2 class="user-card-contact__name" v-if="userName">{{ userName }}</h2>
      <p v-if="emailLink" class="user-card-contact__contact-item">Email: <a :href="emailLink">{{ user.email }}</a></p>
      <p class="user-card-contact__contact-item">Phone</p>
    </div>
    <div class="user-card-contact__col user-card-contact__col--xs user-card-contact__col--text-right">
      <Btn @click="emit('click')" variant="primary" label="Pobierz dane użytkownika" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Btn from '@/components/atoms/Btn/Btn.vue'
import Avatar from '@/components/molecules/Avatar/Avatar.vue';

const props = defineProps({
  user: Object | null,
});

const emit = defineEmits(['click']);

const userName = computed(() => {
  return props.user ? `${props.user.name} ${props.user.surname}` : '';
});

const src = computed(() => {
  const user = props.user;
  return user?.image ? `${user.image.baseUrl}${user.image.filename}.${user.image.extension}` : '';
});

const emailLink = computed(() => {
  return props.user ? `mailto:${props.user.email}` : '';
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>