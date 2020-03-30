// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global_ from './components/global.vue'
import '../settings.js';
import weui from 'weui.js'
import 'weui'
Vue.prototype.$weui = weui
import axios from 'axios';
import echarts from "echarts";
Vue.prototype.$echarts = echarts;



import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
