<template>
  <div class="edit">
    <div class="edit-title">
      <p>标题：</p>
      <input type="text" v-model="title"/>
    </div>
    <el-upload id="upimg"
      v-show="false"
      class="upload-demo"
      :action="imgUploadUrl"
      :on-success="handleSuccess"
      multiple>
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <quill-editor ref="QuillEditor"
            v-model="content"
            :options = "editorOption"
            @focus="onEditorFocus($event)"
            style='width: 1200px; height: 1000px;margin: 0 auto;'>
    </quill-editor>
    <button class="edit-save" @click="save">保存</button>
  </div>
</template>

<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend} from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)

export default {
  components: {quillEditor},
  data() {
    return {
      imgUploadUrl: 'http://127.0.0.1:8000/upload/',
      title: '',
      content: '',
      editorOption: {
        modules: {
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                document.querySelector('#upimg button').click()
              }
            }
          }
        }
      }
    }
  },
  methods: {
    handleSuccess(res) {
      let quill = this.$refs.QuillEditor.quill
      if (res) { // 如果上传成功
        console.log(res)
        // 获取光标所在位置
        let length = quill.selection.savedRange.index
        // 插入图片，res为服务器返回的图片链接地址
        var urls = 'http://127.0.0.1:8000/' + res.imgUrl
        quill.insertEmbed(length, 'image', urls)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        // 提示信息
        this.$message.error('图片插入失败')
      }
    },
    onEditorChange({ editor, html, text }) {
      console.log(editor)
      this.content = text
    },
    beforeUpload(res, file) {
      this.quillUpdateImg = true
    },
    // 上传图片成功
    uploadSuccess(res, file) {
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      if (res.code === '200' && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.info)
        alert(res.info)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 上传图片失败
    uploadError(res, file) {
      this.quillUpdateImg = false
      this.$message.error('图片插入失败')
    },
    onEditorFocus(e) {
    },
    save() {
      if (this.content) {
        let data = new FormData()
        data.append('title', this.title)
        data.append('content', this.content)
        let url = '/api/new_entry/' + this.$route.query.id + '/'
        this.$axios.post(url, data).then((res) => {
          if (res.data.code === '1') {
            console.log('OK')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  },
  created() {
  }
}
</script>

<style>
.edit{
  width: 1230px;
  height: 1250px;
  margin: 20px auto;
  box-shadow: 0 0 8px #CCCCCC;
  background-color: #FFFFFF;
}
.ql-container {
  font-size: 18px ;
  line-height: 30px;
}
.edit-title p{
  font-size: 18px;
  color:#000000;
  font-weight: 500;
  padding-top: 20px;
  margin-left: 20px;
  margin-bottom: 15px;
}
.edit-title input{
  width: 500px;
  font-size: 16px;
  color:#000000;
  font-weight: 500;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  box-shadow: 0 0 5px #CCCCCC;
}
.edit-save{
  display: block;
  width: 1200px;
  margin: 60px auto;
  height: 50px;
  font-size: 18px;
  color:#FFFFFF;
  border-radius: 5px;
  background-color: #007BFF;
  outline: none;
}
</style>
