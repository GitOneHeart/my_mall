<template>
  <div class="menu-wrapper">
    <template functional>
      <!-- 二级菜单 -->
      <el-submenu class="adsadasdasdasdsadsa" :index="data.path" popper-append-to-body>
        <template slot="title">
          <i :class="data.meta.icon"></i>
          <span>{{data.meta.title}}</span>
        </template>
        <!-- 二级菜单下的子菜单 -->
        <template v-for="item in data.children">
          <el-menu-item
            class="subitem cgfjhgjghjhjhjffjfg"
            :key="item.id"
            v-if="item.children.length===0"
            :index="data.path+'/'+item.path"
          >
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
          <!-- 三级菜单 -->
          <sidebar-item v-else :data="item" :key="item.id"></sidebar-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
// import path from 'path'
// import { isExternal } from '@/util/validate'
export default {
  name: 'SidebarItem',
  data () {
    return {
    }
  },
  props: {
    data: [Array, Object]
  },
  mounted () {
    this.test()
  },
  methods: {
    test () {
      console.log(this.data)
    }
    // resolvePath (routePath) {
    //   if (isExternal(routePath)) {
    //     return routePath
    //   }
    //   if (isExternal(this.basePath)) {
    //     return this.basePath
    //   }
    //   return path.resolve(this.basePath, routePath)
    // }
  }
}
</script>
<style lang="scss">

</style>
