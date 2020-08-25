import store from './store'
import router from './router'
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  console.log(store)
  if (!store.state.user.token) return next('/login')
  next()
  // next()
})
