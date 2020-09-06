<template>
  <div class="quill-wrap">
    <p>vfvfvf</p>
    <el-upload id="upimg"
      v-show="true"
      class="upload-demo"
      :action="imgUploadUrl"
      :on-success="handleSuccess"
      multiple>
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <quill-editor
      style="width: 1230px; height: 500px;"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption">
    </quill-editor>
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
      content: '',
      imgUploadUrl: 'http://127.0.0.1:8000/upload/',
      // 富文本框参数设置
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: 'img',
            action: this.imgUploadUrl,
            response: (res) => {
              return res.info
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                console.log(1111)
                // QuillWatch.emit(this.quill.id)
                document.querySelector('#upimg button').click()
              }
            }
          }
        }
      }
    }
  },
  methods: {
    handleSuccess() {
      console.log(2344)
    }
  }
}
</script>

<style></style>
