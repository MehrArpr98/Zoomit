<template>
  <div class="sticky top-0 w-full z-50">
    <header
      class="relative py-0 px-6 2.4rem h-16 flex items-center justify-between duration-300"
      :class="{ 'header-bg': !transparentHeader, 'header-gradiant': transparentHeader }"
    >
      <div class="flex flex-wrap items-center">
        <router-link :to="{ name: 'home' }" class="flex">
          <svg width="106" height="20">
            <use href="../assets/svgs/logo.svg#svg" id="logo_icon" />
          </svg>
        </router-link>
        <nav class="flex flex-nowrap items-center whitespace-nowrap">
          <button
            type="button"
            class="MenuDesktop_button py-1 px-4 cursor-pointer w-32 h-8 border-0 text-xs"
          >
            <div class="flex justify-center items-center gap-2">
              <svg width="16" height="16">
                <use href="../assets/svgs/cup.svg#svg" id="MenuDesktop_buttonSvg" />
              </svg>
              <span class="text-sm font-black">زومیت من</span>
            </div>
          </button>
          <ul class="flex items-center relative list-none py-2">
            <router-link
              :to="{ name: 'home' }"
              @mousemove="hoverSubmenuIndex = 0"
              @mouseleave="hoverSubmenuIndex = -1"
              :class="{ active: hoverSubmenuIndex == 0 }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <svg width="8" height="8">
                    <use href="../assets/svgs/plus.svg#svg" id="MenuDesktop_itemSvg" />
                  </svg>
                  <span class="MenuDesktop_itemText text-sm font-black"> محصولات</span>
                </button>
              </li>
              <div
                v-show="hoverSubmenuIndex == 0"
                :index="hoverSubmenuIndex"
                class="MenuDesktop_TransparentDiv absolute top-6 z-10 py-3 px-px pb-px"
                :style="`right: ${hoverSubmenuIndex * 90}px`"
              >
                <div class="MenuDesktop_SubCategoryWrapper">
                  <div class="MenuDesktop_SubCategoryList">
                    <div
                      class="MenuDesktop_SubCategoryItem"
                      v-for="item in submenuItems0"
                      :key="item"
                    >
                      <a :href="item.href"
                        ><span> {{ item.title }} </span></a
                      >
                    </div>
                  </div>
                </div>
              </div></router-link
            >

            <router-link
              :to="{ name: 'home' }"
              @mousemove="hoverSubmenuIndex = 1"
              @mouseleave="hoverSubmenuIndex = -1"
              :class="{ active: hoverSubmenuIndex == 1 }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <svg width="8" height="8">
                    <use href="../assets/svgs/plus.svg#svg" id="MenuDesktop_itemSvg" />
                  </svg>
                  <span class="MenuDesktop_itemText text-sm font-black">فناوری</span>
                </button>
              </li>
              <div
                v-show="hoverSubmenuIndex == 1"
                :index="hoverSubmenuIndex"
                class="MenuDesktop_TransparentDiv absolute top-6 z-10 py-3 px-px pb-px"
                :style="`right: ${hoverSubmenuIndex * 90}px`"
              >
                <div class="MenuDesktop_SubCategoryWrapper">
                  <div class="MenuDesktop_SubCategoryList">
                    <div
                      class="MenuDesktop_SubCategoryItem"
                      v-for="item in submenuItems1"
                      :key="item"
                    >
                      <a :href="item.href"
                        ><span> {{ item.title }} </span></a
                      >
                    </div>
                  </div>
                </div>
              </div></router-link
            >
            <router-link :to="{ name: 'home' }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <span class="MenuDesktop_itemText text-sm font-black">راهنمای خرید</span>
                </button>
              </li></router-link
            >
            <router-link :to="{ name: 'home' }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <span class="MenuDesktop_itemText text-sm font-black">بررسی</span>
                </button>
              </li></router-link
            >
            <router-link :to="{ name: 'home' }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <span class="MenuDesktop_itemText text-sm font-black">ویدئو</span>
                </button>
              </li></router-link
            >
            <router-link
              :to="{ name: 'home' }"
              @mousemove="hoverSubmenuIndex = 5"
              @mouseleave="hoverSubmenuIndex = -1"
              :class="{ active: hoverSubmenuIndex == 5 }"
              ><li class="px-4 relative">
                <button
                  class="flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
                >
                  <svg width="8" height="8">
                    <use href="../assets/svgs/plus.svg#svg" id="MenuDesktop_itemSvg" />
                  </svg>
                  <span class="MenuDesktop_itemText text-sm font-black">زومیت</span>
                </button>
              </li>
              <div
                v-show="hoverSubmenuIndex == 5"
                :index="hoverSubmenuIndex"
                class="MenuDesktop_TransparentDiv absolute top-6 z-10 py-3 px-px pb-px"
                :style="`right: ${hoverSubmenuIndex * 90}px`"
              >
                <div class="MenuDesktop_SubCategoryWrapper">
                  <div class="MenuDesktop_SubCategoryList list-5">
                    <div
                      class="MenuDesktop_SubCategoryItem"
                      v-for="item in submenuItems5"
                      :key="item"
                    >
                      <a :href="item.href"
                        ><span> {{ item.title }} </span></a
                      >
                    </div>
                  </div>
                </div>
              </div></router-link
            >
          </ul>

          <button
            class="MenuDesktop_button flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
          >
            <div
              class="MenuDesktop_svgContainer flex justify-center items-center w-5 h-5 rounded-full"
            >
              <svg width="12" height="12">
                <use href="../assets/svgs/search.svg#svg" id="MenuDesktop_search" />
              </svg>
            </div>
            <span class="text-sm font-black">جستجو</span>
          </button>
        </nav>
      </div>

      <div class="flex flex-nowrap items-center gap-4">
        <div
          class="ToggleTheme relative flex justify-center items-center w-14 h-3.5 mx-3.5 border-0 p-0"
        >
          <div class="absolute flex justify-around w-24 -top-0.5">
            <label
              :class="{ active: theme == 'dark' }"
              data-theme="dark"
              class="relative w-5 h-5 flex justify-center items-center rounded-full cursor-pointer"
            >
              <svg width="12" height="12">
                <use href="../assets/svgs/moon.svg#svg" id="moon_icon" />
              </svg>
              <input
                name="theme"
                v-model="theme"
                type="radio"
                class="absolute top-0 left-0 w-0 h-0 -z-10"
                value="dark"
            /></label>

            <label
              :class="{ active: theme == 'system' }"
              data-theme="system"
              class="relative w-5 h-5 flex justify-center items-center rounded-full cursor-pointer"
            >
              <svg width="12" height="12">
                <use href="../assets/svgs/system.svg#svg" id="system_icon" />
              </svg>
              <input
                name="theme"
                v-model="theme"
                type="radio"
                class="absolute top-0 left-0 w-0 h-0 -z-10"
                value="system"
                checked=""
            /></label>

            <label
              :class="{ active: theme == 'light' }"
              data-theme="light"
              class="relative w-5 h-5 flex justify-center items-center rounded-full cursor-pointer"
            >
              <svg width="12" height="12">
                <use href="../assets/svgs/sun.svg#svg" id="sun_icon" />
              </svg>

              <input
                name="theme"
                v-model="theme"
                type="radio"
                class="absolute top-0 left-0 w-0 h-0 -z-10"
                value="light"
            /></label>

            <div data-placement="light" class="ToggleTheme__ThumbTrack-sc-1qrj0ah-1 dmUSrB">
              <div class="ToggleTheme__Thumb-sc-1qrj0ah-2 imKoni"></div>
            </div>
          </div>
        </div>
        <button type="button" class="icon-button__IconButtonBase-sc-1scxe75-0 keUJqZ">
          <svg width="24" height="24">
            <use href="../assets/svgs/user.svg#svg" id="user_icon" />
          </svg>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import submenuItems0Array from '../assets/jsons/submenuItems0Array.json'
import submenuItems1Array from '../assets/jsons/submenuItems1Array.json'
import submenuItems5Array from '../assets/jsons/submenuItems5Array.json'
import useThemeStore from '../stores/theme'

const transparentHeader = ref(true)
const theme = ref('light')
const hoverSubmenuIndex = ref(-1)
const submenuItems0 = submenuItems0Array
const submenuItems1 = submenuItems1Array
const submenuItems5 = submenuItems5Array
const themeStore = useThemeStore()

watch(theme, (newThem) => {
  themeStore.setTheme(newThem)
})

window.onscroll = function () {
  myFunction()
}

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    transparentHeader.value = false
  else transparentHeader.value = true
}
</script>

<style>
header {
  transition: all 0.2s ease 0s;
  background-color: transparent;
}
header.header-gradiant {
  background-image: linear-gradient(rgba(25, 25, 35, 0.5), rgba(25, 25, 35, 0));
}
header.header-bg {
  background-color: var(--header--header-background);
  border-bottom: 1px solid var(--black-5);
}

header.header-bg .MenuDesktop_itemText,
header.header-bg .MenuDesktop_button {
  color: var(--header--menu-link);
}
header .MenuDesktop_itemText,
header .MenuDesktop_button {
  color: var(--white);
}
header.header-bg .MenuDesktop_svgContainer {
  background-color: var(--header--menu-link);
}
header .MenuDesktop_svgContainer {
  background-color: var(--header--search-icon);
  fill: var(--header--zoomit-typography);
}
header ul a.active .MenuDesktop_itemText,
header ul a:hover .MenuDesktop_itemText {
  color: var(--text-hover);
}

header #MenuDesktop_itemSvg,
.MenuDesktop_button #MenuDesktop_buttonSvg,
header.header-bg .MenuDesktop_svgContainer svg {
  fill: var(--white);
}

header.header-bg #MenuDesktop_itemSvg,
header.header-bg .MenuDesktop_button #MenuDesktop_buttonSvg {
  fill: var(--header--menu-link);
}
header.header-bg #MenuDesktop_search {
  fill: var(--header--search-icon);
}
header.header-bg .z-text {
  fill: var(--header--zoomit-typography);
}
.MenuDesktop_button:first-child:hover {
  filter: invert(10%);
}
header .z-text {
  fill: var(--white);
}

.z-logo {
  fill: var(--primary-1);
}

.ToggleTheme,
.ToggleTheme label {
  background-color: var(--grey-5);
}
.ToggleTheme {
  direction: ltr;
}
nav {
  margin-right: 6vw;
}
.ToggleTheme label svg {
  fill: var(--white);
}
#moon_icon,
#sun_icon,
#earth_icon {
  fill: var(--white);
}
.ToggleTheme label[data-theme='light'].active #sun_icon {
  fill: var(--warning-1);
}
.ToggleTheme label[data-theme='dark'].active #moon_icon {
  fill: var(--info);
}
.ToggleTheme label[data-theme='system'].active #system_icon {
  fill: var(--success-1);
}
.ToggleTheme label.active {
  background-color: var(--white);
  box-shadow: 0 0 2pt 1pt var(--elevation);
}

.MenuDesktop_SubCategoryWrapper {
  background-color: var(--card);
  border-radius: 10px;
  box-shadow: rgba(25, 25, 35, 0.08) 0px 0px 16px 0px;
  height: auto;
}
.MenuDesktop_SubCategoryList {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  gap: 0px 32px;
  padding: 10px;
  text-align: right;
}
.MenuDesktop_SubCategoryList.list-5 {
  grid-template-rows: repeat(3, 1fr);
}
.MenuDesktop_SubCategoryItem {
  padding: 8px;
}
.MenuDesktop_SubCategoryItem > a > span:hover {
  color: var(--text-hover);
}

.MenuDesktop_SubCategoryItem > a > span {
  display: block;
  margin: unset;
  font-size: 14px;
  font-weight: normal;
  color: var(--text);
}

#user_icon {
  fill: var(--grey-1);
}
#logo_icon {
  fill: var(--header--zoomit-typography);
}
header.header-gradiant #logo_icon {
  fill: white;
}
</style>
