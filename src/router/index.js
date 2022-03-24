import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedback',
    name: 'Feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "feedback" */ '../views/Feedback.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import(/* webpackChunkName: "notice" */ '../views/Notice.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
