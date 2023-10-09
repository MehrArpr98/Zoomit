import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductTemplate from '../views/ProductTemplate.vue'
import HomeTemplate from '../views/HomeTemplate.vue'
import ProductView from '../views/ProductView.vue'
import ProductItemView from '../views/ProductItemView.vue'
import HomeItemView from '../views/HomeItemView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", name: "HomeTemplate", component: HomeTemplate, children: [
        { path: "", name: "home", component: HomeView , meta: { layout: 'default' }},
        { path: ":item", name: "homeItem", component: HomeItemView, meta: { layout: 'default' } ,
      },        
      ]
    },
    {
      path: "/product", name: "ProductTemplate", component: ProductTemplate, children: [
        { path: "", name: "product", component: ProductView , meta: { layout: 'product' }},
        { path: "list", redirect: { path: '/product/list/mobile' } },
        { path: "list/:item", name: "productItem", component: ProductItemView, meta: { layout: 'product' } ,
      },        
      ]
    },
   
  ]
})

export default router
