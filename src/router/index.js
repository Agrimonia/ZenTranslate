import Vue from 'vue';
import Router from 'vue-router';
import editPage from '../components/EditPage';

Vue.use(Router);


export default new Router({
  routes: [{
    path: '/',
  },
  {
    path: '/editPage',
    name: 'editPage',
    component: editPage,
  }],
});
