import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../views/dock-auth/LoginView.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/dock-pags/HomeView.vue')
      },
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
