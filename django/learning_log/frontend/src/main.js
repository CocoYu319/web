import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import QS from 'qs'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueQuillEditor from 'vue-quill-editor'
import './style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$qs = QS
Axios.default.baseURI = process.env.BASE_API

/* eslint-disable no-new */
var store = new Vuex.Store({
  state: {
    topicList: [],
    username: window.localStorage.getItem('username'),
    loginStatus: window.localStorage.getItem('loginStatus')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
