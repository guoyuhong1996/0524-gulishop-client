import Vue from 'vue'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  el: 'App',
  render: h => h(App),
  // 注册路由
  router
})
