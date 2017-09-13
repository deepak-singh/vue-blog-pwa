<template>
  <v-toolbar dark class="header primary">

    <v-toolbar-title class="white--text headline">
      <router-link :to="{name: 'home'}" class="white--text no-text-decoration"> Earth, stars and beyond.</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <login-component v-if="!state.username"></login-component>  
    <register-component v-if="!state.username"></register-component>
    
    <p class="headline no-margin white--text" v-if="state.username">Hello {{ state.username }}!</p>
    <!-- <span class="secondary my-avatar headline" v-if="state.username">
      {{ state.username.charAt(0).toUpperCase() }}
    </span> -->
    <logout-component v-if="state.username"></logout-component>

  </v-toolbar>
</template>
<script>
import RegisterComponent from '@/components/register'
import LoginComponent from '@/components/login'
import LogoutComponent from '@/components/logout'
import State from '@/store/'
export default {
  components: {
    'register-component': RegisterComponent,
    'login-component': LoginComponent,
    'logout-component': LogoutComponent
  },
  data () {
    return {
      state: State
    }
  }
}
</script>
<style>
  .center {
    text-align:center !important;
  }
  .my-avatar {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    text-align: center;
    padding-top: 5px;
  }
  .no-margin {
    margin: 0px;
  }
</style>
