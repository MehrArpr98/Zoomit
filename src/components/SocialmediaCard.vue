<template>
  <article class="SocialMediaBanners_Root" :class="'SocialMediaBanners_Root' + (index + 1)">
    <a target="_blank" :href="item.href">
      <div class="relative overflow-hidden w-full h-28 py-8 pl-7 pr-4 flex flex-wrap items-center">
        <svg width="32" height="32">
          <!-- <use :href="`../assets/svgs/${item.name}.svg#svg`" id="SocialMediaBanner_icon" /> -->

          <use
            v-if="item.name === 'youtube'"
            href="../assets/svgs/youtube.svg#svg"
            id="SocialMediaBanner_icon"
          />
          <use
            v-else-if="item.name === 'twitter'"
            href="../assets/svgs/twitter.svg#svg"
            id="SocialMediaBanner_icon"
          />
          <use v-else href="../assets/svgs/instagram.svg#svg" id="SocialMediaBanner_icon" />
        </svg>
        <div v-show="index !== 0" class="SocialMediaBanners_Divider mr-4 h-full w-px"></div>
        <div class="flex flex-col flex-wrap m-0 mr-8">
          <span class="title"> {{ item.title }} زومیت </span>
          <span class="desc"> به دنبال کننده ما بپیوندید </span>

          <svg width="70" height="70" class="SocialMediaBanners__ZoomitFade">
            <use href="../assets/svgs/z.svg#svg" />
          </svg>
        </div>

        <button
          v-show="index == 0"
          type="button"
          class="SocialMediaBanners_SeeVideoBtn rounded-2xl h-8 cursor-pointer py-1 px-4 mr-auto"
        >
          <div class="flex flex-row flex-nowrap justify-center items-center gap-2">
            مشاهده ویدئو‌ها
          </div>
        </button>
      </div></a
    >
  </article>
</template>
<script setup>
defineProps({
  item: Object,
  index: {
    type: Number,
    default: 1
  }
})
</script>

<style>
.SocialMediaBanners_Root {
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 var(--elevation);
}
.SocialMediaBanners_Root1 {
  background-image: linear-gradient(110deg, rgb(248, 86, 86), rgb(255, 0, 0));
}

.SocialMediaBanners_Root2 {
  background-image: linear-gradient(110deg, rgb(61, 133, 183), rgb(61, 133, 183));
}

.SocialMediaBanners_Root3 {
  background-image: linear-gradient(
    116deg,
    rgb(61, 133, 183),
    rgb(228, 0, 43) 59%,
    rgb(255, 153, 0) 122%
  );
}

.SocialMediaBanners_Root .title,
.SocialMediaBanners_Root .desc {
  margin: unset;
  font-size: 13px;
  font-weight: bold;
  color: var(--white);
  font-family: 'Vazir-FD', serif;
  line-height: 2;
}

.SocialMediaBanners_SeeVideoBtn {
  font-size: 12px;
  font-weight: normal;
  width: 124px;
  border: solid 1px var(--button--outline--default-border);
  background-color: transparent;
  color: var(--white);
  border-color: var(--white);
}
.SocialMediaBanners_SeeVideoBtn:hover {
  filter: invert(10%);
}
#SocialMediaBanner_icon {
  fill: var(--white);
}
.SocialMediaBanners__ZoomitFade {
  position: absolute;
  top: 21px;
  left: -20px;
  width: 70px;
  height: 70px;
}
.SocialMediaBanners_Divider {
  background-color: var(--black-5);
}

@media (min-width: 768px) {
  .SocialMediaBanners_Root1 {
    grid-column: span 2 / auto;
    height: auto;
    min-width: 100%;
  }
  .SocialMediaBanners_Root2,
  .SocialMediaBanners_Root3 {
    height: auto;
    min-width: auto;
    max-width: unset;
  }
}
</style>
