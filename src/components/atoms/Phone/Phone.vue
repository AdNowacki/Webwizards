<template>
  <span class="phone">
    <span class="phone__number">{{ contentResolved }}</span> 
    <Btn v-if="!showFullPhone" @click="showFullPhone = true" variant="primary" label="Pokaż telefon" class="phone__btn" />
  </span>
</template>

<script setup>
import { ref, computed } from 'vue';

import Btn from '@/components/atoms/Btn/Btn.vue'

const props = defineProps({
  phone: String,
});

const showFullPhone = ref(false);

const contentResolved = computed(() => {
  const preText = "Numer telefonu:";
  
  if (showFullPhone.value) {
    return `${preText} ${props.phone}`;
  }

  const phone = props.phone.replace(/\s/gi, '');
  const phoneNumLength = phone.length;
  const lastDigits = phone.slice(-3);
  return `${preText} ${lastDigits.padStart(phoneNumLength, "X")}`;
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>