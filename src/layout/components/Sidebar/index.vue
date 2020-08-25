<template>
  <div :class="{'has-logo':showlogo}">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="ActiveColor"
        :collapse-transition="false"
        mode="vertical"
        router
      >
        <template v-for="item of getLeftMenu">
          <el-menu-item :index="item.path" :key="item.id" v-if="item.children.length === 0">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
          <SidebarItem v-else :key="item.id" :data="item" />
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
// import {  } from 'vuex'
// import { commontRouterMap, asyncRouterMap } from '@/router'
import SidebarItem from './SidebarItem'
import logo from './logo'
import variables from '@/assets/styles/variables.scss'
export default {
  data () {
    return {
      ActiveColor: '#1890ff' // 左侧菜单栏文字点击颜色
    }
  },
  components: {
    logo,
    SidebarItem
  },
  watch: {
  },
  computed: {
    // 路由表
    getLeftMenu: function () {
      const data = localStorage.getItem('saveData')
      // console.log()
      const menudata = JSON.parse(data).MenuList.menulist
      console.log(menudata)
      return menudata
      // return this.$store.state.MenuList.menulist
    },
    // is显示logo
    showlogo () {
      return this.$store.state.settings.sidebarLogo
    },
    // 侧边栏展开/收缩
    isCollapse () {
      return false
    },
    getPath () {
      return this.$route.path
    },
    // 样式
    variables () {
      return variables
    }
  },
  created () {
    console.log(this.getLeftMenu)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
