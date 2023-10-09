<template>
  <main class="">
    <div class="ArticleList_layer">
      <div class="flex flex-col justify-end gap-12 -mt-16">
        <div class="">
          <div class="ArticleListShow relative w-full grid">
            <article-list />
          </div>
        </div>
      </div>
    </div>

    <div class="Products_layer">
      <div class="Products_layer_container md:px-12 md:pl-0 py-8 w-full mx-auto">
        <div class="flex flex-wrap justify-between gap-0 md:gap-4">
          <div class="Products_layer_container_col1 shrink-0 grow-0 basis-full max-w-full">
            <div class="flex h-full flex-col justify-around gap-4">
              <div class="">
                <div class="pr-4">
                  <div class="main_title relative">
                    <span font-size="1.6" class="text-base font-bold">با چشم باز خرید کنید</span>
                  </div>
                </div>
              </div>
              <span class="mr-0 md:mr-4 Products_layer_Desc"
                >زومیت شما را برای انتخاب بهتر و خرید ارزان‌تر راهنمایی می‌کند</span
              >
              <router-link
                class="Products_layer_link hoverInvert py-2 px-4 flex justify-center items-center cursor-pointer border-0 w-fit h-fit text-xs font-black"
                :to="{ name: 'product' }"
              >
                <div class="flex flex-row justify-center items-center gap-4">
                  ورود به بخش محصولات
                  <img src="../assets/svgs/arrow-left.svg" alt="arrow-left-img" /></div
              ></router-link>
            </div>
          </div>
          <div class="Products_layer_container_col2 shrink-0 grow-0 basis-full max-w-full">
            <div class="relative">
              <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
                <swiper
                  filter_item=""
                  :perView="9"
                  :array="ProductsTypesArray"
                  type="productType"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Suggest_layer">
      <div class="Suggest_layer_container mx-auto w-full mt-12">
        <div class="flex flex-col justify-end gap-12">
          <advertising-two-col
            :ads="AdsArray[0]"
            :type="'rectangle'"
            class="md:px-12 w-full mx-auto"
          />

          <div class="w-full">
            <div class="flex flex-wrap justify-between items-center md:px-12 pr-16 md:pr-16">
              <div class="main_title relative">
                <span font-size="1.6" font-weight="900">پیشنهاد سردبیر</span>
              </div>
            </div>

            <filterable-swiper
              filter_item="text"
              :perView="4"
              :array="SuggestsArray"
              type="suggest"
              :buttons="SuggestButtonsArray"
            />
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<script setup>
import ArticleList from '../components/ArticleList.vue'
import Swiper from '../components/Swiper.vue'
import AdvertisingTwoCol from '../components/AdvertisingTwoCol.vue'
import FilterableSwiper from '../components/FilterableSwiper.vue'
import ProductsTypesArray from '../assets/jsons/ProductsTypesArray.json'
import AdsArray from '../assets/jsons/AdsArray.json'
import SuggestButtonsArray from '../assets/jsons/SuggestButtonsArray.json'
import SuggestsArray from '../assets/jsons/SuggestsArray.json'
</script>

<style>
.ArticleListShow {
  grid-template-columns: 1.5fr 1fr 1fr;
}

.Products_layer {
  background-color: var(--background-2);
}

.Products_layer_Desc {
  margin: unset;
  font-size: 14px;
  font-weight: normal;
  color: var(--grey-1);
  line-height: 1.85;
}

.Products_layer_link {
  border-radius: 16px;
  background-color: var(--button--contained--default-background);
  color: var(--button--contained--default-text);
}

.LastContent_layer_title {
  margin: unset;
  font-size: 24px;
  font-weight: 900;
  color: var(--text);
  line-height: 2;
  font-family: 'Sahel-FD';
}

@media (min-width: 576px) {
  .Products_layer_container,
  .Suggest_layer_container,
  .ComplexTwoCol_layer_container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .Products_layer_container,
  .ComplexTwoCol_layer_container {
    max-width: 100%;
  }
  .Products_layer_container_col1 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }
  .Products_layer_container_col2 {
    flex: 0 0 58.3333%;
    max-width: 58.3333%;
  }
  .Suggest_layer_container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .Products_layer_container_col1 {
    flex: 0 0 calc(25% - 48px);
    max-width: calc(25% - 48px);
  }
  .Products_layer_container_col2 {
    flex: 0 0 calc(70.8333% + 48px);
    max-width: calc(70.8333% + 48px);
  }
}
@media (min-width: 1200px) {
  .ComplexTwoCol_layer_container {
    margin-top: 56px;
    background-image: linear-gradient(90deg, var(--background-2) 50%, #ffffff00 50%);
  }
  .ComplexTwoCol_layer_content {
    flex-direction: row;
  }
  .ComplexTwoCol_layer_content_col_right,
  .LastContent_layer {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 0px;
  }
  .LastContent_layer {
    padding-right: 44px;
  }
  .ComplexTwoCol_layer_content_col_right {
    padding-left: 44px;
  }
}
</style>
