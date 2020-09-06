<template>
  <div class="topicsContent">
    <div class="newModel">
      <p class="titleStyle">新增学习任务：</p>
      <input type="text" placeholder="例如:Vue学习" class="addInput" v-model="addData"/>
      <button class="addBtn" v-on:click="addNew">添加</button>
    </div>
    <div class="showModel">
      <p class="titleStyle">学习列表：</p>
      <p v-show="!topicsList.length" class="noneTip">还没有添加任何学习任务</p>
      <ul v-show="topicsList.length">
        <li v-for="(item, index) in topicsList" :key=index class="listStyle"
        v-on:mouseover="changeDelShow(index)"
        v-on:mouseleave="returnDelShoew"
        v-on:dblclick="changeTitle(index)">
          <span class="item" v-on:click="goEntries(item)">{{item.title}}</span>
          <input type="text"
          v-model="item.title"
          v-show="index === editShow"
          v-focus="1===1"
          v-on:blur="edit"
          @keyup.13="edit"
          class="changeInput"/>
          <span class="del" v-show="index === delShow && editShow === -1" v-on:click = 'deleteData(item , index)'>删除</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'topics',
  data() {
    return {
      topicsList: [],
      delShow: -1,
      editShow: -1,
      addData: ''
    }
  },
  created() {
    this.$axios.post('/api/topics/').then((res) => {
      if (res.data.code === '1') {
        this.topicsList = res.data.message
      }
    })
  },
  mounted () {
  },
  methods: {
    changeDelShow(index) {
      this.delShow = index
    },
    returnDelShoew() {
      this.delShow = -1
    },
    changeTitle(index) {
      this.editShow = index
    },
    edit() {
      this.editShow = -1
    },
    // 添加学习主题
    addNew() {
      if (this.addData !== '') {
        let data = new FormData()
        data.append('text', this.addData)
        this.$axios.post('/api/new_topic/', data).then((res) => {
          if (res.data.code === '1') {
            location.reload()
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
      this.addData = ''
    },
    // 删除某一项
    deleteData(item, index) {
      let data = new FormData()
      data.append('id', item.id)
      this.$axios.post('/api/delete_topic/', data).then((res) => {
        if (res.data.code === '1') {
          location.reload()
        }
      }).catch(function (error) {
        console.log(error)
      })
      console.log(item.id)
    },
    // 定向至entries
    goEntries(item) {
      this.$router.push({
        path: '/entries',
        query: {
          id: item.id,
          topic: item.title
        }
      })
    }
  },
  directives: {
    'focus': {
      update (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
}
</script>

<style>
.topicsContent {
  width: 1230px;
  /* background-color: red; */
  margin: 30px auto;
}
.titleStyle{
  font-size: 16px;
  margin-bottom: 18px;
  text-align: left;
}
.addInput{
  height: 16px;
  width: 1120px;
  padding: 10px 5px;
  font-size: 16px;
  border: 1px solid #cccccc;
  margin-bottom: 25px;
}
.addBtn{
  width:85px;
  height: 36px;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #007BFF;
  border-radius: 4px;
  cursor: pointer;
}
.noneTip{
  height: 39px;
  border-bottom: 1px solid #ededed;
  background-color: #FFFFFF;
  font-size: 14px;
  color: #777777;
  line-height: 39px;
  text-indent: 20px;
  width: 1120px;
}
.listStyle{
  width: 1120px;
  height: 49px;
  padding:20px;
  border-bottom: 1px solid #ededed;
  background-color: #FFFFFF;
  font-size: 16px;
  color: #000000;
  line-height: 49px;
  text-indent: 20px;
  position: relative;
}
.listStyle:hover{
  background-color: #FAFAFA;
}
.del{
  position: absolute;
  right: 20px;
  font-size: 12px;
  color:#777777;
  cursor: pointer;
  z-index: 10;
}
.changeInput{
  position: absolute;
  left: 0px;
  width: 1080px;
  padding: 15px 20px;
  font-size: 16px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin-left: 20px;
  z-index: 1;
}
.item{
  cursor: pointer;
}
</style>
