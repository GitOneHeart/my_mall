import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout/index'
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
const routes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect')
  //     }
  //   ]
  // },
  {
    path: '/',
    redirect: '/login'
  },
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
    path: '',
    component: Layout,
    // hidden: true, // 不在slider显示
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/index'),
        meta: { title: '首页' }
      },
      {
        path: '/shop',
        name: 'Shop',
        // component: () => import('@/views/shop/shopwarehouse'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/shop/warehouse',
        name: 'Warehouse',
        component: () => import('@/views/shop/shopwarehouse'),
        meta: {
          title: '商品仓库'
        }
      }, {
        path: '/shop/add',
        name: 'Add',
        component: () => import('@/views/shop/addshop'),
        meta: {
          title: '添加商品'
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/order/order'),
        meta: {
          title: '订单管理'
        }
      },
      {
        path: '/operation/backstage',
        name: 'Backstage',
        component: () => import('@/views/operation/backstage'),
        meta: {
          title: '后台分类管理'
        }
      },
      {
        path: '/operation/promotion',
        name: 'Promotion',
        component: () => import('@/views/operation/promotion'),
        meta: {
          title: '促销管理'
        }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/user'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/myapp/apphome',
        name: 'Apphome',
        component: () => import('@/views/myapp/apphome'),
        meta: {
          title: 'app管理首页'
        }
      },
      {
        path: '/myapp/appclassify',
        name: 'Appclassify',
        component: () => import('@/views/myapp/appclassify'),
        meta: {
          title: 'app管理'
        }
      }
    ]
  }
]
// 异步挂载的路由
// 动态需要根据权限加载的路由表

const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  base: process.env.BASE_URL,
  routes
})

export default router
