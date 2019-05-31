// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
// import Share from 'vue-social-share';
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
import 'vue-social-share/dist/client.css';
// Vue.use(Share)
Vue.config.errorHandler=(res)=>{
	console.log(res)
}
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
