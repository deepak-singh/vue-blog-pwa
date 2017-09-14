import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PostDetail from '@/components/post_detail'
import PostAdd from '@/components/post_add'
import State from '@/store'
import HTTP from '@/HTTP'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      path: '/post/:post_id/:slug',
      name: 'post_detail',
      component: PostDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log('asdasd')
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('api_key_header') && !State.username) {
    HTTP.get('user')
    .then(response => {
      State.username = response.data.objects[0].username // The API will respond with logged in users record everytime, If a valid
      State.last_login = response.data.objects[0].last_login // key is passed. List of objects with one record.
    })
    .catch(error => {
      console.log(error)
    })
  }
  next()
})

export default router
