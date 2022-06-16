import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../views/homeIndex.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HomeIndex
  },
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

// 抛出路由实例, 在 main.js 中引用
export default router