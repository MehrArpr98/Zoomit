<template>
  <!-- <div class="pt-20"> {{ this.$route.params.item }}</div> -->
  <div class="container productsList mt-16 mx-auto grow" data-bind="with: productsFilter">
    <div class="breadcrump pt-0">
      <router-link :to="{ name: 'home' }"> زومیت </router-link>
      <router-link :to="{ name: 'product' }"> محصولات </router-link>
      <router-link
        :to="{
          name: 'productItem',
          params: { item: this.$route.params.item },
          force: true,
          state: { productItemName: product_item_name }
        }"
      >
        {{ product_item_name }}
      </router-link>
    </div>
    <h1 class="mb-3 mt-1 font-bold text-2xl h-10">قیمت {{ product_item_name }}</h1>
    <div
      class="row productsList__header flex flex-row flex-wrap justify-between items-center mb-5 mt-0 pb-5 border-b border-slate-300"
    >
      <div class="col-3 w-1/4 basis-1/4">
        <p class="text-xs m-0 text-gray-400 font-light"><span>558</span> محصول پیدا شده است</p>
      </div>
      <div class="col-9 w-3/4 basis-3/4 flex justify-between items-center">
        <div class="">
          <label class="text-sm text-black font-light ml-1">مرتب سازی</label>
          <select
            class="bg-white text-xs text-black h-8 border border-black"
            id="sortDropdown1"
            v-model="sort_based"
          >
            <option value="0">محبوب‌ترین</option>
            <option value="1">جدید‌ترین</option>
            <option value="2">ارزان‌ترین</option>
            <option value="3">گران‌ترین</option>
            <option value="4">امتیاز‌ زومیت</option>
          </select>
        </div>
        <div class="productsList__header__showType tabs"></div>
      </div>
    </div>
    <div class="row flex flex-wrap">
      <div class="col-3 w-1/4 basis-1/4 c-side-bar">
        <div class="relative">
          <div class="">
            <div class="optionsContainer optionList border-b border-slate-300 mb-3">
              <div class="optionList__items relative m-0 mb-3">
                <ul class="optionList__itemsList scrollbar-inner overflow-hidden m-0">
                  <li>
                    <span class="checkbox checkbox-red">
                      <input type="checkbox" value="" id="ch00" />
                      <label
                        for="ch00"
                        class="inline-block relative pr-6 px-1 text-sm font-light cursor-pointer pr-4"
                        >قیمت داشته باشد</label
                      >
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="priceRangeInFilter priceRange border-b border-slate-300 mb-3 pb-3">
              <span dir="rtl" class="priceRange__title text-gray-400 text-sm font-normal block"
                >محدوده قیمت (تومان)</span
              >
              <div class="rangeSlider mt-3 w-full">
                <div class="middle relative inline-block w-full">
                  <div class="multi-range-slider">
                    <input
                      type="range"
                      id="input-left"
                      class="range2 absolute w-full opacity-0 h-1.5"
                      v-model="myLeft"
                      @input="setLeftValue()"
                    />
                    <input
                      type="range"
                      id="input-right"
                      class="range2 absolute w-full opacity-0 h-1.5"
                      v-model="myRight"
                      @input="setRightValue()"
                    />
                    <div class="slider relative mx-4 h-1.5">
                      <div class="track absolute -inset-x-4 -top-0.5 bottom-0.5 rounded-md"></div>
                      <div
                        class="range absolute inset-x-0 -top-0.5 bottom-0.5"
                        :style="`left: ${percentRight - 1}%; right: ${percentLeft - 1}%`"
                      ></div>
                      <div
                        class="thumb left absolute w-3.5 h-3.5 rounded-full z-30 -translate-x-4 -translate-y-1.5"
                        :style="`left: ${percentRight}%`"
                      ></div>
                      <div
                        class="thumb right absolute w-3.5 h-3.5 rounded-full z-30 translate-x-4 -translate-y-1.5"
                        :style="`right: ${percentLeft}%`"
                      ></div>
                    </div>
                  </div>
                  <div id="multi_range" class="mb-8 mt-3 relative">
                    <span :style="`left: ${percentRight}%`" class="z-20">
                      {{ formatted_price((percentRight / 100) * 128_900_000) }}
                    </span>
                    <span :style="`right: ${percentLeft}%`">
                      {{ formatted_price(((100 - percentLeft) / 100) * 128_900_000) }}</span
                    >
                    <span class="left-0"> 0</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="optionsContainer optionList border-b border-slate-300 mb-3"
              v-for="(filterItem, i) in filterItems"
              :key="filterItem"
            >
              <div
                class="optionList__items relative m-0 mb-3"
                :class="{ 'scroll-wrapper': filterItem.showMoreItems }"
              >
                <span
                  class="optionsContainer__title w-full text-right font-light border-0 p-0 mb-1 mt-0"
                >
                  {{ filterItem.title }}
                </span>

                <ul
                  class="optionList__itemsList scrollbar-inner customizeScroll overflow-hidden m-0"
                  :class="{ 'moreHeight scroll-content': filterItem.showMoreItems }"
                >
                  <li
                    v-for="(item, index) in filterItem.filters_item_array"
                    :key="item"
                    class="h-5"
                  >
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
                  v-if="filterItem.filters_item_array.length > 5 && !filterItem.showMoreItems"
                  @click="filterItem.showMoreItems = true"
                  class="showMoreItems"
                  >بیشتر</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9 w-3/4 basis-3/4 c-productsList productsList__results">
        <div class="productList__body relative">
          <div class="c-productsList__inLine" id="inRow">
            <div>
              <div>
                <div
                  class="noresult display: flex items-center mt-5 h-12 text-red-500"
                  style="display: none"
                >
                  محصولی با این مشخصات یافت نشد
                </div>

                <div
                  v-for="(product, index) in proccessed_products"
                  :key="product"
                  class="row productSummery border-b border-slate-300 pb-1 relative flex flex-row flex-wrap items-center mb-6 mt-0"
                  :class="{ inCompare: product.inCompare }"
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
                        <div class="grow self-center text-center">
                          <span class="text-red-500 fa-num text-lg">{{
                            formatted_price(product.price)
                          }}</span
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
                        data-id="93264"
                        data-title="آیفون 14 پرو مکس اپل"
                        data-price="0"
                        data-slug="apple-iphone-14-pro-max"
                        data-image="https://cdn01.zoomit.ir/2022/9/iphone-14-pro-max-purple-1.jpg?w=300"
                        data-url="/product/apple-iphone-14-pro-max/"
                        slug="apple-iphone-14-pro-max"
                        onchange="compare(product)"
                        v-model="product.inCompare"
                      />

                      <label
                        :for="'chb-inLine' + index"
                        class="inline-block relative px-1 text-xs font-light cursor-pointer pr-4 text-gray-400"
                        >مقایسه</label
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onUpdated, computed } from 'vue'
const product_item_name = ref('')

const myLeft = ref(0)
const myRight = ref(100)
const percentLeft = ref(0)
const percentRight = ref(0)
const sort_based = ref('0')

const filterItems = ref([
  {
    title: 'سیستم عامل',
    filters_item_array: ['iOS', 'اندروید', 'ویندوز فون', 'بلک بری', 'دیگر سیستم‌عامل‌ها'],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'سازنده',
    filters_item_array: [
      'سامسونگ',
      'شیائومی',
      'اپل',
      'هواوی',
      'آنر',
      'نوکیا',
      'موتورولا',
      'وان پلاس',
      'ال ‌جی',
      'ایسوس',
      'سونی',
      'ریلمی',
      'کت',
      'لنوو',
      'میزو',
      'ورتو',
      'بلو',
      'دوجی'
    ],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'رزولوشن',
    filters_item_array: [
      '1088 در 2640 پیکسل',
      '720 در 1280 پیکسل',
      '1080 در 2400 پیکسل',
      '1080 در 1920 پیکسل',
      '720 در 1600 پیکسل',
      '480 در 800 پیکسل',
      '480 در 854 پیکسل',
      '240 در 320 پیکسل',
      '720 در 1500 پیکسل',
      '720 در 1544 پیکسل',
      '750 در 1334 پیکسل',
      '1440 در 3040 پیکسل',
      ' 1170 در 2532 پیکسل',
      '1116 در 2480 پیکسل',
      '1080 در 2232 پیکسل',
      '1176 در 2400 پیکسل'
    ],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'درگاه کارت حافظه',
    filters_item_array: ['دارد', 'ندارد'],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'حداکثر رزولوشن فیلم‌برداری دوربین‌ پشت',
    filters_item_array: ['1080p', '4K', '720p', '8K', '480p', '1440p', '320p', '240p', '144p'],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'پشتیبانی از شارژ سریع',
    filters_item_array: ['دارد', 'ندارد'],
    picked: [],
    showMoreItems: false
  },
  {
    title: 'پشتیبانی از شارژ بی‌سیم',
    filters_item_array: ['دارد', 'ندارد'],
    picked: [],
    showMoreItems: false
  }
])

const products = reactive([
  {
    inCompare: false,
    rate: 9,
    href: '/product/apple-iphone-14-pro-max/',
    src: 'https://cdn01.zoomit.ir/2022/9/iphone-14-pro-max-purple-1.jpg?w=260',
    title: 'گوشی آیفون 14 پرو مکس اپل',
    titleEN: 'Apple iPhone 14 Pro Max',
    price: 59250000
  },
  {
    inCompare: false,
    rate: 9,
    href: '/product/apple-iphone-14-pro/',
    src: 'https://cdn01.zoomit.ir/2022/9/apple-iphone-14-pro-gold.jpg?w=200',
    title: 'گوشی آیفون 14 پرو اپل',
    titleEN: 'Apple iPhone 14 Pro',
    price: 52400000
  },
  {
    inCompare: false,
    rate: 7,
    href: '/product/apple-iphone-14/',
    src: 'https://cdn01.zoomit.ir/2022/9/iphone-14-front-back.jpg?w=200',
    title: 'گوشی آیفون 14 اپل',
    titleEN: 'Apple iPhone 14',
    price: 44550000
  },
  {
    inCompare: false,
    rate: 7,
    href: '/product/apple-iphone-se-3/',
    src: 'https://cdn01.zoomit.ir/2022/3/apple-iphone-se-2022-midnight-front-back.jpg?w=200',
    title: 'گوشی آیفون SE 2022 اپل',
    titleEN: 'Apple iPhone SE 2022',
    price: 29400000
  },
  {
    inCompare: false,
    rate: 8,
    href: '/product/apple-iphone-11/',
    src: 'https://cdn01.zoomit.ir/2022/2/apple-iphone-11-purple.jpg?w=200',
    title: 'گوشی آیفون 11 اپل',
    titleEN: 'Apple iPhone 11',
    price: 27229000
  },
  {
    inCompare: false,
    rate: 9,
    href: '/product/apple-iphone-12-pro-max/',
    src: 'https://cdn01.zoomit.ir/2022/2/apple-iphone-12-pro-max-pacific-blue.jpg?w=200',
    title: 'گوشی آیفون 12 پرو مکس اپل',
    titleEN: 'Apple iPhone 12 Pro Max',
    price: 48050000
  },
  {
    inCompare: false,
    rate: 9,
    href: '/product/apple-iphone-13-pro-max/',
    src: 'https://cdn01.zoomit.ir/2021/9/iphone-13-pro-silver-front-back.jpg?w=200',
    title: 'گوشی آیفون 13 پرو مکس اپل',
    titleEN: 'Apple iPhone 13 Pro Max',
    price: 64050000
  },
  {
    inCompare: false,
    rate: 8,
    href: '/product/apple-iphone-13/',
    src: 'https://cdn01.zoomit.ir/2021/9/apple-iphone-13-front.jpg?w=200',
    title: 'گوشی آیفون 13 اپل',
    titleEN: 'Apple iPhone 13',
    price: 42000000
  },
  {
    inCompare: false,
    rate: 8,
    href: '/product/apple-iphone-12-pro/',
    src: 'https://cdn01.zoomit.ir/2022/2/apple-iphone-12-pro.jpg?w=200',
    title: 'گوشی آیفون 12 پرو اپل',
    titleEN: 'Apple iPhone 12 Pro',
    price: 35950000
  },
  {
    inCompare: false,
    rate: 9,
    href: '/product/apple-iphone-13-pro/',
    src: 'https://cdn01.zoomit.ir/2021/9/iphone-13-pro-blue-front-back.jpg?w=200',
    title: 'گوشی آیفون 13 پرو اپل',
    titleEN: 'Apple iPhone 13 pro',
    price: 60290000
  },
  {
    inCompare: false,
    rate: 8,
    href: '/product/apple-iphone-13-mini/',
    src: 'https://cdn01.zoomit.ir/2021/9/iphone-13-product-red-front-back.jpg?w=200',
    title: 'گوشی آیفون 13 مینی اپل',
    titleEN: 'Apple iPhone 13 mini',
    price: 50700000
  }
])

const proccessed_products = computed(() => {
  let newArr = products
  if (sort_based.value == '1') newArr.sort((a, b) => b.price - a.price)
  else if (sort_based.value == '2') newArr.sort((a, b) => a.price - b.price)
  else if (sort_based.value == '3') newArr.sort((a, b) => b.price - a.price)
  else if (sort_based.value == '4') newArr.sort((a, b) => b.rate - a.rate)

  return newArr
})

const formatted_price = computed(() => (number) => number.toLocaleString('en-US'))

const setLeftValue = () => {
  const [min, max] = [0, 100]
  myLeft.value = Math.min(myLeft.value, myRight.value - 1)
  const percent = ((myLeft.value - min) / (max - min)) * 100
  percentLeft.value = percent
}

const setRightValue = () => {
  const [min, max] = [0, 100]
  myRight.value = Math.max(myRight.value, myLeft.value + 1)
  const percent = ((100 - myRight.value - min) / (max - min)) * 100
  percentRight.value = percent
}

onMounted(() => {
  product_item_name.value = window.history.state.productItemName
})
onUpdated(() => {
  product_item_name.value = window.history.state.productItemName
})
</script>
<style>
.breadcrump a {
  color: #666;
  margin-left: 14px;
  position: relative;
  font-size: 15px;
  font-weight: 300;
}
.breadcrump a:before {
  display: inline-block;
  width: 0;
  height: 0;
  border: inset 4px;
  content: '';
  border-left-width: 0;
  border-right-style: solid;
  border-color: transparent #ccc transparent transparent;
  position: absolute;
  left: -8px;
  top: 6px;
  border-radius: 3px;
}
.breadcrump a:last-child:before {
  display: none;
}
/* a:hover,
a:focus{
  color: #e51a2d;
  text-decoration: none;
} */
.productsList label {
  font-family: 'Vazir-Thin';
}
.productsList select:focus {
  color: #ff0025;
  outline: none;
}
.checkbox input[type='checkbox'] {
  opacity: 0;
  width: 0;
  margin: 0;
}
.c-side-bar .side-bar__filterSection .side-bar__body .checkbox label:before {
  width: 8px;
  height: 8px;
}
.checkbox label::before {
  content: '';
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  right: 0;
  margin-right: 0;
  border: 1px solid #ccc;
  border-radius: 0;
  background-color: #fff;
  -webkit-transition:
    border 0.15s ease-in-out,
    color 0.15s ease-in-out;
  transition:
    border 0.15s ease-in-out,
    color 0.15s ease-in-out;
  margin-top: 0;
  vertical-align: middle;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.c-side-bar .side-bar__filterSection .side-bar__body .checkbox input:checked ~ label:after {
  right: 2px;
  width: 6px;
  height: 6px;
}
.checkbox input[type='checkbox']:checked ~ label::after {
  content: '';
  width: 6px;
  height: 6px;
  top: 50%;
  position: absolute;
  background: #ff0025;
  right: 2px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.checkbox label::after {
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 2px;
  top: 1px;
  margin-left: 0;
  padding-left: 0;
  padding-top: 0;
  font-size: 11px;
  color: #fff;
}
.c-side-bar .optionsContainer__title {
  -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.125);

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
.productSummery__rate.green {
  background-color: #00d338;
}
.productSummery__rate.yellow {
  background-color: #ffc922;
}
.fa-num {
  font-family: 'Vazir-FD';
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
.checkbox input[type='checkbox']:checked ~ label::after {
  content: '';
  width: 8px;
  height: 8px;
  top: 50%;
  position: absolute;
  background: #ff0025;
  right: 4px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.checkbox label::after {
  display: inline-block;
  position: absolute;
  width: 16px;
  height: 16px;
  right: 2px;
  top: 1px;
  margin-left: 0;
  padding-left: 0;
  padding-top: 0;
  font-size: 11px;
  color: #fff;
}

@media (max-width: 1300px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
}
</style>
