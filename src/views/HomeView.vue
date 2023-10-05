<template>
  <main class="mb-16">
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
              ><a
                variant="contained"
                colorscheme="default"
                target="_blank"
                class="Products_layer_link hoverInvert py-2 px-4 flex justify-center items-center cursor-pointer border-0 w-fit h-fit text-xs font-black"
                href="/product/"
              >
                <div class="flex flex-row justify-center items-center gap-4">
                  ورود به بخش محصولات
                  <img src="../assets/svgs/arrow-left.svg" alt="arrow-left-img" /></div
              ></a>
            </div>
          </div>
          <div class="Products_layer_container_col2 shrink-0 grow-0 basis-full max-w-full">
            <div class="relative">
              <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
                <swiper filter_item="" :perView="9" :array="ProductsArray" type="product" />
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

    <div class="ComplexTwoCol_layer">
      <div class="ComplexTwoCol_layer_container mt-4 md:mt-6">
        <div class="mx-auto w-full md:px-12">
          <div class="ComplexTwoCol_layer_content flex flex-col-reverse">
            <!-- ComplexTwoCol_layer_content col right  -->
            <div class="ComplexTwoCol_layer_content_col_right mt-8 pl-0 basis-0 grow max-w-full">
              <div class="sticky top-20">
                <div class="flex flex-col gap-12">
                  <div class="flex flex-col flex-nowrap justify-end gap-12">
                    <advertising-two-col :ads="AdsArray[1]" :type="'square'" />

                    <div class="MostViews_layer mb-4">
                      <div class="mb-8 pr-4">
                        <div class="main_title relative">
                          <span font-size="1.6" font-weight="900">پربازدیدترین مطالب</span>
                        </div>
                      </div>

                      <three-card :cards="MostViewsCardsArray" :type="'news'" />
                    </div>

                    <advertising-two-col :ads="AdsArray[2]" :type="'square'" />

                    <div class="Checkeds_layer mb-4">
                      <div class="mb-8 pr-4">
                        <div class="main_title relative">
                          <span font-size="1.6" font-weight="900"> بررسی‌ها</span>
                        </div>
                      </div>

                      <three-card :cards="CheckedsCardsArray" :type="'news'" />
                    </div>
                  </div>
                  <three-card :cards="SocialmediaCardsArray" :type="'socialmedia'" />
                </div>
              </div>
            </div>
            <!-- ComplexTwoCol_layer_content col left  -->
            <div class="LastContent_layer shrink-0 grow-0 basis-1/2 max-w-1/2 mt-8 pr-0">
              <div class="w-auto md:py-12 md:px-0">
                <div class="flex flex-col flex-nowrap justify-end gap-12">
                  <div class="">
                    <div class="flex flex-col flex-wrap gap-1">
                      <h2 font-weight="900" class="LastContent_layer_title">آخرین مطالب</h2>
                    </div>

                    <last-content-list />

                    <a
                      variant="text"
                      colorscheme="default"
                      class="view_more hoverInvert flex justify-start items-center font-bold text-xs w-auto h-auto py-1 px-4 pr-0 mt-4 border-0 cursor-pointer"
                      href="/archive/?sort=Newest&amp;skip=20"
                      ><div class="flex flex-row flex-nowrap gap-2 justify-center items-center">
                        مشاهده مطالب بیشتر
                        <img src="../assets/svgs/arrow-left.svg" alt="arrow-left-img" /></div
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ZoomitSuggest_layer">
      <div class="Suggest_layer_container mx-auto w-full mt-12">
        <div class="flex flex-col justify-end gap-12">
          <div class="w-full">
            <div class="flex flex-wrap justify-between items-center md:px-12 pr-16 md:pr-16">
              <div class="main_title relative">
                <span font-size="1.6" font-weight="900">پیشنهاد زومیت</span>
              </div>
              <a
                variant="text"
                colorscheme="default"
                class="view_more hoverInvert flex justify-start items-center font-bold text-xs w-auto h-auto py-1 px-4 pr-0 mt-4 border-0 cursor-pointer"
                href="/archive/?sort=MostVisited&readingTimeRange=All&publishPeriod=LastMonth&skip=8"
                ><div class="flex flex-row flex-nowrap gap-2 justify-center items-center">
                  مشاهده همه
                  <img src="../assets/svgs/arrow-left.svg" alt="arrow-left-img" />
                </div>
              </a>
            </div>

            <filterable-swiper
              filter_item="mobile"
              :perView="4"
              :array="ZoomitSuggestsArray"
              type="zoomitSuggest"
              :buttons="ZoomitSuggestButtonsArray"
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
import ThreeCard from '../components/ThreeCard.vue'
import LastContentList from '../components/LastContentList.vue'

import ProductsArray from '../assets/jsons/ProductsArray.json'
import AdsArray from '../assets/jsons/AdsArray.json'
import SuggestButtonsArray from '../assets/jsons/SuggestButtonsArray.json'
import SuggestsArray from '../assets/jsons/SuggestsArray.json'
import MostViewsCardsArray from '../assets/jsons/MostViewsCardsArray.json'
import CheckedsCardsArray from '../assets/jsons/CheckedsCardsArray.json'
import SocialmediaCardsArray from '../assets/jsons/SocialmediaCardsArray.json'
import ZoomitSuggestButtonsArray from '../assets/jsons/ZoomitSuggestButtonsArray.json'
import ZoomitSuggestsArray from '../assets/jsons/ZoomitSuggestsArray.json'
</script>

<style scoped>
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
