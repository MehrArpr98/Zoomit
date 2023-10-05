import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductTemplate from '../views/ProductTemplate.vue'
import ProductView from '../views/ProductView.vue'
import ProductItemView from '../views/ProductItemView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'default'
      }
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
