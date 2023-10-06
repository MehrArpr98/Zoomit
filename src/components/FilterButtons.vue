<template>
  <div class="relative" :class="{ 'mb-12 h-12' : button_type === 'link' }">
    <div class="flex" :class="{ 'justify-center' : button_type === 'link'}">
      <label 
        v-for="myButton in buttons"
        :key="myButton"
        class=" "
        :class="{ active: filter === myButton.val,
        'LinkShape font-thin text-base text-gray-500 py-0 px-1.5 relative cursor-pointer leading-4 border-left' : button_type === 'link',
        'ButtonShape hoverInvert text-xs font-bold py-2 px-4 border-0 cursor-pointer rounded-2xl relative w-fit h-8 flex justify-center items-center ml-5' : button_type !== 'link' }"
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
  buttons: Array,
  button_type: String
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
.LinkShape{
  font-family: 'Vazir-thin';
  border-left: 1px solid #6b7280 !important
}
.LinkShape:last-child{
  border-left: none !important
}
.LinkShape.active,
.LinkShape:hover{
  color: #e51a2d;
}
</style>
