<template>
  <form id="contain">
    <div class="contain-logo">Learning</div>
    <p class="loginP" v-if="isSignin">Please sign in</p>
    <p class="loginP" v-if="!isSignin">Please Register</p>
    <input type="text" class="username" placeholder="Username" v-model="name"/>
    <input type="password" class="password" placeholder="Password" v-model="pass"/>
    <div class="check" v-if='isSignin'>
      <input type="checkbox" />
      <label>Remember me</label>
    </div>
    <input type="button" :value='isSignin?"Sign in" : "Register" ' @click="sendData"/>
  </form>
</template>

<script>
export default {
  name: 'login',
  props: ['isSignin'],
  data() {
    return {
      name: '',
      pass: ''
    }
  },
  methods: {
    sendData() {
      // 要先根据isSignin判断是登录还是注册
      let data = new FormData()
      data.append('username', this.name)
      data.append('password', this.pass)
      if (this.isSignin) {
        // 登录
        this.$axios.post('/api/users/Login/', data).then((res) => {
          if (res.data.code === true) {
            window.localStorage.setItem('username', this.name)
            window.localStorage.setItem('loginStatus', 'login')
            this.name = ''
            this.pass = ''
            this.$router.push({name: 'HelloWorld'})
            this.$emit('loginOK', true)
          }
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        // 注册
        this.$axios.post('/api/users/register/', data).then((res) => {
          if (res.data.code === '1') {
            console.log('注册成功')
            this.name = ''
            this.pass = ''
            this.$emit('recieve')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>
form{
  width: 388px;
  margin: 40px auto;
  position: relative;
}
.contain-logo{
  width: 270px;
  height: 88px;
  line-height: 88px;
  font-size: 55px;
  text-align: center;
  color: #FFFFFF;
  background-color: #563d7c;
  border-radius: 10px;
  margin:0 auto;
}
.loginP{
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 18px;
}
.username,.password{
  width: 368px;
  height: 26px;
  padding: 10px;
  font-size: 16px;
  line-height: 26px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}
.username{
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-color: #FFFFFF;
  /* margin-bottom: -1px; */
}
.password{
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.check{
  width: 150px;
  margin-top:20px;
  margin-bottom: 40px;
  margin: 16px auto;
}
input[type="button"]{
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  height: 50px;
  font-size: 20px;
  border:none;
  background-color: #007BFF;
  color: #FFFFFF;
  border-radius: 4px;
  margin-top: 30px;
}
.password:hover{
  border-color: #007BFF;
  /* z-index: 3; */
}
.username:hover{
  border-color: #007BFF;
  z-index: 3;
}
</style>
