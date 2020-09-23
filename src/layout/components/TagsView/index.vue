<template>
  <div id="tags-view-container" class="tags-view-container">
    <div class="tags-view-wrapper">
      <!-- <router-link :to="this.$router">xxx</router-link> -->
      <!-- closable 是否可关闭 -->
      <el-tabs
        type="card"
        :value="$route.path"
        @tab-click="tagsClick"
        @edit="handleTabsEdit"
        closable
        class="my-tabs"
      >
        <el-tab-pane
          v-for="item in this.getTabsRoute"
          :key="item.path"
          :label="item.title"
          :name="item.path"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li>刷新页面</li>
      <li>关闭当前</li>
      <li>关闭其他</li>
      <li>关闭所有</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    console.log(this.getTabsRoute)
    window.addEventListener('beforeunload', this.saveTabsData)
    // window.addEventListener('', this.saveTagsData)
  },
  computed: {
    ...mapState({
      getTabsRoute: function () {
        return this.$store.state.MenuList.tabsValue
      }
    })
  },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [],
      editableTabsValue: '2',
      tagsViewData: []
    }
  },
  methods: {
    saveTabsData: function () {
      // console.log(this.tagsViewData)
      // return this.tagsViewData
      sessionStorage.setItem('tabsValue', this.getTabsRoute)
    },
    tagsClick: function (tab, event) {
      if (tab.name === this.$route.path) return
      this.$router.push(tab.name)
    },
    handleTabsEdit: function (targetPath, action) {
      console.log(targetPath)
      console.log(action)
      if (action === 'remove') {
        if (targetPath === '/index') return
        let nextTab = {}
        this.getTabsRoute.forEach((item, index) => {
          if (item.path === targetPath) {
            nextTab = this.getTabsRoute[index + 1] || this.getTabsRoute[index - 1]
          }
        })
        this.$store.commit('REMOVE_TABS_VALUE', targetPath)
        // 如果删除的是当前页，则进行跳转
        targetPath === this.$route.path && this.$router.push(nextTab.path)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .my-tabs {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    color: #495060;
    padding: 0 4px;
    font-size: 12px;
    margin-top: 4px;
    margin-left: 4px;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-bottom: 1px solid #dfe4ed;
  }
  /deep/ .el-tabs__item.is-active {
    border-bottom-color: $menuActiveText !important;
    background-color:$menuActiveText;
    border-color: $menuActiveText;
    color: #fff;
  }
  /deep/ .el-tabs__item:last-child {
    padding-right: 0px;
  }
  /deep/ .el-tabs__item {
      background-color:#fff;
      color: #495060;
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      font-size: 12px;
  }

}

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
