<template>
  <template v-if="show_loader">
    <div class="w-screen h-screen flex flex-col justify-center text-center fixed inset-0">
      <div class="">
        <svg
          aria-hidden="true"
          role="status"
          class="inline w-10 h-10 mr-1 text-white animate-spin"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </template>

  <div class="container productsList mt-16 mx-auto grow" data-bind="with: productsFilter">
    <div class="breadcrump pt-0">
      <router-link :to="{ name: 'home' }"> زومیت </router-link>
      <router-link :to="{ name: 'product' }"> محصولات </router-link>
      <router-link
        :to="{
          name: 'productItem',
          params: { item: route.params.item },
          force: true,
          state: { productItemName: product_item_name }
        }"
      >
        {{ product_item_name }}
      </router-link>
    </div>
    <h1 class="mb-3 mt-1 font-bold text-2xl h-10">قیمت {{ product_item_name }}</h1>
    <div
      class="row productsList__header flex flex-row flex-wrap justify-between items-center mb-5 mt-0 pb-5 border-b border-slate-300"
    >
      <div class="col-3 w-1/4 basis-1/4">
        <p class="text-xs m-0 text-gray-400 font-light">
          <span class="fa-num">{{ proccessed_products.length }}</span> محصول پیدا شده است
        </p>
      </div>
      <div class="col-9 w-3/4 basis-3/4 flex justify-between items-center">
        <div class="">
          <label class="text-sm text-black font-light ml-1">مرتب سازی</label>
          <select
            class="bg-white text-xs text-black h-8 border border-black"
            id="sortDropdown1"
            v-model="filters.sort_based"
          >
            <option value="0">محبوب‌ترین</option>
            <option value="1">جدید‌ترین</option>
            <option value="2">ارزان‌ترین</option>
            <option value="3">گران‌ترین</option>
            <option value="4">امتیاز‌ زومیت</option>
          </select>
        </div>
        <div class="productsList__header__showType tabs"></div>
      </div>
    </div>
    <div class="row flex flex-wrap">
      <div class="c-side-bar productsList__side-bar col-3 w-1/4 basis-1/4">
        <div class="relative">
          <div class="optionsContainer optionList border-b border-slate-300 mb-3">
            <div class="optionList__items relative m-0 mb-3">
              <ul class="optionList__itemsList scrollbar-inner overflow-hidden m-0">
                <li>
                  <span class="checkbox checkbox-red">
                    <input type="checkbox" value="" id="ch00" v-model="filters.have_price" />
                    <label
                      for="ch00"
                      class="inline-block relative pr-6 px-1 text-sm font-light cursor-pointer pr-4"
                      >قیمت داشته باشد</label
                    >
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="priceRangeInFilter priceRange border-b border-slate-300 mb-3 pb-3">
            <span dir="rtl" class="priceRange__title text-gray-400 text-sm font-normal block"
              >محدوده قیمت (تومان)</span
            >
            <range-slider
              :reset_percents="reset_percents"
              @set_reset_percents="(e) => (reset_percents = e)"
              @prices="
                (e, f) => {
                  filters.max_price = e
                  filters.min_price = f
                }
              "
            />
          </div>

          <product-dynamic-filter :type="product_item_type" />
        </div>
      </div>
      <div class="col-9 w-3/4 basis-3/4 c-productsList productsList__results">
        <div class="productList__body relative">
          <div class="c-productsList__inLine" id="inRow">
            <div>
              <div>
                <div
                  class="noresult display: flex items-center mt-5 h-12 text-red-500"
                  :class="{ hidden: proccessed_products.length }"
                >
                  محصولی با این مشخصات یافت نشد
                </div>

                <product-detailes :products="proccessed_products" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onUpdated, watch } from 'vue'
import { useRoute } from 'vue-router'
import RangeSlider from '../components/RangeSlider.vue'
import ProductDetailes from '../components/ProductDetailes.vue'
import ProductDynamicFilter from '../components/ProductDynamicFilter.vue'
import ProductsArray from '../assets/jsons/ProductsArray.json'

const route = useRoute()
const show_loader = ref(false)
const reset_percents = ref(false)

const filters = reactive({
  min_price: 0,
  max_price: 128_900_000,
  sort_based: '0',
  have_price: true
})

const product_item_name = ref('')
const product_item_type = ref('')

let proccessed_products = ProductsArray

function delayFunc() {
  show_loader.value = true
  setTimeout(async () => {
    show_loader.value = false
  }, 2000)
}

async function filterProducts() {
  let newArr = ProductsArray
  newArr = newArr.filter(
    (item) =>
      item.type === product_item_type.value &&
      item.price >= filters.min_price &&
      item.price <= filters.max_price &&
      (filters.have_price ? (item.price === 0 ? false : true) : true)
  )
  if (filters.sort_based == '1') newArr.sort((a, b) => b.price - a.price)
  else if (filters.sort_based == '2') newArr.sort((a, b) => a.price - b.price)
  else if (filters.sort_based == '3') newArr.sort((a, b) => b.price - a.price)
  else if (filters.sort_based == '4') newArr.sort((a, b) => b.rate - a.rate)
  proccessed_products = newArr
}

function setupPage() {
  product_item_type.value = route.params.item
  product_item_name.value = window.history.state.productItemName
    ? window.history.state.productItemName
    : 'گوشی'
  filterProducts()
}

watch(
  filters,
  async () => {
    await delayFunc()
    filterProducts()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { deep: true }
)

watch(product_item_type, () => {
  filters.min_price = 0
  filters.max_price = 128_900_000
  filters.sort_based = '0'
  reset_percents.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(setupPage)
onUpdated(setupPage)
</script>
<style>
.breadcrump a {
  color: #666;
  margin-left: 14px;
  position: relative;
  font-size: 15px;
  font-weight: 300;
}
.breadcrump a:before {
  display: inline-block;
  width: 0;
  height: 0;
  border: inset 4px;
  content: '';
  border-left-width: 0;
  border-right-style: solid;
  border-color: transparent #ccc transparent transparent;
  position: absolute;
  left: -8px;
  top: 6px;
  border-radius: 3px;
}
.breadcrump a:last-child:before {
  display: none;
}
/* a:hover,
a:focus{
  color: #e51a2d;
  text-decoration: none;
} */
.productsList label {
  font-family: 'Vazir-Thin';
}
.productsList select:focus {
  color: #ff0025;
  outline: none;
}
.checkbox input[type='checkbox'] {
  opacity: 0;
  width: 0;
  margin: 0;
}

.checkbox label::before {
  content: '';
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  right: 0;
  margin-right: 0;
  border: 1px solid #ccc;
  border-radius: 0;
  background-color: #fff;
  -webkit-transition:
    border 0.15s ease-in-out,
    color 0.15s ease-in-out;
  transition:
    border 0.15s ease-in-out,
    color 0.15s ease-in-out;
  margin-top: 0;
  vertical-align: middle;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.checkbox input[type='checkbox']:checked ~ label::after {
  content: '';
  width: 6px;
  height: 6px;
  top: 50%;
  position: absolute;
  background: #ff0025;
  right: 2px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.fa-num {
  font-family: 'Vazir-FD';
}

@media (max-width: 1300px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
}
@media (min-width: 1300px) {
  .productsList .productsList__results {
    width: calc(100% - 236px);
    -ms-flex-preferred-size: calc(100% - 236px);
    flex-basis: calc(100% - 236px);
    max-width: calc(100% - 236px);
    position: relative;
  }
  .productsList__side-bar {
    width: 236px;
    -ms-flex-preferred-size: 236px;
    flex-basis: 236px;
    max-width: 236px;
    padding-right: 0;
  }
}
</style>
