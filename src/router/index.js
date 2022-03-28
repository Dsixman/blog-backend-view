import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    path: '/manageblog',
    name: 'ManageBlog',
    component: () => import(/* webpackChunkName: "Article" */ '../views/ManageBlog.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  },
  {
    path: '/editblog',
    name: 'EditBlog',
    component: () => import(/* webpackChunkName: "Article" */ '../views/EditBlog.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  },
  {
    path: '/managetag',
    name: 'managetag',
    component: () => import(/* webpackChunkName: "Article" */ '../views/ManageTag.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: true
   },
  },
  {
    path: '/managecategory',
    name: 'managecategory',
    component: () => import(/* webpackChunkName: "Article" */ '../views/ManageCategory.vue'),
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
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    console.log('state.token')
    console.log(store.state.token)
    if(store.state.token){
      next()
    }else{
      next({path:'/login',query:{redirect:to.fullPath}})
    }
  }else{
    next()
  }
})

export default router
