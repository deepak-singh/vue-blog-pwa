import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostDetail from '@/components/post_detail'
import PostAdd from '@/components/post_add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/add',
      name: 'post_add',
      component: PostAdd
    },
    {
      path: '/post/:slug',
      name: 'post_detail',
      component: PostDetail
    }
  ]
})
