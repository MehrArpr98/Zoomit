<template>
  <nav class="nav-for-desktop">
    <div class="menu fixed inset-0 flex justify-between items-center bg-black z-50">
      <div class="container mx-auto grow">
        <div class="row flex flex-row flex-wrap justify-between">
          <div class="right-menu flex items-center">
            <router-link class="logo inline-flex" :to="{ name: 'home' }">
              <img src="https://cdn01.zoomit.ir/zoomit/zoomit_logo.svg" alt="زومیت" />
            </router-link>
            <div
              class="nav__sub-menu absolute inset-x-0 bg-black opacity-90"
              :class="{ hidden: !show_nav_submenu }"
            >
              <div class="container mx-auto grow">
                <div class="row flex flex-row flex-wrap justify-between">
                  <div class="nav__sub-menu-search w-full hidden">
                    <div class="search">
                      <div class="search-wrapper">
                        <input
                          id="SearchTerm-mobile"
                          class="autocomplete-input ui-autocomplete-input"
                          type="text"
                          placeholder="دنبال چیزی میگردی؟"
                        />
                      </div>
                      <i class="icon-search"></i>
                    </div>
                  </div>
                  <div class="nav__sub-menu-content w-full">
                    <div class="nav__sub-menu-box w-full p-0">
                      <div class="nav__sub-menu-items relative flex flex-wrap w-full">
                        <div class="nav__sub-menu-list">
                          <ul class="m-0 mt-1">
                            <li class="">
                              <a href="https://www.zoomit.ir/review/">
                                <span class="menu-head"> بررسی </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی موبایل')"
                                href="https://www.zoomit.ir/mobile-review/"
                                >بررسی موبایل</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی لپ تاپ')"
                                href="https://www.zoomit.ir/laptop-review/"
                                >بررسی لپ تاپ</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی ساعت هوشمند')"
                                href="https://www.zoomit.ir/wearable-review/"
                                >بررسی ساعت هوشمند</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی تبلت')"
                                href="https://www.zoomit.ir/tablet-review/"
                                >بررسی تبلت</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی تلویزیون')"
                                href="https://www.zoomit.ir/tv-review/"
                                >بررسی تلویزیون</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی اسپیکر')"
                                href="https://www.zoomit.ir/speaker-headphone-review/"
                                >بررسی اسپیکر</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href="/buying-guide/">
                                <span class="menu-head"> راهنمای خرید گوشی </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','راهنمای خرید بهترین گوشی اقتصادی')"
                                href="/buying-guide/403436-best-budget-smartphone-buying-guide/"
                                >راهنمای خرید بهترین گوشی اقتصادی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین گوشی های موبایل بازار ایران')"
                                href="/buying-guide/272487-best-smartphone-buying-guide/"
                                >بهترین گوشی های موبایل بازار ایران</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین گوشی های مناسب عکاسی در بازار ایران')"
                                href="/buying-guide/368264-best-smartphones-for-photography/"
                                >بهترین گوشی های مناسب عکاسی در بازار ایران</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین گوشی تا 15 میلیون تومان')"
                                href="/buying-guide/403114-best-smartphone-under-15m/"
                                >بهترین گوشی تا 15 میلیون تومان</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','راهنمای خرید بهترین گوشی سامسونگ')"
                                href="/buying-guide/401632-samsung-galaxy-phone-buying-guide/"
                                >راهنمای خرید بهترین گوشی سامسونگ</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href=""> <span class="menu-head"> راهنمای خرید لپ تاپ </span> </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین لپ تاپ های 2023 بازار ایران')"
                                href="/buying-guide/371890-best-laptops-of-2021-buying-guide/"
                                >بهترین لپ تاپ های 2023 بازار ایران</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین لپ‌تاپ های گیمینگ اقتصادی')"
                                href="/buying-guide/401742-budget-gaming-laptop-buying-guide/"
                                >بهترین لپ‌تاپ های گیمینگ اقتصادی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بهترین برند لپ تاپ در سال 2023 کدام است؟')"
                                href="/buying-guide/402654-best-laptop-brand/"
                                >بهترین برند لپ تاپ در سال 2023 کدام است؟</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href="https://www.zoomit.ir/video/">
                                <span class="menu-head"> ویدیو </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','بررسی ویدئویی')"
                                href="https://www.zoomit.ir/video-review/"
                                >بررسی ویدئویی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','نگاه نزدیک')"
                                href="https://www.zoomit.ir/handson/"
                                >نگاه نزدیک</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','زوم کست')"
                                href="https://www.zoomit.ir/zoomcast/"
                                >زوم کست</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','جعبه گشایی')"
                                href="https://www.zoomit.ir/unboxing/"
                                >جعبه گشایی</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href="https://www.zoomit.ir/howto/">
                                <span class="menu-head"> آموزش </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','تلفن هوشمند / تبلت')"
                                href="https://www.zoomit.ir/mobile-learning/"
                                >تلفن هوشمند / تبلت</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','آموزش کامپیوتر')"
                                href="https://www.zoomit.ir/computer-learning/"
                                >آموزش کامپیوتر</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','صوتی و تصویری')"
                                href="https://www.zoomit.ir/av-learning/"
                                >صوتی و تصویری</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','آموزش عکاسی')"
                                href="https://www.zoomit.ir/photography-learning/"
                                >آموزش عکاسی</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href="https://www.zoomit.ir/hardware/">
                                <span class="menu-head"> اخبار سخت افزار </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','کامپیوتر رومیزی')"
                                href="https://www.zoomit.ir/desktop/"
                                >کامپیوتر رومیزی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','مانیتور')"
                                href="https://www.zoomit.ir/monitor/"
                                >مانیتور</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','چاپگر، اسکنر')"
                                href="https://www.zoomit.ir/printer-scanner/"
                                >چاپگر، اسکنر</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','پردازنده')"
                                href="https://www.zoomit.ir/processor/"
                                >پردازنده</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','پردازنده گرافیکی')"
                                href="https://www.zoomit.ir/graphic/"
                                >پردازنده گرافیکی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','حافظه')"
                                href="https://www.zoomit.ir/storage/"
                                >حافظه</a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="nav__sub-menu-list">
                          <ul>
                            <li>
                              <a href="https://www.zoomit.ir/tech/">
                                <span class="menu-head"> اخبار فناوری </span>
                              </a>
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','موبایل')"
                                href="https://www.zoomit.ir/mobile/"
                                >موبایل</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','تبلت')"
                                href="https://www.zoomit.ir/tablet/"
                                >تبلت</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','لپ‌ تاپ')"
                                href="https://www.zoomit.ir/laptop/"
                                >لپ‌ تاپ</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','گجت')"
                                href="https://www.zoomit.ir/gadget/"
                                >گجت</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','ساعت و دست بند هوشمند')"
                                href="https://www.zoomit.ir/wearables/"
                                >ساعت و دست بند هوشمند</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','دوربین')"
                                href="https://www.zoomit.ir/camera/"
                                >دوربین</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','واقعیت مجازی')"
                                href="https://www.zoomit.ir/vr-ar/"
                                >واقعیت مجازی</a
                              >
                            </li>
                            <li class="subBoldCol">
                              <a
                                onclick="ga('send','event','SubMenu','Click to SubMega','لوازم خانگی')"
                                href="https://www.zoomit.ir/appliances/"
                                >لوازم خانگی</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="nav__footer flex justify-between items-center px-5 my-5 w-full ">
                      <div class="nav__hot-topics">
                        <span class="nav__hot-topics-title ml-4 text-sm">
                          <i class="icon-fire2"></i> موضوعات داغ
                        </span>
                        <span class="ml-4 text-sm ">
                          <a
                            href="/product/apple-iphone-13/"
                            >آیفون ۱۳</a
                          >
                        </span>
                        <span class="ml-4 text-sm ">
                          <a
                            href="/product/apple-iphone-14-pro-max/"
                               > آیفون ۱۴ پرو مکس </a
                          >
                        </span>
                        <span class="ml-4 text-sm ">
                          <a
                            href="/product/samsung-galaxy-a32-5g/"
                             > سامسونگ A32</a
                          >
                        </span>
                        <span class="ml-4 text-sm ">
                          <a
                            href="/product/samsung-galaxy-a13/"
                            >گوشی A13</a
                          >
                        </span>
                        <span class="ml-4 text-sm ">
                          <a
                            href="/product/samsung-galaxy-a12/"
                            >قیمت A12</a
                          >
                        </span>
                      </div>
                      <div class="nav__footer-us">
 
                        <ul class="flex justify-between items-center m-0">
                          <li class="bg-zinc-900 py-1 px-3 mr-2.5 mt-0 rounded-full">
                            <a href="/about-us/"> <span> درباره ما </span> </a>
                          </li>
                          <li class="bg-zinc-900 py-1 px-3 mr-2.5 mt-0 rounded-full">
                            <a href="/contact-us/"> <span> تماس با ما </span> </a>
                          </li>
                          <li class="bg-zinc-900 py-1 px-3 mr-2.5 mt-0 rounded-full">
                            <a href="https://www.zoomit.ir/advertisement/">
                              <span> تبلیغات </span>
                            </a>
                          </li>
                          <li class="bg-zinc-900 py-1 px-3 mr-2.5 mt-0 rounded-full">
                            <a href="https://www.zoomit.ir/hire/"> <span> استخدام </span> </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="show_nav_submenu = !show_nav_submenu"
              type="button"
              class="tcon tcon-menu--xbutterfly js-toggle-subMenu flex justify-center items-center cursor-pointer border-0 outline-0 w-5 h-5 duration-300 ml-5 w-auto"
              :class="{ 'tcon-transform': show_nav_submenu }"
              aria-label="toggle menu"
            >
              <span class="tcon-menu__lines" aria-hidden="true"></span>
              <span class="tcon-visuallyhidden">toggle menu</span>
            </button>

            <div
              class="menu__box flex relative h-full items-center absolute inset-0 left-full duration-300 bg-black"
            >
              <div class="search flex items-center" :class="{ open: show_searchbar }">
                <div class="search-wrapper relative w-full">
                  <input
                    id="SearchTerm"
                    class="autocomplete-input ui-autocomplete-input"
                    type="text"
                    placeholder="دنبال چیزی میگردی؟"
                  />
                  <div id="headerSearchResult" class="seach-box__searchResultList">
                    <!--  <ul
                      id="ui-id-2"
                      tabindex="0"
                      class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                      style="display: none"
                    ></ul> -->
                  </div>
                </div>
              </div>
              <div class="mainMenu">
                <ul class="menuList flex">
                  <li class="megaDropDown megaDropDown-product">
                    <router-link :to="{ name: 'product' }">
                      <span>صفحه اصلی </span>
                    </router-link>
                  </li>
                  <li class="megaDropDown megaDropDown-product">
                    <a href="/product/comparelist/" class="productstyle">
                      <span> مقایسه کن </span>
                    </a>
                    <!--  <router-link :to="{ name: 'product' }">
                      <span>صفحه اصلی </span>
                    </router-link> -->
                  </li>
                  <li
                    class="megaDropDown megaDropDown-product"
                    v-for="item in mainMenu"
                    :key="item"
                  >
                    <router-link
                      :to="{
                        name: 'productItem',
                        params: { item: item.param },
                        force: true,
                        state: { productItemName: item.text }
                      }"
                    >
                      <span>{{ item.text }}</span>
                    </router-link>
                  </li>

                  <li
                    class="megaDropDown megaDropDown-product"
                    :class="{ activeSubMenu: show_more_submenu }"
                  >
                    <a
                      @click="show_more_submenu = !show_more_submenu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="navigation"
                      data-toggle="dropdown"
                      class="MenuHead"
                      href="#"
                    >
                      <span> بیشتر </span> <i class="caret" aria-hidden="true"></i>
                    </a>
                    <div
                      class="subMegaMenu absolute top-12 z-50 duration-200 flex justify-around items-center bg-white px-8 py-5 rounded-b"
                      :class="{ activeSubMenu: show_more_submenu }"
                    >
                      <div class="menuCol h-full">
                        <ul class="h-full overflow-y-auto overflow-x-hidden py-5 px-8">
                          <li v-for="item in menuCol" :key="item">
                            <router-link
                              :to="{
                                name: 'productItem',
                                params: { item: item.param },
                                force: true,
                                state: { productItemName: item.text }
                              }"
                            >
                              {{ item.text }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="left-menu flex items-center">
            <ul class="flex items-center m-0">
              <li class="ml-5"><span> </span></li>
              <li class="ml-5" onclick="return popupQuickLoginRegister()">
                <span class="cursor-pointer flex items-center w-4 h-4">
                  <img class="w-full h-full" src="../assets/svgs/user2.svg" />
                </span>
              </li>
              <li class="menu__share ml-4">
                <span class="cursor-pointer flex items-center w-4 h-4">
                  <img class="w-full h-full" src="../assets/svgs/share.svg" />
                </span>
                
              </li>
              <li>
                <span class="cursor-pointer flex items-center w-8 h-10">
                  <button
                    @click="show_searchbar = !show_searchbar"
                    type="button"
                    class="tcon tcon-search--xcross js-toggle-search w-8 h-10 flex justify-center items-center outline-0 border-0 cursor-pointer"
                    :class="{ 'tcon-transform': show_searchbar }"
                    aria-label="toggle search"
                  >
                    <span
                      class="tcon-search__item cursor-pointer flex items-center display: inline-block h-5 w-5 duration-300 rounded-0 relative"
                      aria-hidden="true"
                    ></span>
                    <span class="tcon-visuallyhidden">toggle search</span>
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
const show_nav_submenu = ref(false)
const show_searchbar = ref(false)
const show_more_submenu = ref(false)
const mainMenu = [
  {
    param: 'mobile',
    text: 'گوشی'
  },
  {
    param: 'laptop',
    text: 'لپ تاپ'
  },
  {
    param: 'gaming-console',
    text: 'کنسول'
  },
  {
    param: 'tablet',
    text: 'تبلت'
  },

  {
    param: 'wearables',
    text: 'ساعت هوشمند'
  },
  {
    param: 'split-ac',
    text: 'کولر گازی'
  },
  {
    param: 'headphone',
    text: 'هدفون'
  },
  {
    param: 'tv',
    text: 'تلویزیون'
  }
]
const menuCol = [
  {
    param: 'powerbank',
    text: 'پاور بانک '
  },
  {
    param: 'hdd',
    text: 'هارد'
  },
  {
    param: 'camera',
    text: 'دوربین'
  },
  {
    param: 'gamepad',
    text: 'دسته بازی '
  },
  {
    param: 'monitor',
    text: 'مانیتور'
  },
  {
    param: 'cpu',
    text: 'پردازنده'
  },
  {
    param: 'vga',
    text: 'کارت گرافیک'
  },
  {
    param: 'modem-router',
    text: 'مودم روتر'
  },
  {
    param: 'modem-router-simcard',
    text: 'مودم سیم‌کارتی و همراه'
  },
  {
    param: 'router',
    text: 'روتر و اکسس پوینت'
  },
  {
    param: 'speaker',
    text: 'اسپیکر'
  },
  {
    param: 'ssd',
    text: 'SSD'
  },
  {
    param: 'refrigerator',
    text: 'یخچال فریزر '
  },
  {
    param: 'printer',
    text: 'پرینتر و اسکنر '
  },
  {
    param: 'dishwasher',
    text: 'ماشین ظرفشویی '
  },
  {
    param: 'air-fryer',
    text: 'هواپز و سرخ کن '
  },
  {
    param: 'android-box',
    text: ' اندروید باکس '
  },
  {
    param: 'washing-machine',
    text: 'ماشین لباسشویی'
  },
  {
    param: 'webcam',
    text: 'وب کم'
  },
  {
    param: 'shaver',
    text: 'ماشین اصلاح و ریش تراش'
  },
  {
    param: 'hood',
    text: 'هود آشپزخانه '
  },
  {
    param: 'keyboard',
    text: 'کیبورد'
  },
  {
    param: 'mouse',
    text: 'ماوس'
  },
  {
    param: 'memory',
    text: 'رم'
  }
]

</script>
<style>
button.js-toggle-search {
  padding: 2px;
  width: auto;
  height: auto;
}

.tcon-search__item {
  transform: rotate(-135deg);
}

.tcon-search__item::before,
.tcon-search__item::after {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: transparent;
  content: '';
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
}
.tcon-search__item:before {
  height: 2px;
  left: 0;
  background: #ccc !important;
  border-radius: 2.85714px;
}
.tcon-search__item::before {
  height: 2px;
  left: 0;
  background: #000;
  border-radius: 1.42857px;
}

.tcon-search__item::after {
  right: 0;
  background: white;
  border-radius: 50%;
  width: 6.00006px;
  height: 6.00006px;
  border: 1px solid black;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.tcon-search__item:after {
  right: 0;
  background: #000;
  border-radius: 50%;
  width: 12.00012px;
  height: 12.00012px;
  border: 2px solid #cccccc !important;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.tcon-search--xcross.tcon-transform {
  -webkit-transform: scale3d(0.8, 0.8, 0.8);
  transform: scale3d(0.8, 0.8, 0.8);
}

.tcon-search--xcross.tcon-transform .tcon-search__item::before,
.tcon-search--xcross.tcon-transform .tcon-search__item::after {
  border-radius: 2.85714px;
  background: #cccccc;
}
.tcon-search--xcross.tcon-transform .tcon-search__item::before {
  height: 4px !important;
}
.tcon-search--xcross.tcon-transform .tcon-search__item::before,
.tcon-search--xcross.tcon-transform .tcon-search__item::after {
  border-radius: 1.42857px;
  background: black;
}
.tcon-search--xcross.tcon-transform .tcon-search__item::after {
  height: 4px !important;
  width: 100%;
  top: 0;
  right: 0;
  border: 0 !important;
  -webkit-transform: rotate3d(0, 0, 1, 90deg);
  transform: rotate3d(0, 0, 1, 90deg);
}
.tcon-search--xcross.tcon-transform .tcon-search__item::after {
  height: 2px;
  width: 100%;
  top: 0;
  right: 0;
  border: 0;
  -webkit-transform: rotate3d(0, 0, 1, 90deg);
  transform: rotate3d(0, 0, 1, 90deg);
}

.menu-head {
  color: #fff !important;
  font-size: 22px;
  font-weight: 300;
}
.p-header {
  font-size: x-large;
  font-weight: 500;
}
nav.nav-for-desktop {
  position: sticky;
  z-index: 105;
  top: 0;
}
nav.nav-for-desktop .menu {
  height: 50px;
}
nav .menu * {
  color: #ccc;
}
nav .menu .row {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
}
nav .menu * {
  color: #cccccc;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}
[class*="col-"]{
  padding-right: 15px;
  padding-left: 15px;
}
.container {
  max-width: 1300px;
  padding-right: 15px;
  padding-left: 15px;
}
.logo {
  width: 148px;
  height: 30px;
  margin-left: 20px;
}

.nav__sub-menu {
  padding-bottom: 10px;
  top: 50px;
}

.nav__sub-menu-box {
  min-height: 400px;
}

.nav__sub-menu .nav__sub-menu-items div.nav__sub-menu-list {
  width: 14.28%;
  padding-left: 10px;
  float: right;
}

.nav__sub-menu div.nav__sub-menu-list {
  margin-top: 30px;
}
.nav__sub-menu div.nav__sub-menu-list ul li {
  margin-top: 10px;
}
.nav__sub-menu div.nav__sub-menu-list ul li a {
  font-weight: 300;
  color: #cccccc;
  font-size: 13px;
  -webkit-transition: all 250ms;
  transition: all 250ms;
}
.nav__sub-menu div.nav__sub-menu-list ul li a:hover {
  color: #fff;
}
.menu-head {
  color: #fff !important;
  font-size: 22px;
}
/* .tcon-menu--xbutterfly {
    width: auto;
  } */
.tcon-menu__lines {
  display: inline-block;
  height: 2.85714px;
  width: 20px;
  border-radius: 1.42857px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: black;
  position: relative;
}
.tcon-transform .tcon-menu__lines {
  -webkit-transform: scale3d(0.8, 0.8, 0.8);
  transform: scale3d(0.8, 0.8, 0.8);
}

nav .menu .right-menu button.tcon-menu--xbutterfly span:before,
nav .menu .right-menu button.tcon-menu--xbutterfly span:after,
nav .menu .right-menu button.tcon-menu--xbutterfly span {
  background-color: #cccccc;
}

nav .menu .right-menu button.tcon-menu--xbutterfly.tcon-transform span:before,
nav .menu .right-menu button.tcon-menu--xbutterfly.tcon-transform span:after {
  background-color: #ff0025;
}

nav .menu .right-menu button.tcon-menu--xbutterfly.tcon-transform span {
  background-color: transparent;
}

.tcon-menu__lines::before,
.tcon-menu__lines::after {
  display: inline-block;
  height: 2.85714px;
  width: 20px;
  border-radius: 1.42857px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background: black;
  content: '';
  position: absolute;
  left: 0;
  -webkit-transform-origin: 1.42857px center;
  transform-origin: 1.42857px center;
  width: 100%;
}

.tcon-menu__lines::before {
  top: 5px;
}
.tcon-menu__lines::after {
  top: -5px;
}

.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before,
.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {
  top: 0;
  -webkit-transition:
    top 0.3s ease,
    -webkit-transform 0.3s 0.5s ease;
  transition:
    top 0.3s ease,
    -webkit-transform 0.3s 0.5s ease;
  transition:
    top 0.3s ease,
    transform 0.3s 0.5s ease;
  transition:
    top 0.3s ease,
    transform 0.3s 0.5s ease,
    -webkit-transform 0.3s 0.5s ease;
  width: 20px;
}
.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before {
  -webkit-transform: rotate3d(0, 0, 1, 45deg);
  transform: rotate3d(0, 0, 1, 45deg);
  top: -6px;
}
.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
  top: 5px;
}

.tcon-visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.tcon-search__item:before {
  height: 2px;
  left: 0;
  background: #cccccc !important;
  border-radius: 2.85714px;
}
nav .menu .right-menu .menu__box div.search.open {
  left: 0;
}

nav .menu .right-menu .menu__box div.search {
  position: absolute;
  left: 100%;
  right: 0;
  bottom: 0;
  background-color: #000;
  top: 0;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  -moz-align-items: center;
  -ms-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.search-wrapper {
  position: relative;
  width: 100%;
  /* height: 100%; */
}
nav .menu .right-menu .menu__box div.search input {
  height: 48px;
  background-color: initial;
  width: 100%;
  border: none;
  border-bottom: 1px solid #666666;
  padding-right: 10px;
}
.seach-box__searchResultList {
  position: absolute;
  top: 54px;
  overflow: auto;
  right: 0;
  width: 100%;
  background: #2f2f2f;
}

nav .menu .right-menu ul.menuList li a {
  padding: 0 10px;
  border-left: 1.5px solid #2d2d2d;
  font-size: 14px;
}

nav .menu .right-menu ul.menuList li .caret.rotate_180 {
  -webkit-transform: none;
  transform: none;
}
nav .menu .right-menu ul.menuList li i.caret {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid white;
  position: absolute;
  top: 20px;
  left: -17px;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
nav .menu .right-menu ul.menuList li:last-child a {
  padding-left: 0;
  border-left: none;
}
nav .menu .right-menu ul.menuList li:last-child .subMegaMenu {
  -webkit-box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

  visibility: hidden;
}

nav .menu .right-menu ul.menuList li:last-child .subMegaMenu li {
  line-height: 35px;
  white-space: nowrap;
}

nav .menu .right-menu ul.menuList li:last-child .subMegaMenu a {
  color: #333;
  position: relative;
  padding: 0;
  font-weight: 400;
  font-size: 13px;
}
nav .menu .right-menu ul.menuList li:last-child .subMegaMenu a::after {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid;
  opacity: 0;
  -webkit-transition:
    opacity 0.35s,
    -webkit-transform 0.35s;
  transition:
    opacity 0.35s,
    -webkit-transform 0.35s;
  transition:
    opacity 0.35s,
    transform 0.35s;
  transition:
    opacity 0.35s,
    transform 0.35s,
    -webkit-transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}
.subMegaMenu {
  height: calc(90vh - 62px);
  padding: inherit !important;
}
.nav__footer .nav__hot-topics span.nav__hot-topics-title {
    color: #A8A7A7;
}
icon-fire2:before {
    content: "\ef55";
}
.nav__footer .nav__hot-topics span.nav__hot-topics-title i {
    color: #ff0025;
    font-size: 16px;
}


@media (max-width: 1300px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 1250px) {
  .nav__sub-menu .nav__sub-menu-items {
    padding: 0;
    width: calc(100% - 22.22%);
    margin-right: 11.11%;
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 992px) {
  nav .menu .right-menu button.tcon-menu--xbutterfly span:before,
  nav .menu .right-menu button.tcon-menu--xbutterfly span:after,
  nav .menu .right-menu button.tcon-menu--xbutterfly span {
    background-color: #fff;
  }

  nav .menu .right-menu ul.menuList li .activeSubMenu {
    opacity: 1;
    top: 46px !important;
    visibility: visible !important;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
}
</style>
