import Vue from 'vue'
import App from './App.vue'

// 导入路由  
import router from './router'   //导入一个对象
// 导入状态管理
import store from './store'

// 导入插件
import './plugins'    //将plugins目录下的插件全部导入

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
