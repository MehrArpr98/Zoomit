<template>
  <div
    v-for="news in processed_LastContent"
    :key="news"
    class="flex flex-col flex-wrap md:gap-4 gap-2 mt-4"
  >
    <div class="LastContent_layer_item flex flex-row-reverse justify-between w-full rounded-sm">
      <a :href="news.href"
        ><div class="LastContent_layer_item_img_container relative flex flex-wrap">
          <img
            :alt="news.alt"
            loading="lazy"
            width="1920"
            height="1280"
            decoding="async"
            data-nimg="1"
            class="w-full h-full object-cover rounded-sm"
            :src="news.src"
          /></div
      ></a>

      <div class="LastContent_layer_item_text relative pl-4 pr-2">
        <a :href="news.href"
          ><span> {{ news.title }} </span></a
        >
        <p>
          {{ news.desc }}
        </p>

        <div class="absolute bottom-0 flex flex-wrap justify-between">
          <div class="flex flex-wrap justify-center items-center gap-4">
            <div class="flex flex-wrap justify-center items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                stroke="var(--grey-1)"
                stroke-width="1.6"
                fill="#9696a0"
              >
                <path
                  d="M8 .5c2.078 0 3.968.73 5.335 1.926C14.667 3.592 15.5 5.202 15.5 7c0 1.736-.812 3.267-2 4.389v3.853l-4.403-1.887c-.196.121-.481.142-.787.145H8c-2.078 0-3.968-.73-5.335-1.926C1.333 10.408.5 8.798.5 7s.833-3.408 2.165-4.574C4.032 1.23 5.922.5 8 .5z"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0"
                ></path></svg
              ><span class="fa">{{ news.comments }}</span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-1">
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
              ><span class="fa"> {{ news.hour }} </span>
            </div>

            <button type="button" class="icon-button__IconButtonBase-sc-1scxe75-0 keUJqZ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="var(--grey-1)"
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
    </div>

    <div class="LastContent_layer_item_devider w-full h-px"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LastContentArray from '../assets/jsons/LastContentArray.json'

const lastContentList = LastContentArray;


const props = defineProps({
  LastContent_filter: String
})

const processed_LastContent = computed(() => {
  var newArray = lastContentList.filter((news) => {
    return news.type == props.LastContent_filter
  })

  return newArray
})
</script>
<style>
.LastContent_layer span.fa {
  margin: unset;
  font-size: 12px;
  font-weight: normal;
  color: var(--grey-1);
  font-family: 'Vazir-FD', serif;
}
.LastContent_layer_item_img_container {
  width: 140px;
  height: 140px;
}
.LastContent_layer_item_img_container img {
  box-shadow: rgba(25, 25, 35, 0.15) 0px 1px 3px 0px;
}

.LastContent_layer_item_text {
  flex: 1 1 0%;
}
.LastContent_layer_item_text span {
  margin: unset;
  font-size: 14px;
  font-weight: 900;
  color: var(--text);
  font-family: 'Vazir-FD', serif;
  line-height: 28px;
  display: block;
}
.LastContent_layer_item_text p {
  margin-top: unset;
  margin-right: unset;
  margin-left: unset;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-1);
  font-family: 'Vazir-FD', serif;
  line-height: 2;
  margin-bottom: 7px;

  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}
.LastContent_layer_item_devider {
  background-color: var(--black-5);
}
</style>
