<template>
  <article
    v-for="(card, index) in props.cards"
    :key="card"
    class="relative overflow-hidden cursor-pointer"
    :class="'ThreeNews_layer_ArticleImageCard' + (index + 1)"
  >
    <a :href="card.href">
      <article
        class="absolute top-0 right-0 w-full h-full flex flex-col items-center z-10 p-4"
        :class="{ 'md:p-8': index === 0 }"
      >
        <div class="title">{{ card.title }}</div>
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
            ><span class="ThreeNews_layer_ArticleImageCard_footerRight fa">
              {{ card.readTime }}
            </span>
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
            ><span class="ThreeNews_layer_ArticleImageCard_footerRight fa">
              {{ card.dateRelease }}
            </span>
          </div>
        </div>
      </article>
      <img
        :alt="card.alt"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        class="object-cover duration-500 absolute inset-0 w-full h-full"
        :src="card.src"
    /></a>
  </article>
</template>

<script setup>
const props = defineProps({
  cards: Array
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
