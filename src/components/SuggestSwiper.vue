<template>
  <swiper-container
    ref="SuggestSwiperRef"
    init="false"
    class="swiper-wrapper"
    slides-per-view="4"
    speed="500"
    css-mode="true"
    navigation="true"
  >
    <swiper-slide class="swiper-slide suggest-swiper-slide" v-for="myNew in processed_suggestList" :key="myNew">
      <div class="suggestCarousel_Wrapper mb-2 relative">
        <router-link :to="myNew.link"
          ><div class="suggestCarousel_ImageWrapper w-full relative">
            <img
              :alt="myNew.alt"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="object-cover rounded-t absolute w-full h-full inset-0"
              :src="myNew.src"
            /></div
        ></router-link>

        <div class="p-6 pb-4 flex flex-col justify-between gap-4 w-full">
          <div class="flex flex-nowrap gap-2">
            <a class="suggestCarousel_Textlink" :href="myNew.link"
              ><div class="suggestCarousel_Text">
                {{ myNew.text }}
              </div></a
            >
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-row justify-center items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="var(--grey-1)"
                  stroke-width="1.7"
                  fill="#9696a0"
                >
                  <path
                    d="M8 .5c2.078 0 3.968.73 5.335 1.926C14.667 3.592 15.5 5.202 15.5 7c0 1.736-.812 3.267-2 4.389v3.853l-4.403-1.887c-.196.121-.481.142-.787.145H8c-2.078 0-3.968-.73-5.335-1.926C1.333 10.408.5 8.798.5 7s.833-3.408 2.165-4.574C4.032 1.23 5.922.5 8 .5z"
                    fill="none"
                    fill-rule="evenodd"
                    fill-opacity="0"
                  ></path></svg
                ><span class="suggestCarousel_Num text-xs font-normal">{{ myNew.comments }}</span>
              </div>
              <div class="flex flex-row justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  version="1.1"
                  fill="var(--grey-1)"
                >
                  <path
                    d="M 15 2 L 13 2 L 13 0 L 10 0 L 10 2 L 6 2 L 6 0 L 3 0 L 3 2 L 1 2 C 0.449219 2 0 2.449219 0 3 L 0 15 C 0 15.550781 0.449219 16 1 16 L 15 16 C 15.550781 16 16 15.550781 16 15 L 16 3 C 16 2.449219 15.550781 2 15 2 Z M 14 14 L 2 14 L 2 5 L 14 5 Z M 14 14 "
                  ></path></svg
                ><span class="suggestCarousel_Num text-xs font-normal">{{ myNew.hour }} ساعت پیش</span>
              </div>
            </div>
            <div class="">
              <div class="popover__PopoverWrapper-sc-1p9qk2q-0 hYvurN">
                <button
                  type="button"
                  class="cursor-pointer p-0 border-0 opacity-100 font-bold text-xs keUJqZ"
                >


                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="var(--grey-3)"
                  >
                    <g fill-rule="evenodd">
                      <g>
                        <path
                          d="M8 6c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zM2 6c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm12 0c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
                          transform="translate(-1356.000000, -1286.000000) translate(1356.000000, 1286.000000)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="popover__PopoverWrapper-sc-1p9qk2q-0 hYvurN"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>
<script setup>
import { getCurrentInstance, onMounted, computed } from 'vue'

const props = defineProps({
  suggest_filter: String
})
const params = {
  navigation: true,

  injectStyles: [
    `
    .swiper-button-next,
.swiper-button-prev {
  width: 48px;
  height: 100%;
  top: 50%;
}
.swiper-wrapper {
  width: calc(100% - 96px);
  margin: 0 auto;
}
.swiper-button-next {
  border-right: 1px var(--black-5) solid;
  top: 22px;
  left: 0px !important;
}
.swiper-button-prev {
  border-left: 1px var(--black-5) solid;
  top: 22px;
  right: 0px !important;
}
.swiper-button-next svg,
.swiper-button-prev svg {
  color: rgb(150, 150, 160);
  width: 16px;
  height: 16px;
}
.swiper-button-next:hover svg,
.swiper-button-prev:hover svg {
  color: black;
}

    `
  ]
}

const suggests = [
  {
    link: '/os/409227-ios-ipados-17-released-iphone-ipad-download/',
    alt: 'قابلیت پوستر iOS 17 روی آیفون ۱۳ پرو مکس',
    src: 'https://api2.zoomit.ir/media/behzad-ios-17-poster-iphone-6480dadd896c1bcf59b7e4b9?w=500&amp;q=75',
    text: 'اپل نسخه نهایی iOS 17 و iPadOS 17 را منتشر کرد',
    comments: 27,
    hour: 17,
    type: 'text'
  },
  {
    link: '/tech/409237-panos-panay-windows-leader-leaving-microsoft/',
    alt: 'پانوس پانای / Panos Panay رئیس سابق ویندوز با لپ تاپ سفید در دست',
    src: 'https://api2.zoomit.ir/media/panos-panay-holding-surface-laptop-event-black-6508668a746b0421ae9b62d2?w=500&amp;q=75',
    text: 'رهبر ویندوز و سرفیس، از مایکروسافت جدا شد [به‌روزرسانی: آمازون مقصد بعدی است]',
    comments: 16,
    hour: 3,
    type: 'text'
  },
  {
    link: '/mobile/409242-gfxbench-a17-pro-gpu-vs-a16-bionic/',
    alt: 'نیمه بالایی آیفون ۱۵ پرو مکس اپل / iPhone 15 Pro Max',
    src: 'https://api2.zoomit.ir/media/iphone-15-pro-max-upper-half-closeup-6500ad5fc52f30497f370139?w=500&amp;q=75',
    text: ' حق با اپل بود؛ گرافیک آیفون ۱۵ پرو بسیار بهتر از نسل قبل است',
    comments: 5,
    hour: 21,
    type: 'text'
  },
  {
    link: '/shutter/409215-magical-moments-of-birds-in-nature/',
    alt: 'پرندگان در طبیعت',
    src: 'https://api2.zoomit.ir/media/magical-moments-of-birds-in-nature-6507dd24746b0421ae9b60f1?w=500&amp;q=75',
    text: 'تصاویر آرامش‌بخش از لحظات جادویی پرندگان در طبیعت',
    comments: 1,
    hour: 10,
    type: 'text'
  },
  {
    link: '/os/409228-apple-watchos-10-tvos-17-released-download/',
    alt: 'پاسخ به تماس در اپل واچ اولترا',
    src: 'https://api2.zoomit.ir/media/2022-11-apple-watch-ultra-while-calling-638c6a6b3801d1ddad8e3fe7?w=500&amp;q=75',
    text: 'اپل دو سیستم‌عامل watchOS 10 و tvOS 17 را منتشر کرد',
    comments: 4,
    hour: 19,
    type: 'text'
  },
  {
    link: '/cryptocurrency/409017-most-expensive-meme-nfts/',
    alt: 'میم دوج',
    src: 'https://api2.zoomit.ir/media/10-most-expensive-meme-nft-65015351c52f30497f370403?w=500&amp;q=75',
    text: 'شدند گران‌ترین لبخندهای دنیا؛ فهرست میم‌های NFT که با قیمت‌های عجیبی معامله',
    comments: 11,
    hour: 7,
    type: 'text'
  },
  {
    link: '/gaming/409241-nintendo-switch-2-ps4-xbox-one-leaked/',
    alt: 'نینتندو سوییچ / Nintendo Switch در دست',
    src: 'https://api2.zoomit.ir/media/2017-3-fb338358-7023-4604-9e6c-98a95d64192d-638b9e6f147879a62cf4cb30?w=500&amp;q=75',
    text: 'قدرت نینتندو سوییچ ۲ مشابه پلی استیشن ۴ و ایکس باکس وان خواهد بود',
    comments: 23,
    hour: 8,
    type: 'text'
  },
  {
    link: "/headset/409301-airpods-pro-2-vs-galaxy-buds-2-pro-vs-nothing-ear-2/",
    alt: 'دو مرد جوان در کنار آیفون ۱۵ پرو و دسته پلی استیشن ۵',
    src: "https://api2.zoomit.ir/media/airpods-pro-2-vs-galaxy-buds-2-pro-vs-nothing-ear-2-6509be32746b0421ae9b654d?w=500&q=75",
    text: 'آیا ناتینگ ایر ۲ جایگزین مناسبی برای ایرپاد پرو ۲ و گلکسی بادز ۲ پرو است؟ [تماشا کنید]',
    comments: 0,
    hour: 2,
    type: 'video'
  },
  {
    link: "/zoomcast/409371-iphone-15-pro-a17-pro-zoomcast/",
    alt: 'ناتینگ ایر ۲ و ایرپاد پرو ۲ و گلکسی بادز ۲ پرو',
    src: "https://api2.zoomit.ir/media/mehrdad-behzad-iphone-15-pro-zoomcast-650b29d6746b0421ae9b67b1?w=500&q=75",
    text: 'ویژه‌برنامه زومیت: آیفون ۱۵ پرو واقعاً بهترین کنسول بازی دنیا است؟ [تماشا کنید]',
    comments: 0,
    hour: 19,
    type: 'video'
  },
  {
    link: "/tablet/409238-ipad-pro-m2-vs-galaxy-tab-s8-plus-vs-xiaomi-pad-6-pro/",
    alt: 'نمای پشت آیپد پرو M2 و گلکسی تب S8 پلاس و شیائومی پد ۶ پرو',
    src: "https://api2.zoomit.ir/media/ipad-pro-m2-tab-s8-plus-xiaomi-pad-6-pro-65086b9b746b0421ae9b62de?w=500&q=75",
    text: 'اپل، سامسونگ یا شیائومی؛ تبلت کدام شرکت بهترین گزینه خرید است؟ [تماشا کنید]',
    comments: 0,
    hour: 3,
    type: 'video'
  },
  {
    link: "/video-review/409208-galaxy-watch-6-classic-video-review/",
    alt: 'تغییر واچ‌فیس در گلکسی واچ ۶ کلاسیک',
    src: "https://api2.zoomit.ir/media/galaxy-watch-6-classic-whatchface-options-65070dc0746b0421ae9b5f1d?w=500&q=75",
    text: 'این ساعت هوشمند، خواب را از چشم کاربران اپل واچ می‌گیرد! [تماشا کنید]',
    comments: 0,
    hour: 4,
    type: 'video'
  },
  {
    link: "/video-review/408976-xiaomi-mix-fold-3-video-review/",
    alt: 'شیائومی میکس فولد ۳ / Xiaomi Mix Fold 3 روی میز',
    src: "https://api2.zoomit.ir/media/xiaomi-mix-fold-3-half-closed-table-64fde7d7c52f30497f36e3df?w=500&q=75",
    text: 'میکس فولد ۳؛ وقتی شیائومی، سامسونگ را هم حیرت‌زده می‌کند [تماشا کنید]',
    comments: 0,
    hour: 11,
    type: 'video'
  }
]

const processed_suggestList = computed(() => {
  var newArray = suggests.filter((suggest) => {
    return suggest.type == props.suggest_filter
  })

  return newArray
})

onMounted(() => {
  const instance = getCurrentInstance()
  const swiperContainer = instance.refs.SuggestSwiperRef
  console.log(swiperContainer)
  Object.assign(swiperContainer, params)
  swiperContainer.initialize()
})
</script>

<style>
.suggest-swiper-slide {
  padding-left: 25px;
}

.suggestCarousel_Wrapper {
  border-radius: 3px;
  background-color: var(--card);
  box-shadow: 0 1px 3px 0 var(--elevation);
}

.suggestCarousel_Text {
  margin: unset;
  font-size: 14px;
  font-weight: bold;
  color: var(--text);
  line-height: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.suggestCarousel_ImageWrapper {
  aspect-ratio: 3 / 2;
}

.suggestCarousel_Text:hover {
  color: var(--text-hover);
}

.suggestCarousel_Num {
  color: var(--grey-1);
  font-family: "Vazir-FD" !important;
}


</style>
