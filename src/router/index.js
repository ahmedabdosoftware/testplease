import { createRouter, createWebHistory } from 'vue-router'
import ProductDetails from '../views/products/ProductDetails'
import SingUPAndSingIn from '../views/SingUPAndSingIn'

const routes = [
  
  {
    path: '/',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetails,
  },
  {
    path: '/SingUPAndSingIn',
    name: 'SingUPAndSingIn',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SingUPAndSingIn,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
