import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    alias: '/login',
    component: Login,
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Index' && !localStorage.isAuth) next({ name: 'Login' });
  else next();
});

export default router;
