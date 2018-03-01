// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja';
import Icon from 'vue-awesome/components/Icon';

import 'element-ui/lib/theme-chalk/index.css';
import 'vue-awesome/icons'


Vue.component('icon', Icon);

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale});

OAuth.initialize('s-1cZbckevfw8IE0TiFTt8rExZM');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
