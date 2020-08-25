<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">qgs的系统</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号">
          <i class="el-input__icon input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码">
          <i class="el-input__icon input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input auto-complete="off" placeholder="验证码" style="width: 63%">
          <i class="el-input__icon input-icon"></i>
        </el-input>
        <div class="login-code">
          <img src />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.remeberme" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2019 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        password: 'admin123',
        remeberme: true,
        code: '',
        uuid: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ]
        // code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      }
    }
  },
  methods: {
    handleLogin: function () {
      console.log('登录校验')
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          // this.loading = true
          // this.$axios.get('/userInfo/getUserInfo').then(res => {
          //   console.log(res)
          // })
          // 登录接口获取token
          const token = 'c:app=qwertyuiopasdfghjklzxcvbnm'
          // const token = ''
          if (!token) {
            this.$message.error('token获取失败')
            return
          }
          this.$store.commit('storeToken', token)
          // 获取到token，保存到sessionstorage中
          this.$message.success('登录成功')
          // 跳转到 index页面
          this.$router.push('/index')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/image/login-background.jpg");
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
