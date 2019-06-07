import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/components/pages/Index.vue';
import Login from '@/components/pages/Login.vue';
import SignUp from '@/components/pages/SignUp.vue';
import BlogNew from '@/components/pages/BlogNew.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/sign_up', component: SignUp },
  { path: '/blogs/new', component: BlogNew },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
