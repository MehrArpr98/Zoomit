<template>
  <div class="suggestCarousel_Wrapper mb-2 relative">
    <a :href="item.link"
      ><div class="suggestCarousel_ImageWrapper w-full relative">
        <img
          :alt="item.alt"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="object-cover rounded-t absolute w-full h-full inset-0"
          :src="item.src"
        /></div
    ></a>

    <div class="p-6 pb-4 flex flex-col justify-between gap-4 w-full">
      <div class="flex flex-nowrap gap-2">
        <a class="suggestCarousel_Textlink" :href="item.link"
          ><div class="suggestCarousel_Text">
            {{ item.text }}
          </div></a
        >
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-row justify-center items-center gap-1">
            <svg width="12" height="12">
              <use href="../assets/svgs/comment.svg#svg" id="comment_icon" />
            </svg>
            <span class="suggestCarousel_Num text-xs font-normal">{{ item.comments }}</span>
          </div>
          <div class="flex flex-row justify-center items-center gap-1">
            <svg width="12" height="12">
              <use href="../assets/svgs/calendar.svg#svg" id="calendar_icon" />
            </svg>

            <span class="suggestCarousel_Num text-xs font-normal">{{ item.hour }} ساعت پیش</span>
          </div>
        </div>

        <button type="button" class="cursor-pointer p-0 border-0 opacity-100 font-bold text-xs">
          <svg width="16" height="16">
            <use href="../assets/svgs/threeDot.svg#svg" id="threeDot_icon" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

defineProps({
  item: Object
})
</script>
<style>
.swiper-slide-quarter {
  width: 25% !important;
}
.suggest-swiper-slide{
  padding-left: 25px;
  width: calc(25% + 6px) !important;
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
