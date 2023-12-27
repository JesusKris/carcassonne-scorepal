import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      meta: {
        title: 'Carcassonne ScorePal'
      },

      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      meta: {
        title: 'Main Menu | Carcassonne ScorePal'
      },
      component: () => import('../views/MainMenuView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title || 'Carcassonne ScorePal'
  }
})

export default router
