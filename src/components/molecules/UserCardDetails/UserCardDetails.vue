<template>
  <div class="user-card-details">
    <div v-html="contentResolver"></div>
    <Btn v-if="!showAllContent" @click="showAllContent = true" variant="primary" label="Rozwiń opis" class="user-card-details__btn" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Btn from '@/components/atoms/Btn/Btn.vue'

const props = defineProps({
  content: String,
});

const showAllContent = ref(false);

const contentResolver = computed(() => {
  const nlToBrContent = props.content.replace(/\n/g, '<br />');
  return showAllContent.value ? nlToBrContent : nlToBrContent.split('<br />')[0]
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>