import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Options from '../views/Options.vue';
import Login from '../views/Login.vue';
import QrAccess from '../views/QrAccess.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/options',
    name: 'Options',
    component: Options,
  },
  {
    path: '/qr',
    name: 'QR',
    component: QrAccess,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
