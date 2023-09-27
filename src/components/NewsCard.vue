<template>

<article
    class="relative overflow-hidden cursor-pointer"
    :class="'ThreeNews_layer_ArticleImageCard' + (index + 1)"
  >
    <a :href="item.href">
      <article
        class="absolute top-0 right-0 w-full h-full flex flex-col items-center z-10 p-4"
        :class="{ 'md:p-8': index === 0 }"
      >
        <div class="title">{{ item.title }}</div>
        <div class="flex flex-wrap justify-between w-full">
          <div class="flex flex-wrap justify-center items-center gap-1">
            <img src="../assets/svgs/clock.svg" alt="clock-img" />
            <span class="ThreeNews_layer_ArticleImageCard_footerRight fa">
              {{ item.readTime }}
            </span>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-1">
            <svg width="12" height="12">
                <use href="../assets/svgs/calendar.svg#svg" id="whitCalendar_icon" />
              </svg>
           <span class="ThreeNews_layer_ArticleImageCard_footerRight fa">
              {{ item.dateRelease }}
            </span>
          </div>
        </div>
      </article>
      <img
        :alt="item.alt"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        class="object-cover duration-500 absolute inset-0 w-full h-full"
        :src="item.src"
    /></a>
  </article>
</template>

<script setup>
 defineProps({
  item: Object,
  index : {
    type: Number,
    default: 1
  },
}) 

</script>

<style>
.ThreeNews_layer_ArticleImageCard1,
.ThreeNews_layer_ArticleImageCard2,
.ThreeNews_layer_ArticleImageCard3 {
  min-width: 300px;
  max-width: 300px;
  height: 200px;
  aspect-ratio: 3 / 2;
}
.ThreeNews_layer_ArticleImageCard1:hover img,
.ThreeNews_layer_ArticleImageCard2:hover img,
.ThreeNews_layer_ArticleImageCard3:hover img {
  transform: scale(1.1);
}

.ThreeNews_layer_ArticleImageCard1 article,
.ThreeNews_layer_ArticleImageCard2 article,
.ThreeNews_layer_ArticleImageCard3 article {
  background-color: rgba(25, 25, 35, 0.5);
}

.ThreeNews_layer_ArticleImageCard1 .title,
.ThreeNews_layer_ArticleImageCard2 .title,
.ThreeNews_layer_ArticleImageCard3 .title {
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  line-height: 1.8;
}
.ThreeNews_layer_ArticleImageCard1 .title {
  font-size: 22px;
}

.ThreeNews_layer_ArticleImageCard_footerRight {
  margin: unset;
  font-size: 12px;
  font-weight: normal;
  color: var(--white);
  font-family: 'Vazir-FD';
}
#whitCalendar_icon{
  fill: var(--white);
}

@media (min-width: 768px) {
  .ThreeNews_layer_ArticleImageCard1 {
    grid-column: span 2 / auto;
    height: auto;
    min-width: 100%;
  }
  .ThreeNews_layer_ArticleImageCard2,
  .ThreeNews_layer_ArticleImageCard3 {
    height: auto;
    min-width: auto;
    max-width: unset;
  }
}
</style>