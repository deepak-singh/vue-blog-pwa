import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostDetail from '@/components/post_detail'
import PostAdd from '@/components/post_add'
import State from '@/store'
import HTTP from '@/config'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('api_key_header') && !State.username) {
    HTTP.get('user/1')
    .then(response => {
      State.username = response.data.username
      State.last_login = response.data.last_login
    })
    .catch(error => {
      console.log(error)
    })
  }
  next()
})

export default router
