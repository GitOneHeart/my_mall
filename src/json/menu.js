const menulist = [
  {
    name: 'Index',
    path: '/index',
    component: () => import('@/views/index'),
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: []
  },
  {
    name: 'Shop',
    path: '/shop',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    id: 1000001,
    meta: {
      title: '商品管理',
      icon: 'el-icon-goods'
    },
    children: [
      {
        name: 'Warehouse',
        path: 'warehouse',
        hidden: false,
        id: 101,
        component: () => import('@/views/shop/shopwarehouse'),
        meta: {
          title: '商品仓库',
          icon: 'user'
        },
        children: []
      },
      {
        name: 'Add',
        path: 'add',
        hidden: false,
        id: 102,
        meta: {
          title: '添加商品',
          icon: 'peoples'
        },
        children: []
      }
    ]
  },
  {
    name: 'Order',
    path: '/order',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    id: 1000012122,
    meta: {
      title: '订单管理',
      icon: 'el-icon-s-order'
    },
    children: []
  },
  {
    name: 'Operation',
    path: '/operation',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    id: 100213122,
    meta: {
      title: '运营管理',
      icon: 'el-icon-s-platform'
    },
    children: [
      {
        name: 'Backstage',
        path: 'backstage',
        hidden: false,
        id: 12142141231,
        meta: {
          title: '后台分类管理',
          icon: 'build'
        },
        children: []
      },
      {
        name: 'Promotion',
        path: 'promotion',
        hidden: false,
        id: 1131231321,
        meta: {
          title: '促销管理',
          icon: 'code'
        },
        children: []
      }
    ]
  },
  {
    name: 'User',
    path: '/user',
    hidden: false,
    component: 'Layout',
    id: 13123424142,
    meta: {
      title: '用户管理',
      icon: 'el-icon-user-solid'
    },
    children: []
  },
  {
    name: 'Myapp',
    path: '/myapp',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    id: 100241214214,
    meta: {
      title: 'App内容管理',
      icon: 'el-icon-news'
    },
    children: [
      {
        name: 'Apphome',
        path: 'apphome',
        hidden: false,
        id: 10012142142114,
        meta: {
          title: 'app管理首页',
          icon: 'build'
        },
        children: []
      },
      {
        name: 'Appclassify',
        path: 'appclassify',
        hidden: false,
        id: 100982731097114,
        meta: {
          title: 'app管理分类',
          icon: 'code'
        },
        children: []
      }
    ]
  }
]
export default menulist
