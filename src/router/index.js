import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/pages/Login';
import IineList from '../components/pages/IineList';
import IinebookList from '../components/pages/IinebookList';

Vue.use(Router);

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/iines", name: "IineList", component: IineList },
  { path: "/iinebooks", name: "IinebookList", component: IinebookList }
];

export default new Router({ mode: 'history', routes })
