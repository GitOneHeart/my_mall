<template>
  <div class="menu-wrapper">
    <!-- 最后一级菜单 -->
    <el-menu-item
      v-if="!item.children && !item.hidden"
      :key="item.path"
      :index="item.path"
    >
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
    <el-submenu v-if="item.children && !item.hidden" :index="item.path" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta && item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <!-- 递归 -->
      <sidebar-item
        v-for="(child, index) in item.children"
        :index="item.path +'/'+child.path"
        :key="child.path + index"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data () {
    return {
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    // basePath: {
    //   type: String,
    //   default: ''
    // },
    parent: {
      type: String,
      default: ''
    }
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      // console.log(this.menu instanceof Array)
      console.log(this.item.children)
    },
    goTo (path) {
      console.log('111')
      return this.$router.replace.path
    }
  }
}
</script>
<style lang="scss">

</style>
