import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import TemporaryPage from '@/views/TemporaryPage.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/reader',
      name: 'reader',
      component: TemporaryPage,
    },
    {
      path: '/library',
      name: 'library',
      component: TemporaryPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: TemporaryPage,
    },
    {
      path: '/404',
      name: '404',
      component: TemporaryPage,
    },
  ]
})

export default router
