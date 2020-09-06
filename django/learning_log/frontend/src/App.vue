<template>
  <div id="app">
    <div class="nav">
      <div class="nav-content clear">
        <span class="logo"> Learning Log</span>
        <span class="home" @click="goHome">Home</span>
        <span v-if="signinShow" class="signin" >
          <router-link :to="{ path: 'login' }" @click.native="goLogin" class="routerStyle clear">Sign in</router-link>
        </span>
        <span v-if="signoutShow" class="signout" @click="goLogout">Sign out</span>
        <span class="reg-login">
          <router-link :to="{ path: 'login' }" @click.native="goRegister" class="routerStyle"  :class="{ unClick: this.signoutShow }">{{title}}</router-link>
         </span>
        <span class="topics" @click="goTopics">Topics</span>
      </div>
    </div>
    <router-view :isSignin='issignin' @recieve='changeisSign' @loginOK='recieveLogin'/>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      title: 'Register',
      signinShow: true,
      signoutShow: false,
      issignin: true
    }
  },
  methods: {
    goHome() {
      this.$router.push({name: 'HelloWorld'})
    },
    goLogin() {
      this.issignin = true
    },
    goLogout() {
      this.$axios.post('/api/users/logout/').then((res) => {
        if (res.data.code === false) {
          window.localStorage.setItem('loginStatus', 'logout')
          this.signinShow = true
          this.signoutShow = false
          this.title = 'Register'
          this.$router.push({name: 'HelloWorld'})
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    goRegister() {
      this.issignin = false
    },
    goTopics() {
      // 判断是否登录 是的话跳转到topics，不是的话跳转到登登录
      if (window.localStorage.getItem('loginStatus') === 'login') {
        this.$router.push({path: '/topics'})
      } else {
        this.$router.push({path: '/login'})
      }
    },
    changeisSign() {
      // 注册成功会返回
      this.issignin = true
    },
    recieveLogin(boolean) {
      if (boolean) {
        this.signinShow = false
        this.signoutShow = true
        // 修改 Resister
        this.title = 'Hi,' + window.localStorage.getItem('username')
      }
    },
    reload() {
      this.$nextTick(function() {
        this.$router.push({path: '/topics'})
      })
    }
  },
  created() {
    if (window.localStorage.getItem('loginStatus') === 'login') {
      this.signinShow = false
      this.signoutShow = true
      this.title = 'Hi,' + window.localStorage.getItem('username')
    }
  },
  computed: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.clear::after{
  content: "";
  display: block;
  clear: both;
}
.clear{
  zoom: 1;
}
.nav{
  width: 100%;
  height: 74px;
  background-color: #343a40;
}
.nav-content{
  width: 1230px;
  height: 100%;
  margin:0 auto ;
  /* background-color: red; */
}
.logo{
  font-size: 30px;
  font-family: "Segoe UI";
  font-weight: 500;
  line-height: 74px;
  margin-right: 32px;
  line-height: 74px;
  color:#ffffff;
}
.home,
.reg-login,
.signin,
.topics,.signout{
  font-size: 20px;
  line-height: 74px;
  color:#ffffff;
  margin-right: 32px;
  cursor: pointer;
}
.signin,
.signout{
  margin-right: 0px;;
}
.home{
  line-height: 78px;
}
.logo,
.home{
  float: left;
}
.reg-login,
.signin,
.signout,
.topics{
  float: right;
}
.routerStyle{
  text-decoration: none;
  color:#FFFFFF;
}
.unClick{
  pointer-events:none;
}
</style>
