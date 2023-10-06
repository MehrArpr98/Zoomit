<template>
  <main>
    <div class="w-full mt-4 md:px-12"
    :class="{ 'md:mt-8' : button_type !== 'link' }">
      <div class="relative">
        <filter-buttons
          @SetFilter="(e) => { filter = e }"
          :filter_item="props.filter_item"
          :type="type"
          :buttons="buttons"
          :button_type="button_type"
        />
      </div>
    </div>

    <div class="w-full mt-8 relative">
      <div class="relative">
        <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
          <swiper :filter_item="filter" :perView="perView" :array="array" :type="type" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Swiper from './Swiper.vue'
import FilterButtons from './FilterButtons.vue';

const filter = ref('')

onMounted(() => {
  filter.value = props.filter_item
})

const props = defineProps({
  filter_item: String,
  perView: Number,
  array: Array,
  type: String,
  buttons: Array,
  button_type: String
})
</script>
