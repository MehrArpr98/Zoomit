<template>
  <main>
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
          <div size="12" class="Products_layer_container_col1">
            <div class="flex h-full flex-col justify-around gap-4">
              <div class="">
                <div class="pr-4">
                  <div class="Products_layer_title relative">
                    <span font-size="1.6" class="text-base font-bold">با چشم باز خرید کنید</span>
                  </div>
                </div>
              </div>

              <span class="mr-0 md:mr-4 Products_layer_Desc"
                >زومیت شما را برای انتخاب بهتر و خرید ارزان‌تر راهنمایی می‌کند</span
              ><router-link
                variant="contained"
                colorscheme="default"
                target="_blank"
                class="Products_layer_link py-2 px-4 flex justify-center items-center cursor-pointer border-0 w-fit h-fit text-xs font-black"
                to="/product/"
              >
                <div class="flex flex-row justify-center items-center gap-4">
                  ورود به بخش محصولات<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="var(--primary-1)"
                  >
                    <path
                      d="M9.3 1.3L7.9 2.7 12.2 7 0 7 0 9 12.2 9 7.9 13.3 9.3 14.7 16 8z"
                      transform="translate(-844 -1003) translate(844 1003) rotate(-180 8 8)"
                    ></path>
                  </svg></div
              ></router-link>
            </div>
          </div>
          <div size="12" class="Products_layer_container_col2">
            <div class="relative">
              <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
                <products-swiper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="News_layer">
      <div class="News_layer_container mx-auto w-full mt-12">
        <div class="flex flex-col justify-end gap-12">
          <div class="w-full">
            <div class="flex flex-wrap justify-between items-center md:px-12 pr-16 md:pr-16">
              <div class="News_layer_title relative">
                <h2 font-size="1.6" font-weight="900">پیشنهاد سردبیر</h2>
              </div>
            </div>
            <div class="w-full mt-4 md:mt-8 md:px-12">
              <div class="relative">
                <div class="relative">
                  <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
                    <div class="flex">
                      <label
                        v-for="myButton in News_layer_buttons"
                        :key="myButton"
                        class="NewsButton text-xs font-bold py-2 px-4 border-0 cursor-pointer rounded-2xl relative w-fit h-8 flex justify-center items-center ml-5"
                        :class="{ active: suggest_filter === myButton.val }"
                      >
                        {{ myButton.text }}
                        <input
                          name="suggest_filter"
                          v-model="suggest_filter"
                          type="radio"
                          class="absolute top-0 left-0 w-0 h-0 -z-10"
                          :value="myButton.val"
                      /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full mt-8 relative">
              <div class="relative">
                <div class="mx-auto relative overflow-hidden p-0 z-10 list-none touch-pan-y">
                  <news-swiper :suggest_filter="suggest_filter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="MostViews_layer">
      <div class="MostViews_layer_container mt-4 md:mt-6">
        <div class="mx-auto w-full md:px-12">
          <div class="MostViews_layer_content flex flex-column-reverse">
            <div class="MostViews_layer_content_part1 mt-8 pl-0">
              <div class="sticky top-20">
                <div class="flex flex-col gap-12">
                  <div class="flex flex-col flex-nowrap justify-end gap-12">
                    <div class="mb-4">
                      <div class="mb-8 pr-4">
                        <div class="MostViews_layer_title relative">
                          <span font-size="1.6" font-weight="900">پربازدیدترین مطالب</span>
                        </div>
                      </div>

                      <div
                        class="MostViews_layer_content_part1_imgs flex gap-4 overflow-x-auto w-full py-0 px-4"
                      >
                        <article
                          class="MostViews_layer_ArticleImageCard1 relative overflow-hidden cursor-pointer"
                        >
                          <a href="/buying-guide/373335-best-wireless-headphones-iran/">
                            <article
                              class="absolute top-0 right-0 w-full h-full flex flex-col items-center z-10 p-4 md:p-8"
                            >
                              <div class="title">
                                بهترین هدفون های بی سیم در بازار ایران [شهریور ۱۴۰۲]
                              </div>
                              <div class="flex flex-wrap justify-between w-full">
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="12"
                                    height="12"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm1 2v3h3v2H7V4h2z"
                                      transform="translate(-844 -1035) translate(844 1035)"
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >مطالعه '16</span
                                  >
                                </div>
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M 15 2 L 13 2 L 13 0 L 10 0 L 10 2 L 6 2 L 6 0 L 3 0 L 3 2 L 1 2 C 0.449219 2 0 2.449219 0 3 L 0 15 C 0 15.550781 0.449219 16 1 16 L 15 16 C 15.550781 16 16 15.550781 16 15 L 16 3 C 16 2.449219 15.550781 2 15 2 Z M 14 14 L 2 14 L 2 5 L 14 5 Z M 14 14 "
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >2 روز پیش</span
                                  >
                                </div>
                              </div>
                            </article>
                            <img
                              alt="بهترین هدفون بی سیم ورزشی برای مکالمه و برای موسیقی "
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              class="object-cover duration-500 absolute inset-0 w-full h-full"
                              src="https://api2.zoomit.ir/media/headphones-643ad88ed00bf97407d1a486?w=750&amp;q=75"
                          /></a>
                        </article>
                        <article
                          class="MostViews_layer_ArticleImageCard2 relative overflow-hidden cursor-pointer"
                        >
                          <a href="/buying-guide/348015-budget-laptop-buying-guide/"
                            ><article
                              class="absolute top-0 right-0 w-full h-full flex flex-col items-center z-10 p-4"
                            >
                              <div class="title">
                                بهترین لپ تاپ های اقتصادی و دانشجویی [شهریور ۱۴۰۲]
                              </div>
                              <div class="flex flex-wrap justify-between w-full">
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="12"
                                    height="12"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm1 2v3h3v2H7V4h2z"
                                      transform="translate(-844 -1035) translate(844 1035)"
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >مطالعه '12</span
                                  >
                                </div>
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M 15 2 L 13 2 L 13 0 L 10 0 L 10 2 L 6 2 L 6 0 L 3 0 L 3 2 L 1 2 C 0.449219 2 0 2.449219 0 3 L 0 15 C 0 15.550781 0.449219 16 1 16 L 15 16 C 15.550781 16 16 15.550781 16 15 L 16 3 C 16 2.449219 15.550781 2 15 2 Z M 14 14 L 2 14 L 2 5 L 14 5 Z M 14 14 "
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >6 روز پیش</span
                                  >
                                </div>
                              </div>
                            </article>
                            <img
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              class="object-cover duration-500 absolute inset-0 w-full h-full"
                              src="https://api2.zoomit.ir/media/2021-6-best-budget-laptop-buying-guide-main-638c61e21c5e3026507e3b23?w=750&amp;q=75"
                          /></a>
                        </article>
                        <article
                          class="MostViews_layer_ArticleImageCard3 relative overflow-hidden cursor-pointer"
                        >
                          <a href="/exhibition/408957-apple-wonderlust-coverage/"
                            ><article
                              class="absolute top-0 right-0 w-full h-full flex flex-col items-center z-10 p-4"
                            >
                              <div class="title">
                                پوشش زنده زومیت از رویداد معرفی آیفون ۱۵ [نسخه آفلاین + مراسم
                                قرعه‌کشی]
                              </div>
                              <div class="flex flex-wrap justify-between w-full">
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    width="12"
                                    height="12"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm1 2v3h3v2H7V4h2z"
                                      transform="translate(-844 -1035) translate(844 1035)"
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >مطالعه '2</span
                                  >
                                </div>
                                <div class="flex flex-wrap justify-center items-center gap-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    fill="var(--white)"
                                  >
                                    <path
                                      d="M 15 2 L 13 2 L 13 0 L 10 0 L 10 2 L 6 2 L 6 0 L 3 0 L 3 2 L 1 2 C 0.449219 2 0 2.449219 0 3 L 0 15 C 0 15.550781 0.449219 16 1 16 L 15 16 C 15.550781 16 16 15.550781 16 15 L 16 3 C 16 2.449219 15.550781 2 15 2 Z M 14 14 L 2 14 L 2 5 L 14 5 Z M 14 14 "
                                    ></path></svg
                                  ><span class="MostViews_layer_ArticleImageCard_footerRight fa"
                                    >7 روز پیش</span
                                  >
                                </div>
                              </div>
                            </article>
                            <img
                              alt="پوشش رویداد wonderlust اپل با زومیت"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              class="object-cover duration-500 absolute inset-0 w-full h-full"
                              src="https://api2.zoomit.ir/media/wonderlust-event-64fd6063c52f30497f36d79c?w=750&amp;q=75"
                          /></a>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="MostViews_layer_content_part2 mt-8 pr-0">
              <div class="w-auto md:py-12 md:px-0">
                <div class="flex flex-col flex-nowrap justify-end gap-12">
                  <div class="">
                    <div class="flex flex-col flex-wrap gap-1">
                      <h2 font-weight="900" class="title">آخرین مطالب</h2>
                    </div>
                    <div class="my-6 relative">
                      <div class="relative">
                        <div class="flex">
                          <label
                            v-for="myButton in MostViews_layer_buttons"
                            :key="myButton"
                            class="NewsButton text-xs font-bold py-2 px-4 border-0 cursor-pointer rounded-2xl relative w-fit h-8 flex justify-center items-center ml-5"
                            :class="{ active: news_filter === myButton.val }"
                          >
                            {{ myButton.text }}
                            <input
                              name="news_filter"
                              v-model="news_filter"
                              type="radio"
                              class="absolute top-0 left-0 w-0 h-0 -z-10"
                              :value="myButton.val"
                          /></label>
                        </div>
                      </div>
                    </div>

                    <news-list :news_filter="news_filter" />

                    <a
                      variant="text"
                      colorscheme="default"
                      class="view_more flex justify-start items-center font-bold text-xs w-auto h-auto py-1 px-4 pr-0 mt-4 border-0 cursor-pointer"
                      href="/archive/?sort=Newest&amp;skip=20"
                      ><div class="flex flex-row flex-nowrap gap-2 justify-center items-center">
                        مشاهده مطالب بیشتر<svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="12"
                          height="12"
                          fill="var(--primary-1)"
                        >
                          <path
                            d="M9.3 1.3L7.9 2.7 12.2 7 0 7 0 9 12.2 9 7.9 13.3 9.3 14.7 16 8z"
                            transform="translate(-844 -1003) translate(844 1003) rotate(-180 8 8)"
                          ></path>
                        </svg></div
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductsSwiper from '../components/ProductsSwiper.vue'
import NewsSwiper from '../components/NewsSwiper.vue'
import ArticleList from '../components/ArticleList.vue'
import NewsList from '../components/NewsList.vue'
import { ref } from 'vue'

const suggest_filter = ref('text')
const news_filter = ref('newest')
const News_layer_buttons = ref([
  {
    val: 'text',
    text: 'مطلب'
  },
  {
    val: 'video',
    text: 'ویدیو'
  }
])
const MostViews_layer_buttons = ref([
  {
    val: 'newest',
    text: 'جدیدترین مطالب'
  },
  {
    val: 'science',
    text: 'علمی 🚀'
  },
  {
    val: 'iran',
    text: 'ایران 🔥'
  },
  {
    val: 'most_conv',
    text: 'پربحث‌ترین‌'
  }
])
</script>

<style>
.ArticleListShow {
  grid-template-columns: 1.5fr 1fr 1fr;
}
.ArticleListShowCase:first-child {
  aspect-ratio: 3 / 2;
}
.ArticleListShowCase_Detail {
  background-color: rgba(25, 25, 35, 0.5);
}
.ArticleListShowCase_Detail_text {
  margin: unset;
  font-size: 22px;
  font-weight: bold;
  color: var(--white);
  line-height: 1.8;
}

.ArticleListShowCase:hover .ArticleListShowCase_cover,
.MostViews_layer_ArticleImageCard1:hover img,
.MostViews_layer_ArticleImageCard2:hover img,
.MostViews_layer_ArticleImageCard3:hover img {
  transform: scale(1.1);
}

.Products_layer {
  background-color: var(--background-2);
}

.Products_layer_container_col1 {
  -webkit-box-flex: 1;
  flex: 0 0 100%;
  max-width: 100%;
}

.Products_layer_container_col2 {
  -webkit-box-flex: 1;
  flex: 0 0 100%;
  max-width: 100%;
}

.Products_layer_title::before,
.News_layer_title::before,
.MostViews_layer_title::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0px;
  right: -16px;
  background-color: var(--primary-1);
}

.Products_layer_title span,
.News_layer_title h2,
.MostViews_layer_title span {
  margin: unset;
  font-size: 16px;
  font-weight: bold;
  color: var(--text);
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
.Products_layer_link:hover,
.NewsButton:hover,
.MostViews_layer_content_part2 .view_more:hover {
  filter: invert(10%);
}

.NewsButton {
  border: solid 1px var(--button--outline--default-border);
  background-color: transparent;
  color: var(--button--outline--default-text);
}
.NewsButton.active {
  background-color: var(--button--contained--default-background);
  color: var(--button--contained--default-text);
}

.MostViews_layer_content_part1 {
  flex-basis: 0px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
}
.MostViews_layer_content_part2 {
  -webkit-box-flex: 1;
  flex: 0 0 100%;
  max-width: 100%;
}
.MostViews_layer_ArticleImageCard1,
.MostViews_layer_ArticleImageCard2,
.MostViews_layer_ArticleImageCard3 {
  min-width: 300px;
  max-width: 300px;
  height: 200px;
  aspect-ratio: 3 / 2;
}

.MostViews_layer_ArticleImageCard1 article,
.MostViews_layer_ArticleImageCard2 article,
.MostViews_layer_ArticleImageCard3 article {
  background-color: rgba(25, 25, 35, 0.5);
}

.MostViews_layer_ArticleImageCard1 .title,
.MostViews_layer_ArticleImageCard2 .title,
.MostViews_layer_ArticleImageCard3 .title {
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  line-height: 1.8;
}
.MostViews_layer_ArticleImageCard1 .title {
  font-size: 22px;
}

.MostViews_layer_ArticleImageCard_footerRight {
  margin: unset;
  font-size: 12px;
  font-weight: normal;
  color: var(--white);
  font-family: 'Vazir-FD';
}

.MostViews_layer_content_part2 .title {
  margin: unset;
  font-size: 24px;
  font-weight: 900;
  color: var(--text);
  line-height: 2;
  font-family: 'Sahel-FD';
}
.MostViews_layer_content_part2_item_img_container {
  width: 140px;
  height: 140px;
}
.MostViews_layer_content_part2_item_img_container img {
  box-shadow: rgba(25, 25, 35, 0.15) 0px 1px 3px 0px;
}

.MostViews_layer_content_part2_item_text {
  flex: 1 1 0%;
}
.MostViews_layer_content_part2_item_text span {
  margin: unset;
  font-size: 14px;
  font-weight: 900;
  color: var(--text);
  font-family: 'Vazir-FD', serif;
  line-height: 28px;
  display: block;
}
.MostViews_layer_content_part2_item_text p {
  margin-top: unset;
  margin-right: unset;
  margin-left: unset;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-1);
  font-family: 'Vazir-FD', serif;
  line-height: 2;
  margin-bottom: 7px;
}
.MostViews_layer_content_part2 span.fa {
  margin: unset;
  font-size: 12px;
  font-weight: normal;
  color: var(--grey-1);
  font-family: 'Vazir-FD', serif;
}
.MostViews_layer_content_part2_item_devider {
  background-color: var(--black-5);
}
.MostViews_layer_content_part2 .view_more {
  color: var(--button--text--default-text);
}

@media (min-width: 576px) {
  .Products_layer_container,
  .News_layer_container,
  .MostViews_layer_container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .Products_layer_container,
  .MostViews_layer_container {
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
  .News_layer_container {
    max-width: 100%;
  }
  .MostViews_layer_content_part1_imgs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: initial;
    padding: 0px;
  }
  .MostViews_layer_ArticleImageCard1 {
    grid-column: span 2 / auto;
    height: auto;
    min-width: 100%;
  }
  .MostViews_layer_ArticleImageCard2,
  .MostViews_layer_ArticleImageCard3 {
    height: auto;
    min-width: auto;
    max-width: unset;
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
  .MostViews_layer_container {
    margin-top: 56px;
    background-image: linear-gradient(90deg, var(--background-2) 50%, #ffffff00 50%);
  }
  .MostViews_layer_content {
    flex-direction: row;
  }
  .MostViews_layer_content_part1,
  .MostViews_layer_content_part2 {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 0px;
  }
  .MostViews_layer_content_part2 {
    padding-right: 44px;
  }
  .MostViews_layer_content_part1 {
    padding-left: 44px;
  }
}
</style>
