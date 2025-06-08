<template>
  <main :class="componentClasses">
    <UserCard v-if="user && !error" @click="fetchUserHandler" :user="user" />
    <ErrorData v-if="error" :message="error" />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import { useFetchUser } from '@/composables';

import UserCard from '@/components/organisms/UserCard/UserCard.vue'
import ErrorData from '@/components/atoms/ErrorData/ErrorData.vue';

const user = ref(null);
const error = ref('');


const componentClasses = computed(() => {
  return ['page', 'page--home'];
});

const { fetchUser } = useFetchUser();

const setError = (message) => error.value = message;
const unsetError = () => error.value = '';


onMounted(async () => {
  try {
    unsetError();
    const response = await fetchUser();
    if (response?.status !== 200) {
      throw new Error('Failed to fetch user');
    }

    user.value = response.data;
  } catch (error) {
    setError('Ups! Niestety nie ma użytkownika albo wyśtąpił problem z pobraniem');
    console.error('Error fetching user:', error);
  }
});

const fetchUserHandler = async () => {
  try {
    unsetError();
    const response = await fetchUser();
    if (response?.status !== 200) {
      throw new Error('Failed to fetch user');
    }

    user.value = response.data;
  } catch (error) {
    setError('Ups! Niestety nie ma użytkownika albo wyśtąpił problem z pobraniem');
    console.error('Error fetching user:', error);
  }
};
</script>