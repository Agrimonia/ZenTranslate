import Vue from 'vue';
import Router from 'vue-router';
import editPage from '../components/EditPage';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: editPage,
  }],
});
