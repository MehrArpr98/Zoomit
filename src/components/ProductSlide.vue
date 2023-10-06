<template>

  <a
    :href="item.href"
    class="slick-slide slick-current slick-active block text-center h-full  pt-8 pb-2.5 border-l norder-gray-400"
    tabindex="-1"
    ><div class="img-container w-56 h-auto mb-8 relative block mx-auto">
      <img class="w-full h-auto mx-auto" :src="item.src" />
    </div>
    <div class="prd-detail">
      <hr class="line-seprator my-2 border-b border-slate-300 w-5/6 mx-auto my-4" />
      <span class="pt-5 text-sm"> {{ item.title }} </span>
    </div></a
  >
</template>
<script setup>
defineProps({
  item: Object
})
</script>
<style></style>
