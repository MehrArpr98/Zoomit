<template>
  <div class="AdvertisingParser w-full" :class="{ hidden: !Ads_show }">
    <div class="AdvertisingParser_CloseButtonWrapper flex flex-nowrap items-center gap-1 mb-1">
      <svg width="16" height="16" class="cursor-pointer" @click="Ads_show = false">
        <use href="../assets/svgs/close.svg#svg" id="CloseButtonIcon" />
      </svg>
      <span class="AdvertisingParser_Title">تبلیغات</span>
      <div class="AdvertisingParser_HrBase w-full h-px"></div>
    </div>

    <div class="AdvertisingParser_Grid gap-6">
      <div class="Display_DisplayRoot w-full max-w-full relative cursor-pointer"
      :class="{'rectangle' : type == 'rectangle'}"
      v-for="ad in ads" :key="ad">
        <a
          target="_blank"
          rel="nofollow"
          class="flex"
          :href="ad.href"
          ><img
            alt="B3-tigo8"
            data-code="B3-tigo8"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            :src="ad.src"
            class="position: absolute w-full h-full inset-0 object-contain object-center"
        /></a>
      </div>
     
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  ads: Array,
  type: String
}) 
const Ads_show = ref(true)
  
</script>
<style>
.AdvertisingParser_Title {
  font-size: 12px;
  font-weight: normal;
  color: var(--grey-1);
}
#CloseButtonIcon {
  fill: var(--grey-1);
}
.AdvertisingParser_HrBase {
  background-color: var(--black-5);
}

.AdvertisingParser_Grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
}

.Display_DisplayRoot {
  aspect-ratio: 1.2 / 1;
}
.Display_DisplayRoot.rectangle{
  aspect-ratio: 3.88 / 1;
}
</style>
