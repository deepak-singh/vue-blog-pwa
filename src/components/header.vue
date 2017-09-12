<template>
  <v-toolbar dark class="header primary">
    <v-toolbar-title class="white--text">
      <router-link :to="{name: 'home'}" class="white--text no-text-decoration"> Earth, stars and beyond.</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <login-component></login-component>  
    <register-component></register-component>
  </v-toolbar>
</template>
<script>
import RegisterComponent from '@/components/register'
import LoginComponent from '@/components/login'
export default {
  components: {
    'register-component': RegisterComponent,
    'login-component': LoginComponent
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  .center {
    text-align:center !important;
  }
</style>
