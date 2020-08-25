import Vue from 'vue'
import Vuex from 'vuex'
// modules
// import app from './modules/app.js'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'
import MenuList from './modules/menuList'
import createPersiste from 'vue-savedata'

Vue.use(Vuex)
const persiste = createPersiste({
  LS: {
    module: MenuList,
    storePath: 'MenuList'
  }
})
export default new Vuex.Store({
  modules: {
    // app,
    settings,
    user, // 用户信息
    tagsView,
    MenuList
  },
  plugins: [persiste]
})
