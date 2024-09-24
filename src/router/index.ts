import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/user',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/user/index.vue')
        },
      ]
    },

  ]
})

export default router
