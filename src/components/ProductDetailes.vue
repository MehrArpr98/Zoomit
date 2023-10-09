<template>
  <div
    v-for="(product, index) in products"
    :key="product"
    class="row productSummery border-b border-slate-300 pb-1 relative flex flex-row flex-wrap items-center mb-6 mt-0"
    :class="{ inCompare: inCompare[index] }"
  >
    <div
      class="productSummery__imgContainer col-2 flex justify-center items-center basis-1/6 w-1/6"
    >
      <span
        title="امتیاز زومیت"
        class="productSummery__rate fa-num w-5 h-5 absolute flex justify-center items-center text-white text-xs top-0 pt-0.5 right-2"
        :class="{ green: product.rate > 7, yellow: product.rate < 8 }"
        >{{ product.rate }}</span
      >

      <a class="overflow-hidden text-center img" :href="product.href">
        <img class="max-w-full max-h-full" loading="lazy" :src="product.src" />
      </a>
    </div>
    <div class="col-3 w-1/4 basis-1/4 p-0 productSummery__title">
      <div>
        <a :href="product.href">
          <span class="productTitle block text-black text-sm font-semibold">{{
            product.title
          }}</span>
        </a>

        <span class="productEnglishTitle inline-block text-xs text-gray-400">{{
          product.titleEN
        }}</span>
      </div>
    </div>
    <div class="col-7 w-7/12 basis-7/12 productSummery__prices-btns">
      <div class="row flex flex-wrap">
        <div class="productSummery__prices col-8 w-8/12 basis-8/12 hidden-xs">
          <div class="grow self-center text-center" v-if="product.price">
            <span class="text-red-500 fa-num text-lg">{{ formatted_price(product.price) }}</span
            ><span class="currencyTitle text-xs text-red-500 mr-1">تومان</span>
          </div>
        </div>
        <div class="col-4 w-1/3 basis-1/3 productSummery__btns-compare">
          <div class="productSummery__buttons flex justify-end items-end">
            <a
              style="padding-inline: 8px"
              class="button flex float-left cursor-pointer py-2 px-0 mb-0 mr-1 items-center justify-center bg-neutral-200 text-gray-600 text-sm"
              :href="product.href"
              >مشاهده فروشندگان</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <span class="checkbox checkbox-red cursor-pointer ml-12 duration-200">
        <input
          type="checkbox"
          :id="'chb-inLine' + index"
          onchange="compare(product)"
          v-model="inCompare[index]"
        />

        <label
          :for="'chb-inLine' + index"
          class="inline-block relative px-1 text-xs font-light cursor-pointer pr-4 text-gray-400"
          >مقایسه</label
        >
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

defineProps({
  products: Array
})

const inCompare = ref([0])

const formatted_price = computed(() => (number) => number.toLocaleString('en-US'))
</script>
<style>

.productSummery__rate.green {
  background-color: #00d338;
}
.productSummery__rate.yellow {
  background-color: #ffc922;
}
.productSummery .productSummery__imgContainer a {
  width: 130px;
  height: 86px;
}
.productSummery:hover .checkbox {
  opacity: 1 !important;
}
.productsList .c-productsList__inLine .productSummery.inCompare {
  opacity: 0.6;
}
.productsList .c-productsList__inLine .productSummery:not(.inCompare) .checkbox {
  opacity: 0;
}
.productsList .c-productsList__inLine .productSummery .checkbox label:before {
  width: 12px;
  height: 12px;
}
.productsList
  .c-productsList__inLine
  .productSummery
  .checkbox
  input[type='checkbox']:checked
  ~ label::after {
  content: '\2713';
  width: auto;
  height: auto;
  top: 36%;
  position: absolute;
  background: transparent;
  right: -7px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: 'zoomit-icons' !important;
  color: #f00;
  font-size: 23px;
  font-weight: bold;
}

</style>