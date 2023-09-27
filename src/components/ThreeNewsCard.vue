<template>
  <template v-for="(card, index) in cards" :key="card">
    <news-card :item="card" :index="index" />
  </template>
</template>

<script setup>
import NewsCard from './NewsCard.vue'
defineProps({
  cards: Array
})
</script>
