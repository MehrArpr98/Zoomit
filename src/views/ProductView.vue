<template>
  <div class="pt-12">
    <div class="c-search-box relative">
      <div class="search-box relative">
        <div
          class="seach-box__form relative flex align-center justify-center items-center m-auto relative max-w-full"
        >
          <div class="seach-box__field ml-2.5">
            <input
              type="text"
              name="search"
              id="productsSearch"
              class="autocomplete-input text-base text-gray-500 h-14 w-full py-0 px-2.5 ml-0 border-0 focus:outline-0"
              placeholder="جستجو کن"
              autocomplete="off"
            />
            <div id="searchResultList" class="seach-box__searchResultList">
              <ul
                id="ui-id-5"
                tabindex="0"
                class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                style="display: none"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="line-seprator container my-2 border-b border-slate-300" />

    <div class="popularProducts products-categorization">
      <div class="container pt-16 pb-9 mx-auto grow px-0">
        <h2 class="font-bold text-2xl text-center mt-0 mb-2.5 block">محبوب‌ترین محصولات</h2>
        
          <div class="tabs__content">
            <filterable-swiper
              filter_item=""
              :perView="4"
              :array="NewestProductsArray"
              type="product"
              :buttons="ProductsButtonsArray"
              button_type="link"
            />
          </div>
        
      </div>
    </div>

    <hr class="line-seprator container my-2 border-b border-slate-300" />

    <div class="newProducts products-categorization">
      <div class="container pt-16 pb-9 mx-auto grow px-0">
        <h2 class="font-bold text-2xl text-center mt-0 mb-2.5 block">جدیدترین محصولات</h2>
        
          <div class="tabs__content">
            <filterable-swiper
              filter_item=""
              :perView="4"
              :array="NewestProductsArray"
              type="product"
              :buttons="ProductsButtonsArray"
              button_type="link"
            />
          </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
/* `import { ref } from 'vue'` */
import FilterableSwiper from '../components/FilterableSwiper.vue'
import NewestProductsArray from '../assets/jsons/NewestProductsArray.json'
import ProductsButtonsArray from '../assets/jsons/ProductsButtonsArray.json'
</script>
<style>
.search-box {
  height: 580px;
  background: #000 url('https://cdn01.zoomit.ir/Themes/Zoomit.ir/UI/src/mediaFiles/img/camera.jpg')
    no-repeat top center/cover;
}
.search-box .seach-box__form {
  width: 877px;
  height: calc(100% - 68px);
  z-index: 3;
}
.search-box .seach-box__form .seach-box__field {
  width: calc(100% - 64px);
}

.search-box:after {
  content: '';
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15) !important;
  z-index: 1;
}
.products-categorization .container{
  padding-right: 0;
  padding-left: 0;
}
.products-categorization .tabs__bottons li a {
  font-family: 'Vazir-thin';
}
</style>
