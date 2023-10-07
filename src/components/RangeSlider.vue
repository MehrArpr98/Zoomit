<template>
  <div class="rangeSlider mt-3 w-full">
    <div class="middle relative inline-block w-full">
      <div class="multi-range-slider">
        <input
          type="range"
          id="input-left"
          class="range2 absolute w-full opacity-0 h-1.5"
          v-model="myLeft"
          @input="setLeftValue()"
        />
        <input
          type="range"
          id="input-right"
          class="range2 absolute w-full opacity-0 h-1.5"
          v-model="myRight"
          @input="setRightValue()"
        />
        <div class="slider relative mx-4 h-1.5">
          <div class="track absolute -inset-x-4 -top-0.5 bottom-0.5 rounded-md"></div>
          <div
            class="range absolute inset-x-0 -top-0.5 bottom-0.5"
            :style="`left: ${percents.percentRight - 1}%; right: ${percents.percentLeft - 1}%`"
          ></div>
          <div
            class="thumb left absolute w-3.5 h-3.5 rounded-full z-30 -translate-x-4 -translate-y-1.5"
            :style="`left: ${percents.percentRight}%`"
          ></div>
          <div
            class="thumb right absolute w-3.5 h-3.5 rounded-full z-30 translate-x-4 -translate-y-1.5"
            :style="`right: ${percents.percentLeft}%`"
          ></div>
        </div>
      </div>
      <div id="multi_range" class="mb-8 mt-3 relative">
        <span :style="`left: ${percents.percentRight / 2}%`" class="z-20">
          {{ formatted_price((percents.percentRight / 100) * 128_900_000) }}
        </span>
        <span :style="`right: ${percents.percentLeft / 2}%`">
          {{ formatted_price(((100 - percents.percentLeft) / 100) * 128_900_000) }}</span
        >
        <span class="left-0"> 0</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch } from 'vue'

const myLeft = ref(0)
const myRight = ref(100)
const percents = reactive({
  percentLeft: 0,
  percentRight: 0
})

const props = defineProps({
  reset_percents: Boolean
})
const emit = defineEmits(['prices', 'set_reset_percents'])

watch(
  () => props.reset_percents,
  () => {
    if (props.reset_percents) {
      percents.percentLeft = 0
      percents.percentRight = 0
      myLeft.value = 0
      myRight.value = 100
      emit('set_reset_percents', false)
    }
  }
)

watch(
  percents,
  (percents) => {
    emit(
      'prices',
      ((100 - percents.percentLeft) / 100) * 128_900_000,
      (percents.percentRight / 100) * 128_900_000
    )
  },
  { deep: true }
)

const setLeftValue = () => {
  const [min, max] = [0, 100]
  myLeft.value = Math.min(myLeft.value, myRight.value - 1)
  const percent = ((myLeft.value - min) / (max - min)) * 100
  percents.percentLeft = percent
}

const setRightValue = () => {
  const [min, max] = [0, 100]
  myRight.value = Math.max(myRight.value, myLeft.value + 1)
  const percent = ((100 - myRight.value - min) / (max - min)) * 100
  percents.percentRight = percent
}

const formatted_price = computed(() => (number) => number.toLocaleString('en-US'))
</script>
<style>
.rangeSlider .middle .multi-range-slider .slider {
  position: relative;
  z-index: 1;
  margin: 0 15px;
}
.rangeSlider .middle .multi-range-slider .slider .track {
  background-color: #ebebeb;
}
.rangeSlider .middle .multi-range-slider .slider > .range {
  background-color: #ff0025;
}
.rangeSlider .middle .multi-range-slider .slider > .thumb {
  background-color: #ccc;
}
.rangeSlider .middle .multi-range-slider .range2 {
  pointer-events: none;
  z-index: 2;
}
.rangeSlider .middle .multi-range-slider .range2::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  cursor: pointer;
  -webkit-appearance: none;
}
.rangeSlider .middle #multi_range span {
  color: #ff0025;
  font-size: 14px;
  font-family: 'Vazir-FD';
  position: absolute;
}
.rangeSlider .middle #multi_range span:last-child {
  color: black;
}
</style>
