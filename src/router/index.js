import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
//import main from '@/component/main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path:'/home',
    name:'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children:[
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
        path: '/managecategory',
        name: 'managecategory',
        component: () => import(/* webpackChunkName: "Article" */ '../views/ManageCategory.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
          requireAuth: true
       },
      },
      
    ]
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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(store.state.token||localStorage.getItem('token')){
      //console.log(localStorage.getItem('token'))      
      next()
    }else{
      next({path:'/login',query:{redirect:to.fullPath}})
    }
  }else{
    next()
  }
})

export default router
