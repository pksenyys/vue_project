import { createRouter, createWebHistory } from 'vue-router'

import UsersPage from '..//pages/UsersPage.vue'
import NotFoundPage from '..//pages/NotFoundPage.vue'
import MoviesPage from '..//pages/MoviesPage.vue'
import TicketsPage from '..//pages/TicketsPage.vue'
import LoginPage from '..//pages/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users-page',
      component: async () => await UsersPage,
    },
    {
      path: '/movies',
      name: 'movies-page',
      component: async () => await MoviesPage,
    },
    {
      path: '/tickets',
      name: 'tickets-page',
      component: async () => await TicketsPage,
    },
    {
      path: '/login',
      name: 'login-page',
      component: async () => await LoginPage,
    },




    { path: '/:pathMatch(.*)*', component: async () => await NotFoundPage },
  ],
})

export default router