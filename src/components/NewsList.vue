<template>
  <div
    v-for="news in processed_newsList"
    :key="news"
    class="flex flex-col flex-wrap md:gap-4 gap-2 mt-4"
  >
    <div
      class="MostViews_layer_content_part2_item flex flex-row-reverse justify-between w-full rounded-sm"
    >
      <a :href="news.href"
        ><div class="MostViews_layer_content_part2_item_img_container relative flex flex-wrap">
          <img
            :alt="news.alt"
            loading="lazy"
            width="1920"
            height="1280"
            decoding="async"
            data-nimg="1"
            class="w-full h-full object-cover rounded-sm"
            :src="news.src"
          /></div
      ></a>

      <div class="MostViews_layer_content_part2_item_text relative pl-4 pr-2">
        <a :href="news.href"
          ><span> {{ news.title }} </span></a
        >
        <p>
          {{ news.desc }}
        </p>

        <div class="absolute bottom-0 flex flex-wrap justify-between">
          <div class="flex flex-wrap justify-center items-center gap-4">
            <div class="flex flex-wrap justify-center items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                stroke="var(--grey-1)"
                stroke-width="1.6"
                fill="#9696a0"
              >
                <path
                  d="M8 .5c2.078 0 3.968.73 5.335 1.926C14.667 3.592 15.5 5.202 15.5 7c0 1.736-.812 3.267-2 4.389v3.853l-4.403-1.887c-.196.121-.481.142-.787.145H8c-2.078 0-3.968-.73-5.335-1.926C1.333 10.408.5 8.798.5 7s.833-3.408 2.165-4.574C4.032 1.23 5.922.5 8 .5z"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0"
                ></path></svg
              ><span class="fa">{{ news.comments }}</span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-1">
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
              ><span class="fa"> {{ news.hour }} </span>
            </div>
            <div class="box__BoxBase-sc-1ww1anb-0 eIbCri">
              <div class="popover__PopoverWrapper-sc-1p9qk2q-0 hYvurN">
                <button type="button" class="icon-button__IconButtonBase-sc-1scxe75-0 keUJqZ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="var(--grey-1)"
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
    </div>

    <div class="MostViews_layer_content_part2_item_devider w-full h-px"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const newsList = [
  {
    href: '/tech-iran/409318-need-to-cancel-the-iphone-import-ban/',
    alt: 'آیفون ۱۵ پرو مکس / iPhone 15 Pro Max روی میز',
    src: 'https://api2.zoomit.ir/media/iphone-15-pro-and-max-review-one-6509b2e7746b0421ae9b652c?w=250&amp;q=75',
    title: 'نماینده مجلس: مجلس باید مقابل ممنوعیت واردات آیفون بایستد',
    desc: 'جلال رشیدی کوچی می‌گوید با ممنوعیت اعمال‌شده از سوی وزارت صمت برای واردات آیفون همان اتفاقی که برای خودرو افتاد برای گوشی‌ها هم در حال رخ دادن است.',
    comments: 0,
    hour: '15 دقیقه پیش',
    type: 'newest'
  },
  {
    href: '/health-medical/409313-neuralink-recruiting-subjects-human-trial/',
    alt: 'تراشه مغز کامپیوتر نورالینک در دست',
    src: 'https://api2.zoomit.ir/media/neuralink-n1-brain-computer-chip-in-hand-650a936b746b0421ae9b667b?w=250&amp;q=75',
    title: 'ایلان ماسک به‌زودی این تراشه را وارد مغز افراد معلول می‌کند',
    desc: 'شرکت نورالینک هم‌اکنون به‌دنبال افرادی می‌گردد که بیشتر از ۲۲ سال سن دارند و به فلج چهار اندام مبتلا هستند.',
    comments: 4,
    hour: '44 دقیقه پیش',
    type: 'most_conv'
  },
  {
    href: '/os/409316-samsung-galaxy-s22-plus-ultra-one-ui-6-beta/',
    alt: 'بازدید از سایت زومیت با گلکسی S22 پلاس',
    src: 'https://api2.zoomit.ir/media/2022-2-samsung-galaxy-s22-plus-zoomit-638bb6dd8b369136d458b79a?w=250&amp;q=75',
    title: 'سامسونگ بتای اندروید ۱۴ را برای گلکسی S22 منتشر کرد',
    desc: '  سامسونگ سرانجام نسخه‌ی بتای One UI 6 (مبتنی‌بر اندروید ۱۴) را برای گوشی‌های سری گلکسی S22 منتشر کرد.',
    comments: 7,
    hour: '1 ساعت پیش',
    type: 'newest'
  },
  {
    href: '/tech-iran/409032-ranking-of-data-centers/',
    alt: 'مراکز داده مایکروسافت Azure',
    src: 'https://api2.zoomit.ir/media/2022-7-microsoft-azure-638bb7ec154ec95275182680?w=250&amp;q=75',
    title: 'پیش‌نویس اصلاحیه مصوبه رتبه‌بندی مراکز داده؛ نفوذ سازمان فناوری اطلاعات بر دیتاسنترها',
    desc: ' اصلاحات مصوبه ۲۴۷، نفوذ سازمان فناوری ارتباطات را روی مراکز داده بیشتر کرده و به نظر نمی‌رسد رتبه‌بندی دیگر امری تشویقی باشد.',
    comments: 3,
    hour: '1 ساعت پیش',
    type: 'newest'
  },
  {
    href: '/tech-iran/409223-view-and-pay-the-irancell-bill/',
    alt: 'کاور پرداخت قبض ایرانسل',
    src: 'https://api2.zoomit.ir/media/irancell-bill-650984a5746b0421ae9b64b2?w=250&amp;q=75',
    title: 'پرداخت قبض ایرانسل؛ مشاهده قبض ایرانسل دائمی',
    desc: ' مشاهده و پرداخت قبض تلفن به سادگی و به صورت آنلاین ممکن است. در این مقاله روش‌های مختلف مشاهده و پرداخت قبض ایرانسل را برایتان توضیح داده‌ایم.',
    comments: 0,
    hour: '2 ساعت پیش',
    type: 'iran'
  },
  {
    href: '/tech-iran/409032-ranking-of-data-centers/',
    alt: 'مراکز داده مایکروسافت Azure',
    src: 'https://api2.zoomit.ir/media/2022-7-microsoft-azure-638bb7ec154ec95275182680?w=250&amp;q=75',
    title: 'پیش‌نویس اصلاحیه مصوبه رتبه‌بندی مراکز داده؛ نفوذ سازمان فناوری اطلاعات بر دیتاسنترها',
    desc: ' اصلاحات مصوبه ۲۴۷، نفوذ سازمان فناوری ارتباطات را روی مراکز داده بیشتر کرده و به نظر نمی‌رسد رتبه‌بندی دیگر امری تشویقی باشد.',
    comments: 3,
    hour: '1 ساعت پیش',
    type: 'most_conv'
  },
  {
    href: '/health-medical/409311-zuckerberg-philanthropy-project-ai-life-sciences-research/',
    alt: 'مارک زاکربرگ و همسرش پریسیلا چان در کنفرانس مطبوعاتی',
    src: 'https://api2.zoomit.ir/media/mark-zuckerberg-wifer-press-conference-650a8671746b0421ae9b6669?w=250&amp;q=75',
    title: 'زاکربرگ با هوش مصنوعی رفتار تمام سلول‌های بدن را پیش‌بینی می‌کند',
    desc: 'مارک زاکربرگ و همسرش می‌خواهند با بهره‌گیری از هوش مصنوعی، تحقیقات حوزه‌ی علوم زیستی را بسیار پیشرفته‌تر کنند.',
    comments: 2,
    hour: '3 ساعت پیش',
    type: 'science'
  },
  {
    href: '/shutter/401489-farmland-mitch-rouse-aerial-photography/',
    alt: 'عکس‌های هوایی خیره‌کننده از کشتزارهای خوش‌رنگ و لعاب غربی',
    src: 'https://api2.zoomit.ir/media/mitchell-rouse-farmland-cover-63cd7112255132ee1d11ab9f?w=250&amp;q=75',
    title: 'عکس‌های هوایی خیره‌کننده از کشتزارهای خوش‌رنگ و لعاب غربی',
    desc: ' مجموعه «کشتزار» اثری از هنرمند علاقه‌مند به مکان‌های صنعتی است که از زمان انتشار تاکنون با استقبال بی‌نظیری در فضای مجازی مواجه شده است.',
    comments: 2,
    hour: '3 ساعت پیش',
    type: 'science'
  }
]

const props = defineProps({
  news_filter: String
})

const processed_newsList = computed(() => {
  var newArray = newsList.filter((news) => {
    return news.type == props.news_filter
  })

  return newArray
})
</script>
