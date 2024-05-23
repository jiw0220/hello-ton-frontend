import { nextTick } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

export default function createAppRouter(routes: any) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { left: 0, top: 0 };
      }
    },
  });

  router.beforeEach(function (to, from, next) {
    if (!from || to.path !== from.path) {
      if (window.$loadingBar) {
        window.$loadingBar.start();
      }
    }
    next();
  });

  router.afterEach(function (to, from) {
    if (!from || to.path !== from.path) {
      if (window.$loadingBar) {
        window.$loadingBar.finish();
      }
      if (to.hash && to.hash !== from.hash) {
        nextTick(() => {
          const el = document.querySelector(to.hash);
          if (el) el.scrollIntoView();
        });
      }
    }
  });

  return router;
}

export const router = createAppRouter(routes);
