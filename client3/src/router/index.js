import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Documentation from '@/views/Documentation.vue';
import MyWall from '@/views/MyWall.vue';
import MyFeed from '@/views/MyFeed.vue';
import Login from '@/views/Login.vue';
import Users from '@/views/Users.vue'
import Session from '../models/Session';

//both the ../ path and the @/ path both get us to the files

Vue.use(VueRouter)

//Home and Documentation are being statically linked
//About and Shop are being dynamically linked
const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/documentation', name: 'Doc', component: Documentation },
  {path: '/login', name: 'Login', component: Login },
  {path: '/mywall', name: 'MyWall', component: MyWall },
  {path: '/feed', name: 'MyFeed', component: MyFeed },
  {path: '/users', name: 'Users', component: Users },
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

router.beforeEach( (to, from, next) => {
  console.log({ from, to })
  if(to.path == '/mywall' && !Session.user){
    Session.nextRoute = to;
    next('/login')
  }else{
    next();
  }
} )

export default router
