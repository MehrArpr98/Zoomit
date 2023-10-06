<template>
  <swiper-container
    ref="SwiperRef"
    init="false"
    class="swiper-wrapper"
    :slides-per-view="perView"
    speed="500"
    css-mode="true"
    navigation="true"
  >
    <swiper-slide
      class="swiper-slide"
      :class="{
        'swiper-slide-quarter': type !== 'productType',
        'suggest-swiper-slide': type === 'suggest' || type === 'zoomitSuggest'
      }"
      v-for="item in processed_array"
      :key="item"
    >
      <component
        :is="
          type === 'productType'
            ? ProductTypeSwiperSlide
            : type === 'product'
            ? ProductSlide
            : type === 'suggest'
            ? SuggestSwiperSlide
            : NewsCard
        "
        :item="item"
      />
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
import { getCurrentInstance, onMounted, computed } from 'vue'
import SuggestSwiperSlide from './SuggestSwiperSlide.vue'
import ProductTypeSwiperSlide from './ProductTypeSwiperSlide.vue'
import ProductSlide from './ProductSlide.vue'
import NewsCard from './NewsCard.vue'

const props = defineProps({
  filter_item: String,
  perView: Number,
  array: Array,
  type: String
})
const params = {
  navigation: true,

  injectStyles: [
    `
    .swiper-button-next,
.swiper-button-prev {
  width: 48px;
  height: 100%;
  top: 50%;
}
.swiper-wrapper {
  width: calc(100% - 96px);
  margin: 0 auto;
}

.swiper-button-next {
  border-right: 1px var(--black-5) solid;
  top: 22px;
  left: 0px !important;
}
.swiper-button-prev {
  border-left: 1px var(--black-5) solid;
  top: 22px;
  right: 0px !important;
}
.swiper-button-next svg,
.swiper-button-prev svg {
  color: rgb(150, 150, 160);
  width: 16px;
  height: 16px;
}
.swiper-button-next:hover svg,
.swiper-button-prev:hover svg {
  color: black;
}

    `
  ]
}

const processed_array = computed(() => {
  if (props.filter_item === '') return props.array
  var newArray = props.array.filter((item) => {
    return item.type == props.filter_item
  })

  return newArray
})

onMounted(() => {
  const instance = getCurrentInstance()
  const swiperContainer = instance.refs.SwiperRef

  Object.assign(swiperContainer, params)
  swiperContainer.initialize()
})
</script>
