import store from './store'
import router from './router'
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()

  if (to.path !== '/login') {
    if (!store.state.user.token) {
      alert('请先登录')
      return next('/login')
    }
    if (to.meta.isTabsPage) {
      const tabsItem = {
        name: to.name,
        path: to.path,
        title: to.meta.title
      }
      store.commit('ADD_TABS_VALUE', tabsItem)
    }
  }
  next()
  // next()
})
