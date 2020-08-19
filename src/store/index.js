import Vue from 'vue'
import Vuex from 'vuex'
// modules
// import app from './modules/app.js'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // app,
    settings,
    user, // 用户信息
    tagsView
  }
})
