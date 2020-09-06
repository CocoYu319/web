<template>
  <div>
    <hr />
    <div class="container">
      <h1>学习笔记</h1>
      <p>欢迎使用学习笔记<br/>学习笔记，记录您的每一次收获，见证您的每一次成长！</p>
      <h3>今天，您学习了吗？</h3>
      <button>开始学习</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  border: none;
  padding: 0;
  margin:0px
}
hr{
  height:1px;
  border:none;
  border-top:1px solid #f8f9fa;
  width: 820px;
  margin: 80px auto 10px;
}
.container{
  width: 700px;
  height: 388px;
  background-color: #eeeeee ;
  padding: 60px;
  margin: 20px auto;
}
h1{
  font-size: 63px;
  color: #333333;
  text-align: center;
  margin-top: 20px;
  font-family: "inherit";
  font-weight: 500;
  margin-bottom: 10px;
}
p{
  text-align: center;
  color: #737373 ;
  font-size: 21px;
  font-weight: 200;
  font-family: "helvetica";
}
h3{
  font-size: 24px;
  margin-top: 28px;
  margin-bottom: 10px;
  font-family: "inherit";
  font-weight: 500;
  text-align: center;
  color: #333333;
}
button{
  display: block;
  font-size: 21px;
  border-radius: 6px;
  color: #FFFFFF;
  background-color: #007bff;
  padding: 14px 24px;
  font-weight: 400;
  text-align: center;
  margin: 48px auto;
  cursor: pointer;
  /* vertical-align: middle; */
}
</style>
