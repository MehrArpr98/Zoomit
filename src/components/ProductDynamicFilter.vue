<template>
  <template v-for="(filterItem, i) in ProductFilters" :key="filterItem">
    <div class="optionsContainer optionList border-b border-slate-300 mb-3"
    v-if="type === filterItem.type">
      <div
        class="optionList__items relative m-0 mb-3"
        :class="{ 'scroll-wrapper': filter_i_showMoreItems[i] }"
      >
        <span class="optionsContainer__title w-full text-right font-light border-0 p-0 mb-1 mt-0">
          {{ filterItem.title }}
        </span>

        <ul
          class="optionList__itemsList scrollbar-inner customizeScroll overflow-hidden m-0"
          :class="{ 'moreHeight scroll-content': filter_i_showMoreItems[i] }"
        >
          <li v-for="(item, index) in filterItem.filters_item_array" :key="item" class="h-5">
            <span class="checkbox checkbox-red">
              <input
                type="checkbox"
                :id="'ch' + (i + 3) + index"
                v-model="filterItem.picked"
                :value="item"
              />

              <label
                class="inline-block relative pr-6 px-1 text-sm font-light cursor-pointer pr-4"
                :for="'ch' + (i + 3) + index"
              >
                {{ item }}</label
              >
            </span>
          </li>
        </ul>
        <span
          v-if="filterItem.filters_item_array.length > 5 && !filter_i_showMoreItems[i]"
          @click="filter_i_showMoreItems[i] = true"
          class="showMoreItems"
          >بیشتر</span
        >
      </div>
    </div>
  </template>
</template>
<script setup>
import { ref } from 'vue'
import ProductFilters from '../assets/jsons/ProductFilters.json'
defineProps({
  type: String
})
const filter_i_showMoreItems = ref([0])
</script>

<style>
.c-side-bar .optionsContainer__title {
  line-height: 27px;
  color: #ff0025;
  font-size: 16px;
}
.customizeScroll {
  max-height: 100px;
}
.optionList .showMoreItems {
  color: #ccc;
  cursor: pointer;
  font-size: 10px;
  font-weight: 200;
  position: relative;
  padding-right: 10px;
}
.optionList .showMoreItems:before {
  content: '\25be ';
  vertical-align: middle;
  margin-left: 4px;
  font-size: 16px;
  position: absolute;
  right: -3px;
  top: -1px;
}
.scroll-wrapper {
  overflow: hidden !important;
  padding: 0 !important;
  position: relative;
}
.scroll-wrapper > .scroll-content {
  border: none !important;
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
  height: auto;
  left: 0;
  margin: 0;
  max-width: none !important;
  overflow-y: scroll !important;
  padding: 0;
  position: relative !important;
  top: 0;
  width: auto !important;
}
.moreHeight {
  max-height: 190px;
}
.scroll-wrapper > .scroll-content::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #e0e0e0;
}
.scroll-wrapper > .scroll-content::-webkit-scrollbar {
  width: 6px;
  background: #f3f3f3;
  border-radius: 6px;
}
</style>
