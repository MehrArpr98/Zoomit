<template>
  <main class="-mt-16">
    <div class="ArticleList_layer">
      <div class="relative w-full pb-12 pt-28">
        <div class="absolute inset-0 w-full h-full -z-10">
          <img
            alt="category-cover"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
            src="https://www.zoomit.ir/_next/static/media/grouping-default-cover.f1b542fa.jpg?w=1920&q=75"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div class="CategoryHeader__StyledContainer flex flex-col px-12 max-w-full mx-auto gap-5">
          <div class="flex flex-col flex-wrap gap-3">
            <div class="flex flex-wrap items-center">
              <h1 class="CategoryHeader__TitleText">اخبار و مقالات جدیدترین تلویزیون‌ها</h1>
            </div>
            <div class="flex flex-wrap justify-between mb-1">
              <div class="shrink-0 grow-0 basis-3/4 col__Col-sc-1qirq9q-0 dTzNHo">
                <div class="GroupingHeaderDescription flex flex-col flex-wrap gap-6">
                  <p class="text-justify">
                    اخبار و مقالات مربوط به تلویزیون‌های LCD و OLED و MiniLED از برند‌های مطرحی
                    همچون ال‌جی، سامسونگ، سونی به همراه جدید‌ترین تکنولوژی‌های آن‌ها را در این صفحه
                    بخوانید.
                    <a target="_blank" href="https://www.zoomit.ir/product/list/tv/"
                      >قیمت تلویزیون</a
                    >
                    و مشخصات فنی جدید‌ترین آن‌ها را در بخش محصولات زومیت پیدا کنید.
                  </p>
                </div>
              </div>
              <div class="shrink-0 grow-0 basis-1/4">
                <div class="flex flex-wrap justify-end items-center gap-6 mb-8">
                  <span class="fa-num followersContainer">9 دنبال کننده</span>
                  <button
                    type="button"
                    disabled=""
                    class="FollowButton border-0 py-1 px-4 h-8 w-40 text-sm rounded-full"
                  >
                    <div
                      class="flex__Flex-le1v16-0 flex flex-row justify-center items-center gap-2"
                    >
                      <svg width="12" height="12">
                        <use href="../assets/svgs/follow.svg#svg" />
                      </svg>
                      دنبال کردن
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="ArticleListShowCase relative grid w-full gap-x-6">
              <div rowspan="12" class="ArticleListShowCase__GridItem1">
                <news-card :item="ArticlesNewsCards[0]" :index="3" />
              </div>
              <div rowspan="6" class="ArticleListShowCase__GridItem2">
                <news-card :item="ArticlesNewsCards[1]" :index="3" />
              </div>
              <div rowspan="6" class="ArticleListShowCase__GridItem3and4 mt-6 gap-x-6">
                <div rowspan="12" class="ArticleListShowCase__GridItem3">
                  <news-card :item="ArticlesNewsCards[2]" :index="3" />
                </div>
                <div rowspan="12" class="ArticleListShowCase__GridItem4">
                  <news-card :item="ArticlesNewsCards[3]" :index="3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-full mx-auto w-full mt-12">
      <div class="flex flex-col justify-end gap-12">
        <advertising-two-col
          :ads="AdsArray[0]"
          :type="'rectangle'"
          class="md:px-12 w-full mx-auto"
        />
      </div>
    </div>
  </main>
</template>
<script setup>
import NewsCard from '../components/NewsCard.vue'
import AdvertisingTwoCol from '../components/AdvertisingTwoCol.vue'
import ArticlesNewsCards from '../assets/jsons/ArticlesNewsCards.json'
import AdsArray from '../assets/jsons/AdsArray.json'
</script>
<style scoped>
.CategoryHeader__StyledContainer {
  width: 70%;
}
.CategoryHeader__TitleText {
  margin: unset;
  font-size: 24px;
  font-weight: bold;
  color: var(--white);
  font-family: 'Sahel-FD', serif;
}
.GroupingHeaderDescription {
  max-height: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease-in-out 0s;
  z-index: 1;
}
.GroupingHeaderDescription p,
.followersContainer {
  line-height: 2;
  font-size: 14px;
  text-align: justify;
  color: var(--white);
}
.GroupingHeaderDescription a {
  color: var(--text-hover);
  text-decoration: none;
}
.FollowButton {
  border-radius: 16px;
  font-size: 12px;
  background-color: var(--button--contained--default-background);
  color: var(--white);
}
.FollowButton:disabled {
  background-color: var(--button--contained--background-disable);
}
.FollowButton:disabled * {
  color: var(--button--contained--text-disable);
  fill: var(--button--contained--text-disable);
}
.ArticleListShowCase {
  aspect-ratio: 1320 / 536;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
.ArticleListShowCase__GridItem1 {
  grid-area: span 12 / span 5 / auto / auto;
}
.ArticleListShowCase__GridItem2 {
  grid-area: span 6 / span 7 / auto / auto;
}
.ArticleListShowCase__GridItem3and4 {
  grid-area: span 6 / span 7 / auto / auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.ArticleListShowCase__GridItem3,
.ArticleListShowCase__GridItem4 {
  grid-area: span 12 / span 6 / auto / auto;
}
</style>
