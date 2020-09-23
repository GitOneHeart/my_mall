import Vue from 'vue'
import Vuex from 'vuex'
// modules
import app from './modules/app.js'
import settings from './modules/settings'
import user from './modules/user'
import MenuList from './modules/menuList'
import createPersiste from 'vue-savedata'
import getters from './getters'
Vue.use(Vuex)
const persiste = createPersiste({
  LS: {
    module: MenuList,
    storePath: 'MenuList'
  }
})
export default new Vuex.Store({
  getters,
  modules: {
    app,
    settings,
    user, // 用户信息
    MenuList
  },
  plugins: [persiste]
})
