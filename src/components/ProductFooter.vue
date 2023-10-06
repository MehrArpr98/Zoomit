<template>
  <footer class="text-white mt-10 px-0 pt-6 bg-zinc-800">
    <div class="container-fluid">
      <div class="row flex flex-row flex-wrap">
        <div class="col-3 w-1/4 basis-1/4">
          <h3 class="text-lg my-5 font-bold">راهنمای خرید</h3>
          <template v-for="(item,i) in FooterNewsArray" :key="item">
            <div class="p-0 pb-5" v-if="i<3">
            <div class="float-right ml-4 relative w-20 overflow-hidden">
              <a :href="item.href">
                <img :alt="item.title" :src="item.src" />
              </a>
            </div>
            <div class="relative">
              <div class="item-list-text-wrapper m-0 mb-2.5 text-sm text-stone-300">
                <a :href="item.href">
                  {{ item.title }}
                </a>
              </div>
              <time class="text-xs text-stone-300 fa-num">{{ item.date }}</time>
            </div>
          </div>
        </template>
          
        </div>
        <div class="col-3 w-1/4 basis-1/4">
          <h3 class="text-lg my-5 font-bold">جدیدترین بررسی‌های ویدئویی محصول</h3>
          <template v-for="(item,i) in FooterNewsArray" :key="item">
            <div class="p-0 pb-5" v-if="i>2">
            <div class="float-right ml-4 relative w-20 overflow-hidden">
              <a :href="item.href">
                <img :alt="item.title" :src="item.src" />
              </a>
            </div>
            <div class="relative">
              <div class="item-list-text-wrapper m-0 mb-2.5 text-sm text-stone-300">
                <a :href="item.href">
                  {{ item.title }}
                </a>
              </div>
              <time class="text-xs text-stone-300 fa-num">{{ item.date }}</time>
            </div>
          </div>
          </template>
         
        </div>
        <div class="clearother"></div>
        <div class="col-3 w-1/4 basis-1/4">
          <h3 class="text-lg my-5 font-bold">کاربران بیشتر به دنبال چه هستند؟</h3>
          <ul class="cat-list">
            <li class="mb-3">
              <a
                class="text-sm text-stone-300"
                href="/product/list/mobile/samsung/"
                target="_blank"
              >
                قیمت گوشی سامسونگ
              </a>
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/mobile/apple/" target="_blank"
                >قیمت آیفون</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/mobile/xiaomi/" target="_blank"
                >قیمت گوشی شیائومی</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/mobile/huawei/" target="_blank"
                >قیمت گوشی هواوی</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/laptop/asus/" target="_blank"
                >قیمت لپ‌ تاپ ایسوس</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/laptop/lenovo/" target="_blank"
                >قیمت لپ تاپ لنوو</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="/product/list/ssd/" target="_blank">
                قیمت هارد ssd</a
              >
            </li>
            <li class="mb-3">
              <a
                class="text-sm text-stone-300"
                href="/product/list/headphone/samsung/"
                target="_blank"
                >قیمت هندزفری سامسونگ</a
              >
            </li>
            <li class="mb-3">
              <a
                class="text-sm text-stone-300"
                href="/product/list/headphone/xiaomi/"
                target="_blank"
                >قیمت هندزفری شیائومی</a
              >
            </li>
          </ul>
        </div>
        <div class="col-3 w-1/4 basis-1/4">
          <h3 class="text-lg my-5 font-bold">خانواده زومیت</h3>
          <ul class="cat-list">
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="https://www.zoomit.ir">زومیت</a>
            </li>
            <li class="mb-3">
              <a
                class="text-sm text-stone-300"
                href="https://www.kojaro.com/?utm_source=zoomit&amp;utm_medium=footer&amp;utm_campaign=footerlink"
                >کجارو</a
              >
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="https://www.zoomg.ir">زومجی</a>
            </li>
            <li class="mb-3">
              <a class="text-sm text-stone-300" href="https://www.pedal.ir/">پدال</a>
            </li>
          </ul>
          <div class="hidden-xs">
            <h3 class="text-lg my-5 font-bold">عضویت در خبرنامه</h3>
            <div class="newsletter">
              <div class="dir-ltr">
                <form action="/cms/newsletter/subscribe/" method="post">
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="usoPVFob71-t276kBlCKaATBHOjHi05MTI0pa8cCvFhW-YS3ffgl-0ngKWYB6edY3JxGQjK4Rqex0wFHe9sSoB618O6NyfGzei38pae7-Vw1"
                  />
                  <div class="form-group mb-4 float-right w-full">
                    <div class="input-group relative table">
                      <a
                        class="input-group-addon text-white border-r border-white text-sm leading-none text-center align-middle table-cell px-3 px-1.5"
                        onclick="submitNewsLetter(this)"
                        >تایید</a
                      >
                      <input
                        name="Email"
                        type="text"
                        class="form-control dir-ltr h-8 text-neutral-400 bg-neutral-700 text-xs leading-none relative float-right w-full table-cell px-3 px-1.5 dir-rtl"
                        placeholder="ایمیل خود را وارد کنید"
                      />
                      <div
                        class="input-group-addon bg-neutral-700 border-l border-white text-sm leading-none text-center align-middle table-cell px-3 px-1.5"
                      >
                        <i class="icon-mail_outline not-italic text-sm"></i>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-neutral-700 h-px overflow-hidden mx-3 my-2.5"></div>

      <div class="row flex flex-row flex-wrap">
        <div class="col-3 w-1/4 basis-1/4 pt-5">
          <a href="/" class="logo inline-flex">
            <img src="https://cdn01.zoomit.ir/zoomit/zoomit_logo.svg" alt="زومیت"
          /></a>
        </div>
        <div class="col-5 w-5/12 basis-5/12">
          <p class="m-0 mb-2.5 text-base">
            سرورهای زومیت توسط
            <a
              class="text-red-600"
              href="https://parspack.com?utm_source=zoomit&amp;utm_medium=footer"
              target="_blank"
              rel="nofollow"
              >پارس پک</a
            >
            میزبانی می‌شود.
          </p>
        </div>
      </div>
    </div>
    <div class="copyright mt-4 bg-black py-2">
      <div class="container-fluid">
        <div class="row flex flex-row flex-wrap items-center">
          <div class="col-6 w-1/2 basis-1/2 text-sm">
            <span class="tahoma">©</span> کپی بخش یا کل هر کدام از مطالب زومیت تنها با کسب مجوز
            مکتوب امکان پذیر است.
          </div>
          <div class="col-6 w-1/2 basis-1/2">
            <ul class="other-menu float-left flex items-center">
              <li class="mb-0 float-right ml-4">
                <a class="text-sm text-stone-300" href="/about-us/">درباره ما</a>
              </li>
              <li class="mb-0 float-right ml-4">
                <a class="text-sm text-stone-300" href="/advertisement/">تبلیغات در زومیت</a>
              </li>
              <li class="mb-0 float-right ml-4">
                <a class="text-sm text-stone-300" href="/contact-us/">تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import FooterNewsArray from '../assets/jsons/FooterNewsArray.json'
</script>

<style>
footer .row {
  margin-right: 0;
  margin-left: 0;
}
footer [class*='col-'] {
  padding-right: 15px;
  padding-left: 15px;
}
.item-list-text-wrapper {
  min-height: 70px;
}
.dir-ltr {
  direction: ltr;
}
footer div.input-group-addon {
  width: 1%;
}
footer .form-group a.input-group-addon {
  background: #e51a2d;
}
.icon-mail_outline:before {
  content: '\02709';
}
</style>
