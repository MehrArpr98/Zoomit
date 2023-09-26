<template>
  <swiper-container
    ref="SuggestSwiperRef"
    init="false"
    class="swiper-wrapper"
    slides-per-view="4"
    speed="500"
    css-mode="true"
    navigation="true"
  >
    <swiper-slide
      class="swiper-slide suggest-swiper-slide"
      v-for="myNew in processed_suggestList"
      :key="myNew"
    >
      <div class="suggestCarousel_Wrapper mb-2 relative">
        <router-link :to="myNew.link"
          ><div class="suggestCarousel_ImageWrapper w-full relative">
            <img
              :alt="myNew.alt"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="object-cover rounded-t absolute w-full h-full inset-0"
              :src="myNew.src"
            /></div
        ></router-link>

        <div class="p-6 pb-4 flex flex-col justify-between gap-4 w-full">
          <div class="flex flex-nowrap gap-2">
            <a class="suggestCarousel_Textlink" :href="myNew.link"
              ><div class="suggestCarousel_Text">
                {{ myNew.text }}
              </div></a
            >
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-row justify-center items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="var(--grey-1)"
                  stroke-width="1.7"
                  fill="#9696a0"
                >
                  <path
                    d="M8 .5c2.078 0 3.968.73 5.335 1.926C14.667 3.592 15.5 5.202 15.5 7c0 1.736-.812 3.267-2 4.389v3.853l-4.403-1.887c-.196.121-.481.142-.787.145H8c-2.078 0-3.968-.73-5.335-1.926C1.333 10.408.5 8.798.5 7s.833-3.408 2.165-4.574C4.032 1.23 5.922.5 8 .5z"
                    fill="none"
                    fill-rule="evenodd"
                    fill-opacity="0"
                  ></path></svg
                ><span class="suggestCarousel_Num text-xs font-normal">{{ myNew.comments }}</span>
              </div>
              <div class="flex flex-row justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  version="1.1"
                  fill="var(--grey-1)"
                >
                  <path
                    d="M 15 2 L 13 2 L 13 0 L 10 0 L 10 2 L 6 2 L 6 0 L 3 0 L 3 2 L 1 2 C 0.449219 2 0 2.449219 0 3 L 0 15 C 0 15.550781 0.449219 16 1 16 L 15 16 C 15.550781 16 16 15.550781 16 15 L 16 3 C 16 2.449219 15.550781 2 15 2 Z M 14 14 L 2 14 L 2 5 L 14 5 Z M 14 14 "
                  ></path></svg
                ><span class="suggestCarousel_Num text-xs font-normal"
                  >{{ myNew.hour }} ساعت پیش</span
                >
              </div>
            </div>

            <button
              type="button"
              class="cursor-pointer p-0 border-0 opacity-100 font-bold text-xs keUJqZ"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="var(--grey-3)"
              >
                <g fill-rule="evenodd">
                  <g>
                    <path
                      d="M8 6c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zM2 6c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm12 0c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
                      transform="translate(-1356.000000, -1286.000000) translate(1356.000000, 1286.000000)"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
import { getCurrentInstance, onMounted, computed } from 'vue'
import SuggestsArray from '../assets/jsons/SuggestsArray.json'

const props = defineProps({
  suggest_filter: String
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

const suggests = SuggestsArray

const processed_suggestList = computed(() => {
  var newArray = suggests.filter((suggest) => {
    return suggest.type == props.suggest_filter
  })

  return newArray
})

onMounted(() => {
  const instance = getCurrentInstance()
  const swiperContainer = instance.refs.SuggestSwiperRef
  console.log(swiperContainer)
  Object.assign(swiperContainer, params)
  swiperContainer.initialize()
})
</script>

<style>
.suggest-swiper-slide {
  padding-left: 25px;
}

.suggestCarousel_Wrapper {
  border-radius: 3px;
  background-color: var(--card);
  box-shadow: 0 1px 3px 0 var(--elevation);
}

.suggestCarousel_Text {
  margin: unset;
  font-size: 14px;
  font-weight: bold;
  color: var(--text);
  line-height: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.suggestCarousel_ImageWrapper {
  aspect-ratio: 3 / 2;
}

.suggestCarousel_Text:hover {
  color: var(--text-hover);
}

.suggestCarousel_Num {
  color: var(--grey-1);
  font-family: 'Vazir-FD' !important;
}
</style>
