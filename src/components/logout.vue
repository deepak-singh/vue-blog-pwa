<template>
  <span>
    <v-btn class="secondary" @click="logout">Logout</v-btn>
  </span>
</template>
<script>
import State from '@/store'
import HTTP from '@/HTTP'
export default {
  data () {
    return {
      state: State
    }
  },
  methods: {
    logout () {
      window.localStorage.removeItem('api_key_header')
      HTTP.defaults.headers.common['Authorization'] = undefined
      this.state.username = undefined
      this.state.last_login = undefined
      this.$router.push({'name': 'home'})
    }
  }
}
</script>