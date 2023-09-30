<template>
  <div class="ThreeCards_layer flex gap-4 overflow-x-auto w-full py-0 px-4">
    <template v-for="(card, index) in cards" :key="card">
      <component :is="type === 'news' ? NewsCard : SocialmediaCard" :item="card" :index="index" />
    </template>
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue'
import SocialmediaCard from './SocialmediaCard.vue'
defineProps({
  cards: Array,
  type: String
})
</script>
<style>
@media (min-width: 768px) {
  .ThreeCards_layer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: initial;
    padding: 0px;
  }
}
</style>
