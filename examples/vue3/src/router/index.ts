import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import testPage from '../views/test'
import homePage from '../views/home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/test',
    name: 'test',
    component: testPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
