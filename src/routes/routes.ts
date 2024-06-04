export const routes = [
  {
    name: '',
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    name: 'test',
    path: '/test',
    component: () => import('@/pages/test/index.vue'),
  },
  {
    name: 'wallet',
    path: '/wallet',
    component: () => import('@/pages/wallet/index.vue'),
  },
];
