<template>
  <span>
    <v-btn class="secondary" @click="logout">Logout</v-btn>
  </span>
</template>
<script>
import State from '@/store'
export default {
  data () {
    return {
      state: State
    }
  },
  methods: {
    logout () {
      window.localStorage.removeItem('api_key')
      this.state.username = undefined
      this.state.last_login = undefined
    }
  }
}
</script>