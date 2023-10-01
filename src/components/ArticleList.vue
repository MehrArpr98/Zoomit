<template>
  <div
    v-for="article in articleList"
    :key="article"
    class="ArticleListShowCase relative w-full overflow-hidden cursor-pointer"
  >
    <a class="cursor-pointer" :href="article.href">
      <img
        :alt="article.alt"
        fetchpriority="high"
        decoding="async"
        data-nimg="fill"
        class="ArticleListShowCase_cover absolute h-full w-full inset-0 object-cover duration-500"
        sizes="100vw"
        :src="article.src"
      />

      <div
        class="ArticleListShowCase_Detail absolute flex h-full w-full top-0 left-0 justify-end px-12 py-8 flex flex-col gap-4"
      >
        <h2 class="ArticleListShowCase_Detail_text">{{ article.text }}</h2>
      </div></a
    >
  </div>
</template>

<script setup>
import ArticlesArray from '../assets/jsons/ArticlesArray.json'

const articleList = ArticlesArray
</script>

<style>
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

.ArticleListShowCase:hover .ArticleListShowCase_cover {
  transform: scale(1.1);
}
</style>
