<template>
  <div class="dashboard-editor-container">111</div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    login: function () {
      this.$axios.post('/permission/add', {
        params: {
          permissionId: '001',
          permissionName: 'admin'
        }
      }).then(res => {
        console.log(res)
      })
    },
    onload: function () {
      this.$axios.get('/order/list', {
        params: {
          orderStatus: '',
          page: 1,
          size: 10
        }
      }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    // this.login()
    // this.onload()
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
