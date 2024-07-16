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
    name: 'oauth',
    path: '/oauth',
    component: () => import('@/pages/oauth/index.vue'),
  },
  {
    name: 'ton',
    path: '/ton',
    component: () => import('@/pages/ton/index.vue'),
  },
  {
    name:'shake',
    path:'/shake',
    component:()=>import('@/pages/shake/index.vue')
  }
];
