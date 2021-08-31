import Vue from 'vue'
import App from './App.vue'
// 导入路由  
import router from './router'   //导入一个对象
// 导入状态管理
import store from './store'

// 导入插件
import './plugins'    //将plugins目录下的插件全部导入

// // 导入axios
// import request from './util/request'
// Vue.config.productionTip = false

// 导入axios实列暴漏的方法
import Api from './api/index'

Vue.config.productionTip = false
Vue.prototype.axios = Api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
