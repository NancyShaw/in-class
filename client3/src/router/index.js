import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Documentation from '@/views/Documentation.vue';
import MyWall from '@/views/MyWall.vue';

//both the ../ path and the @/ path both get us to the files

Vue.use(VueRouter)

//Home and Documentation are being statically linked
//About and Shop are being dynamically linked
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/documentation', name: 'Doc', component: Documentation },
  {path: '/mywall', name: 'MyWall', component: MyWall },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
