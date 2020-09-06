<template>
  <div class="entries-content">
    <!-- <p class="title">{{ topic }}</p> -->
    <p v-show="!entriesList.length" class="Tip">还没有添加任何学习记录</p>
    <div v-if="entriesList.length">
      <ul>
        <li class="list" @click="goDetail(item)" v-for="(item, index) in entriesList" :key=index>
          <p class="content-title">{{ item.title }}
            <span class="time">{{ item.data }}</span></p>
          <div class="content" v-html="gettext(item.text)"></div>
        </li>
      </ul>
    </div>
    <button class="newEntry" @click="addNewEntry">新增</button>
  </div>
</template>

<script>
export default {
  name: 'entries',
  data() {
    return {
      topic: '',
      entriesList: []
    }
  },
  created() {
  },
  mounted() {
    this.topic = this.$route.query.topic
    var url = '/api/topics/' + this.$route.query.id + '/'
    this.$axios.post(url).then((res) => {
      if (res.data.code === '1') {
        this.entriesList = res.data.message
        console.log(res.data.message)
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    addNewEntry() {
      this.$router.push({
        path: '/WriteLog',
        query: {
          id: this.$route.query.id
        }
      })
    },
    gettext(text) {
      var content = ''
      if (text.length > 148) {
        for (var i = 0; i < 148; i++) {
          content += text[i]
        }
      } else {
        content = text
      }
      return content
    },
    goDetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style>
.entries-content {
  width: 1230px;
  height: 500px;
  margin: 15px auto;
  margin-top: 50px;
  position: relative;
}
.title{
  font-size: 23px;
  color: #000000;
  margin-bottom: 10px;
}
.Tip{
  height: 39px;
  border-bottom: 1px solid #ededed;
  background-color: #FFFFFF;
  font-size: 14px;
  color: #777777;
  line-height: 39px;
  text-indent: 20px;
  width: 100%;
}
.content-title{
  width: 1228px;
  height: 77px;
  background-color: #f5f5f5;
  color:#000000;
  font-size: 30px;
  line-height: 77px;
  font-weight: 500;
  text-indent: 20px;
  border-bottom: 1px solid #dddddd;
  position: relative;
  overflow: hidden;
}
.content{
  text-indent: 20px;
  padding: 20px;
  font-size: 16px;
  line-height: 20px;
  max-height: 100px;
  background-color: #FFFFFF;
  overflow: hidden;
}
.list{
  border: 1px solid #dddddd;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
}
.time{
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 16px;
  color: #737373;
}
.newEntry{
  font-size: 18px;
  color: #FFFFFF;
  background-color: #007BFF;
  border-radius: 4px;
  width: 100px;
  height: 45px;
  margin-top: 30px;
  position: absolute;
  right: 20px;
}
</style>
