import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Products from '../views/Products.vue'
// import Profile from '../views/Profile.vue'
import Cart from '../views/Cart.vue'
// import { from } from 'core-js/core/array'

const Profile = () => import("../views/Profile.vue")
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
 
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/Products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Products
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  },
  {
    path: '/Cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to,from,next) => {
  const publicPages = ["/","/Login","/SignUp"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    next("/Login");
  }else {
    next();
  }
});
export default router
