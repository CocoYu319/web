import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import topics from '@/components/topics'
import WriteLog from '@/components/WriteLog'
import entries from '@/components/entries'
import detail from '@/components/detail'
// import test11 from '@/components/test11'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/topics',
      name: 'topics',
      component: topics
    },
    {
      path: '/WriteLog',
      name: 'WriteLog',
      component: WriteLog
    },
    {
      path: '/entries',
      name: 'entries',
      component: entries
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
    // {
    //   path: '/',
    //   name: 'test11',
    //   component: test11
    // }
  ]
})
