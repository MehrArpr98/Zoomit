<template>
  <main>
    <div class="my-6 relative">
      <filter-buttons
        @SetFilter="(e) => { LastContent_filter = e }"
        :filter_item="LastContent_filter"
        type="LastContent"
        :buttons="LastContentButtonsArray"
      />
    </div>
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
          <p>{{ news.desc }}</p>

          <div class="absolute bottom-0 flex flex-wrap justify-between">
            <div class="flex flex-wrap justify-center items-center gap-4">
              <div class="flex flex-wrap justify-center items-center gap-1">
                <svg width="12" height="12">
                  <use href="../assets/svgs/comment.svg#svg" id="comment_icon" />
                </svg>
                <span class="fa">{{ news.comments }}</span>
              </div>
              <div class="flex flex-wrap justify-center items-center gap-1">
                <svg width="12" height="12">
                  <use href="../assets/svgs/calendar.svg#svg" id="calendar_icon" />
                </svg>
                <span class="fa"> {{ news.hour }} </span>
              </div>

              <button type="button">
                <svg width="16" height="16">
                  <use href="../assets/svgs/threeDot.svg#svg" id="threeDot_icon" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="LastContent_layer_item_devider w-full h-px"></div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import LastContentArray from '../assets/jsons/LastContentArray.json'
import LastContentButtonsArray from '../assets/jsons/LastContentButtonsArray.json'
import FilterButtons from './FilterButtons.vue';

const LastContent_filter = ref('newest')

const processed_LastContent = computed(() => {
  var newArray = LastContentArray.filter((news) => {
    return news.type == LastContent_filter.value
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
#comment_icon {
  stroke: var(--grey-1);
}
#calendar_icon,
#threeDot_icon {
  fill: var(--grey-1);
}
</style>
