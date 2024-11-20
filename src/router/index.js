import { createRouter, createWebHistory } from 'vue-router'

// main layout pages
import MainPages from '@/shared/layouts/MainPages.vue'
import ProductDetails from '../views/products/ProductDetails'
import ProductOfCategory from '../views/ProductOfCategory/ProductOfCategory'
import CartPage from '../views/cartPage/CartPage'
import CheckOut from '../views/checkout/CheckOut'

// singn page
import SingUPAndSingIn from '../views/sign/SingUPAndSingIn.vue'

const routes = [
  {
    path: '/SingUPAndSingIn',
    name: 'SingUPAndSingIn',
    component: SingUPAndSingIn,
  },
  {
    path: '/',
    component: MainPages,
    children: [
      {
        path: '',
        name: 'shop',
        component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
      },
      {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails,
      },
      {
        path: '/ProductOfCategory/:id',
        name: 'ProductOfCategory',
        component: ProductOfCategory,
      },
      {
        path: '/CartPage',
        name: 'CartPage',
        component: CartPage,
      },
      {
        path: '/CheckOut',
        name: 'CheckOut',
        component: CheckOut,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from)=>{
  if(to.fullPath != from.fullPath)
    window.scrollTo(0,0);

})
export default router
