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
        router
        mode="vertical"
      >
        <SlidebarItem v-for="(route, index) in getrouters" :key="route.path + index" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
// import {  } from 'vuex'
import { commontRouterMap, asyncRouterMap } from '@/router'
import SlidebarItem from './SidebarItem'
import logo from './logo'
import variables from '@/assets/styles/variables.scss'
export default {
  data () {
    return {
      ActiveColor: '#ffd04b' // 左侧菜单栏文字点击颜色
    }
  },
  components: {
    logo,
    SlidebarItem
  },
  computed: {
    // 路由表
    getrouters () {
      console.log(typeof (commontRouterMap))
      console.log(typeof (asyncRouterMap))
      return commontRouterMap.concat(asyncRouterMap)
    },
    // is显示logo
    showlogo () {
      return this.$store.state.settings.sidebarLogo
    },
    // 侧边栏展开/收缩
    isCollapse () {
      return false
    },
    // 样式
    variables () {
      return variables
    }
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      console.log(this.getrouters)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
