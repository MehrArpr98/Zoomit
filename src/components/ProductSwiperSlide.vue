<template>
  <a class="ProductCarousel_link" :href="item.link"
    ><div class="ProductCarousel_Wrapper flex flex-col flex-wrap justify-center items-center">
      <div class="ProductCarousel_IconWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 80">
          <path :d="item.path" fill-rule="evenodd"></path>
        </svg>
      </div>
      <span class="ProductCarousel_Text">{{ item.text }}</span>
    </div></a
  >
</template>
<script setup>
defineProps({
  item: Object
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
