<template>
  <div class="dashboard-editor-container">
    欢迎光临
  </div>
</template>

<script>
import menuDataJson from '@/json/menu'
export default {
  name: 'index',
  data () {
    return {
      menuList: []
    }
  },
  created () {
    this.getLeftMenu() // 获取菜单数据
    // this.onload()
    // this.login()
  },
  methods: {
    getLeftMenu: function () {
      this.MenuList = menuDataJson
      console.log(this.MenuList)
      this.$store.commit('getmenulist', Object.assign(this.MenuList))
      // this.$axios.get('/mock/menu-shop.json').then(res => {
      //   if (res.status === 200) {
      //     this.menuList = res.data.data
      //     this.$store.commit('getmenulist', this.menuList)
      //   }
      // })
    }
    // login: function () {
    //   this.$axios.post('/permission/add', {
    //     params: {
    //       permissionId: '001',
    //       permissionName: 'admin'
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // },
    // onload: function () {
    //   this.$axios.get('/order/list', {
    //     params: {
    //       orderStatus: '',
    //       page: 1,
    //       size: 10
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style scoped lang='scss'>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
