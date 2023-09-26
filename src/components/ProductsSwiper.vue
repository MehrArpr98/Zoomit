<template>
  <swiper-container
    ref="ProductsSwiperRef"
    init="false"
    class="swiper-wrapper"
    slides-per-view="9"
    speed="500"
    css-mode="true"
    navigation="true"
  >
    <swiper-slide class="swiper-slide" v-for="product in products" :key="product">
      <router-link class="ProductCarousel_link" :to="product.link"
        ><div class="ProductCarousel_Wrapper flex flex-col flex-wrap justify-center items-center">
          <div class="ProductCarousel_IconWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 80">
              <path :d="product.path" fill-rule="evenodd"></path>
            </svg>
          </div>
          <span class="ProductCarousel_Text">{{ product.text }}</span>
        </div></router-link
      >
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
import { getCurrentInstance, onMounted } from 'vue'
import ProductsArray from '../assets/jsons/ProductsArray.json'

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

const products = ProductsArray

onMounted(() => {
  const instance = getCurrentInstance()
  const swiperContainer = instance.refs.ProductsSwiperRef
  console.log(swiperContainer)
  Object.assign(swiperContainer, params)
  swiperContainer.initialize()
})
</script>

<style>

.ProductCarousel_IconWrapper {
  width: 88px;
}
.ProductCarousel_IconWrapper > svg {
  fill: var(--grey-1);
}
.ProductCarousel_Text {
  margin: unset;
  font-size: 13px;
  font-weight: normal;
  color: var(--grey-1);
  text-align: center;
}
</style>
