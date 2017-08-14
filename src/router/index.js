import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import editPage from '../components/EditPage';
import newFilePage from '../components/NewFilePage';

Vue.use(Router);


export default new Router({
  routes: [{
    path: '/',
    name: 'newFilePage',
    component: newFilePage,
  },
  {
    path: '/editPage',
    name: 'editPage',
    component: editPage,
    beforeEnter: (to, from, next) => {
      store.dispatch('machineTranslate');
      next();
    },
  }],
});
