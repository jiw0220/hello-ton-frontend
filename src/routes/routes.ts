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
];
