import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/ant-design-pro-vue/'),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

export default router;
