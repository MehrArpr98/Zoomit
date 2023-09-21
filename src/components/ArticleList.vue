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
const articleList = [
  {
    href: '/tech-iran/408753-youtube-filtering-should-be-removed/',
    alt: 'youtube',
    src: 'https://api2.zoomit.ir/media/2021-1-youtube-ios-app-638c667fa9353bba739b3af6?w=1920&amp;q=75',
    text: 'فیلترینگ یوتیوب و فرصت‌هایی که از دست می‌روند/ چرا رفع فیلتر یوتیوب ضروری است؟'
  },
  {
    href: '/buying-guide/373335-best-wireless-headphones-iran/',
    alt: "بهترین هدفون بی سیم ورزشی برای مکالمه و برای موسیقی ",
    src: 'https://api2.zoomit.ir/media/headphones-643ad88ed00bf97407d1a486?w=1920&amp;q=75',
    text: ' بهترین هدفون های بی سیم در بازار ایران [شهریور ۱۴۰۲]'
  },
  {
    href: '/hardware/340984-usb-type-c-everything-you-need-to-know/',
    alt: "درگاه USB-C ناتینگ فون ۲ ",
    src: 'https://api2.zoomit.ir/media/nothing-phone-2-type-c-port-64eb3ff95e5e0545e316059f?w=1920&amp;q=75',
    text: ' همه‌چیز درباره USB-C، فراگیرترین درگاه شارژ در دنیا'
  }
]
</script>
