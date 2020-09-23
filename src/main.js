import Vue from 'vue'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './assets/icons' // icon
import './permission'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui' // ElementUI
// import 'element-ui/lib/theme-chalk/index.css'

import VueAxios from 'vue-axios'
import Config from './util/request'
import '@/assets/styles/index.scss' // global css
// import '@/assets/styles/ruoyi.scss' // ruoyi css
// Fragment
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

Vue.prototype.VueAxios = VueAxios
console.log(Config.BASE_URL + '----当前配置的地址')
// axios.defaults.baseURL = 'https://easy-mock.sucaidaohang.com/mock/5f36119e691b5e2a6b16c2b6/minimall'
// axios.defaults.baseURL = 'http://112.126.87.221:8280'
console.log(Config.BASE_URL)
const Axios = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 30000,
  // responseType: 'json',
  withCredentials: false,
  headers: {
    Authorization: 'apikey0001'
  }
})
// axios拦截器
Axios.interceptors.request.use(response => {
  console.log(response)
  // return response
  // response.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(response)

  // return response
  // if (res.status === 0) {
  //   return res.data
  // } else if (res.status === 10) {
  //   console.log('yic')
  // }
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})
Vue.prototype.$axios = Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
