<template>
  <div class="relative">
    <div class="flex">
      <label
        v-for="myButton in buttons"
        :key="myButton"
        class="ButtonShape hoverInvert text-xs font-bold py-2 px-4 border-0 cursor-pointer rounded-2xl relative w-fit h-8 flex justify-center items-center ml-5"
        :class="{ active: filter === myButton.val }"
      >
        {{ myButton.text }}
        <input
          :name="type"
          v-model="filter"
          type="radio"
          class="absolute top-0 left-0 w-0 h-0 -z-10"
          :value="myButton.val"
      /></label>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'

const emit = defineEmits(['filter'])
const props = defineProps({
  filter_item: String,
  type: String,
  buttons: Array
})

const filter = ref('')

onMounted(() => {
  filter.value = props.filter_item
})

watch(filter, (filter) => {
  emit('SetFilter', filter)
})
</script>
<style>
.ButtonShape {
  border: solid 1px var(--button--outline--default-border);
  background-color: transparent;
  color: var(--button--outline--default-text);
}
.ButtonShape.active {
  background-color: var(--button--contained--default-background);
  color: var(--button--contained--default-text);
}
</style>
