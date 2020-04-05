import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import VueLazyload from 'vue-lazyload'

import App from './App'
import store from './store'
import router from './router'
import Http from '@/utils/request'
import popup from '@/utils/popup'

import '@/permission' // permission control

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(VueLazyload)
Vue.prototype.$http = Http
Vue.prototype.$popup = popup

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
