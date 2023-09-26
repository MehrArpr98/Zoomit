<template>
  <div class="sticky top-0 w-full z-50">
    <header
      class="relative py-0 px-6 2.4rem h-16 flex items-center justify-between duration-300"
      :class="{ 'header-bg': !transparentHeader, 'header-gradiant': transparentHeader }"
    >
      <div class="flex flex-wrap items-center">
        <router-link :to="{ name: 'home' }" class="flex">
          <svg width="106" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 25.16">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="z-logo"
                  d="M13.49,0H43.17a0,0,0,0,1,0,0L28.94,16H21.62a0,0,0,0,1,0,0L30.9,5.56a0,0,0,0,0,0,0H8.58L13.47,0h0"
                ></path>
                <polygon
                  class="z-logo"
                  points="29.71 25.16 0 25.16 14.25 9.16 21.6 9.16 12.27 19.62 34.62 19.62 29.71 25.16"
                ></polygon>
                <polygon
                  class="z-text"
                  points="62.27 6.16 49.64 6.16 52.78 2.66 70.47 2.66 56.3 19 69.47 19 67.19 22.5 48.1 22.5 62.27 6.16"
                ></polygon>
                <path
                  class="z-text"
                  d="M77.7,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49a5.62,5.62,0,0,1,1.71-4.12A5.62,5.62,0,0,1,77.7,2.66h8.17A5.62,5.62,0,0,1,90,4.37,5.62,5.62,0,0,1,91.7,8.49v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,77.7,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33H77.7a2.33,2.33,0,0,0-2.33,2.33Z"
                ></path>
                <path
                  class="z-text"
                  d="M101.17,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49A5.62,5.62,0,0,1,97,4.37a5.62,5.62,0,0,1,4.12-1.71h8.17a5.62,5.62,0,0,1,4.12,1.71,5.62,5.62,0,0,1,1.71,4.12v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,101.17,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33h-8.17a2.33,2.33,0,0,0-2.33,2.33Z"
                ></path>
                <rect class="z-text" x="143.52" y="2.66" width="3.5" height="19.83"></rect>
                <polygon
                  class="z-text"
                  points="161.83 6.16 161.83 22.5 158.33 22.5 158.33 6.16 150.16 6.16 150.16 2.66 170 2.66 170 6.16 161.83 6.16"
                ></polygon>
                <polygon
                  class="z-text"
                  points="136.21 2.66 129.32 9.35 122.44 2.66 118.82 2.66 118.82 22.5 122.32 22.5 122.32 7.19 129.32 13.83 136.32 7.19 136.32 22.5 139.82 22.5 139.82 2.66 136.21 2.66"
                ></polygon>
              </g>
            </g></svg
        ></router-link>
        <nav class="flex flex-nowrap items-center whitespace-nowrap">
          <button
            type="button"
            class="MenuDesktop_button py-1 px-4 cursor-pointer w-32 h-8 border-0 text-xs"
          >
            <div class="flex justify-center items-center gap-2">
              <svg
                class="MenuDesktop_buttonSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  d="M8 0v3H6V0h2zM4 0v3H2V0h2zm8 0v3h-2V0h2zM15 5H1c-.6 0-1 .4-1 1v7c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3v-2c1.7 0 3-1.3 3-3V6c0-.6-.4-1-1-1zm-1 3c0 .6-.4 1-1 1V7h1v1z"
                ></path></svg
              ><span class="text-sm font-black">زومیت من</span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 6 6"
                    width="8"
                    height="8"
                    class="MenuDesktop_itemSvg"
                  >
                    <path
                      d="M3.75 0L2.25 0 2.25 2.25 0 2.25 0 3.75 2.25 3.75 2.25 6 3.75 6 3.75 3.75 6 3.75 6 2.25 3.75 2.25z"
                    ></path></svg
                  ><span class="MenuDesktop_itemText text-sm font-black"> محصولات</span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 6 6"
                    width="8"
                    height="8"
                    class="MenuDesktop_itemSvg"
                  >
                    <path
                      d="M3.75 0L2.25 0 2.25 2.25 0 2.25 0 3.75 2.25 3.75 2.25 6 3.75 6 3.75 3.75 6 3.75 6 2.25 3.75 2.25z"
                    ></path></svg
                  ><span class="MenuDesktop_itemText text-sm font-black">فناوری</span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 6 6"
                    width="8"
                    height="8"
                    class="MenuDesktop_itemSvg"
                  >
                    <path
                      d="M3.75 0L2.25 0 2.25 2.25 0 2.25 0 3.75 2.25 3.75 2.25 6 3.75 6 3.75 3.75 6 3.75 6 2.25 3.75 2.25z"
                    ></path></svg
                  ><span class="MenuDesktop_itemText text-sm font-black">زومیت</span>
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

            <!--  -->

            <!--  -->
          </ul>

          <button
            class="MenuDesktop_button flex justify-center items-center gap-1 cursor-pointer w-full h-full border-0 outline-0 py-0.5 px-1.5 gap-1"
          >
            <div
              class="MenuDesktop_svgContainer flex justify-center items-center w-5 h-5 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
                <path
                  d="M18.449 16.751l-4.586-4.586a7.222 7.222 0 1 0-1.7 1.7l4.586 4.586zM2.4 8A5.6 5.6 0 1 1 8 13.6 5.6 5.6 0 0 1 2.4 8z"
                  transform="translate(2 2)"
                ></path>
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
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="8"
                height="8"
                class="w-3 h-3 z-10"
              >
                <path
                  d="M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0z"
                ></path>
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
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="8"
                height="8"
                class="w-3 h-3 z-10"
              >
                <path
                  d="M12.8 0a12.8 12.8 0 1 0 12.8 12.8A12.838 12.838 0 0 0 12.8 0zM1.6 12.8A11.123 11.123 0 0 1 12 1.68V24A11.253 11.253 0 0 1 1.6 12.8z"
                  transform="translate(3 3)"
                ></path></svg
              ><input
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
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="8"
                height="8"
                class="w-3 h-3 z-10"
              >
                <path
                  d="M9 14v2H7v-2h2zm3.949-2.395l1.415 1.413-1.414 1.415-1.415-1.414 1.414-1.414zm-9.968-.07l1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414zM8 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm8 3v2h-2V7h2zM2 7v2H0V7h2zm1.05-5.293L4.465 3.12 3.05 4.535 1.636 3.121 3.05 1.707zm9.83-.07l1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414zM9 0v2H7V0h2z"
                ></path></svg
              ><input
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            fill="var(--grey-1)"
          >
            <path
              d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1.333C4.324 1.333 1.333 4.324 1.333 8c0 1.958.854 3.716 2.203 4.937.443-1.316 1.665-2.27 3.13-2.27h2.667c1.466 0 2.69.954 3.132 2.269 1.348-1.22 2.202-2.979 2.202-4.936 0-3.676-2.991-6.667-6.667-6.667zM8 4c1.104 0 2 .995 2 2.222v.556C10 8.005 9.104 9 8 9s-2-.995-2-2.222v-.556C6 4.995 6.896 4 8 4z"
              transform="translate(-716 -1131) translate(716 1131)"
            ></path>
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

const transparentHeader = ref(true)
const theme = ref('light')
const hoverSubmenuIndex = ref(-1)
const submenuItems0 = submenuItems0Array
const submenuItems1 = submenuItems1Array
const submenuItems5 = submenuItems5Array

watch(theme, (newThem) => {
  setTheme(newThem)
})

function setTheme(newThem) {
  const hour = new Date().toString().split(' ')[4].split(':')[0]
  var theme = ''
  if (newThem === 'system') theme = hour < 18 && hour > 6 ? 'light' : 'dark'
  else theme = newThem

  document.body.setAttribute('data-theme', theme)
}

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
  background-color: var(--white);
}
header ul a.active .MenuDesktop_itemText,
header ul a:hover .MenuDesktop_itemText {
  color: var(--text-hover);
}

header .MenuDesktop_itemSvg,
.MenuDesktop_button .MenuDesktop_buttonSvg,
header.header-bg .MenuDesktop_svgContainer svg {
  fill: var(--white);
}

header.header-bg .MenuDesktop_itemSvg,
header.header-bg .MenuDesktop_button .MenuDesktop_buttonSvg,
header .MenuDesktop_svgContainer svg {
  fill: var(--header--menu-link);
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
.ToggleTheme label[data-theme='light'].active svg {
  fill: var(--warning-1);
}
.ToggleTheme label[data-theme='dark'].active svg {
  fill: var(--info);
}
.ToggleTheme label[data-theme='system'].active svg {
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
</style>
