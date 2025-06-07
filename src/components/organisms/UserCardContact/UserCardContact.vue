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
      <Btn @click="fetchUserHandler" variant="primary" label="Pobierz dane użytkownika" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Btn from '@/components/atoms/Btn/Btn.vue'
import Avatar from '@/components/molecules/Avatar/Avatar.vue';

import { useFetchUser } from '@/composables';

const user = ref(null);

const userName = computed(() => {
  return user?.value ? `${user.value.name} ${user.value.surname}` : '';
});

const src = computed(() => {
  const value = user?.value;
  return value?.image ? `${value.image.baseUrl}${value.image.filename}.${value.image.extension}` : '';
});

const emailLink = computed(() => {
  return user?.value ? `mailto:${user.value.email}` : '';
});

const { fetchUser } = useFetchUser();

onMounted(async () => {
  try {
    const response = await fetchUser();
    if (response?.status !== 200) {
      throw new Error('Failed to fetch user');
    }

    user.value = response.data;
    console.log(user.value)
  } catch (error) {
    console.error('Error fetching user:', error);
  }
});

const fetchUserHandler = async () => {
  try {
    const response = await fetchUser();
    if (response?.status !== 200) {
      throw new Error('Failed to fetch user');
    }

    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

</script>

<style lang="scss" scoped>
@import './style.scss';
</style>