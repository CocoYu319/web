<template>
  <div class="detail">
    <p class="detail-title">{{ title }}<span class="date">{{ date }}</span></p>
    <div class="detail-content ql-editor" v-html="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      title: '',
      date: ''
    }
  },
  mounted() {
    var url = '/api/detail/' + this.$route.query.id + '/'
    this.$axios.post(url).then((res) => {
      if (res.data.code === '1') {
        var temp = ''
        this.title = res.data.message.title
        this.date = res.data.message.date
        temp = res.data.message.entry
        const regex = new RegExp('<img', 'gi')
        this.content = temp.replace(regex, `<img style="max-width: 100%; height: auto"`)
        console.log('OK')
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style>
.detail{
  width: 1230px;
  /* height:1300px; */
  margin: 30px auto;
}
.detail-title{
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
}
.detail-title span{
  position: absolute;
  font-size: 16px;
  right: 20px;
  bottom: 10px;
  font-weight: 500;
}
.detail-content{
  font-size: 23px;
  font-weight: 400;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
  padding:20px
}
</style>
