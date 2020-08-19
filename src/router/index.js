import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout'
Vue.use(VueRouter)
/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */
// 如首页和登录页和一些不用权限的公用页面
export const commontRouterMap = [
  {
    path: '/login',
    hidden: true, // 不在slider显示
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    hidden: true, // 不在slider显示
    component: () => import('@/views/error/404')
  },
  {
    path: '/401',
    hidden: true, // 不在slider显示
    component: () => import('@/views/error/401')
  },
  {
    path: '/',
    component: Layout,
    name: 'index',
    hidden: true, // 不在slider显示
    children: [
      {
        path: 'index',
        component: () => import('@/views/index')
      }
    ]
  }
]
// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [{
  path: '/index',
  component: Layout,
  redirect: '/index',
  meta: { title: 'Home', icon: 'el-icon-menu' }
},
{
  path: '/shop',
  component: Layout,
  name: 'Shop',
  meta: {
    title: '商品管理',
    icon: 'el-icon-goods'
  },
  children: [
    {
      path: 'warehouse', // 不加 /
      name: 'Warehouse',
      component: () => import('@/views/shop/shopwarehouse'),
      meta: { title: '商品仓库' }
    },
    {
      path: 'add', // 不加 /
      name: 'Add',
      component: () => import('@/views/shop/addshop'),
      meta: { title: '添加商品' }
    }
  ]
},
{
  path: '/order',
  component: Layout,
  name: 'Order',
  meta: {
    title: '订单管理',
    icon: 'el-icon-s-order'
  }
},
{
  path: '/operation',
  component: Layout,
  name: 'Operation',
  meta: {
    title: '运营管理',
    icon: 'el-icon-s-platform'
  },
  children: [
    {
      path: 'backstage', // 不加 /
      name: 'Backstage',
      component: () => import('@/views/operation/backstage'),
      meta: { title: '后台分类管理' }
    },
    {
      path: 'promotion', // 不加 /
      name: 'Promotion',
      component: () => import('@/views/operation/promotion'),
      meta: { title: '促销管理' }
    }
  ]
},
{
  path: 'user', // 不加 /
  name: 'User',
  component: Layout,
  // component: () => import('@/views/user/index'),
  meta: {
    title: '用户管理',
    icon: 'el-icon-user-solid'
  }
},
{
  path: '/myapp',
  component: Layout,
  name: 'Myapp',
  meta: {
    title: 'App内容管理',
    icon: 'el-icon-news'
  },
  children: [
    {
      path: 'apphome', // 不加 /
      name: 'Apphome',
      component: () => import('@/views/myapp/apphome'),
      meta: { title: 'app管理首页' }
    },
    {
      path: 'appclassify', // 不加 /
      name: 'Appclassify',
      component: () => import('@/views/myapp/appclassify'),
      meta: { title: 'app管理分类' }
    }
  ]
}]
const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  base: process.env.BASE_URL,
  routes: commontRouterMap
})
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = router()
  router.matcher = newRouter.matcher // reset router
}

export default router
