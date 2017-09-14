<template>
  <v-app application--light class="wrapper">
    <app-header></app-header>
    <div class="content" >
        <router-view></router-view>     
    </div>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import State from '@/store'
// import axios from 'axios'
// import config from '@/config'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      state: State
    }
  }
}
</script>

<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/settings/_colors.styl'
  $theme := {
    primary: #3F51B5
    accent: #FFC107
    secondary: #00BCD4
    info: #B2DFDB
    warning: $red.base
    error: $red.base
    success: $green.base
  }
  @require '../node_modules/vuetify/src/stylus/main.styl'
</style>

<style>

html,
body {
  margin:0;
  padding:0;
  height: 100vw;
}

.application {
  background: white;
}
.wrapper {
  min-height:100%;
  /*margin-bottom: 30px;*/
}
.content {
  width: 100%;
  min-height:100%;
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 30px;
}

.rigth {
  text-align:right !important;
}

.no-text-decoration {
  text-decoration: none ;
}

</style>

<style scoped>
@media only screen and (min-width: 600px) {
  .container {
      max-width: 1024px;
  }
}  
</style>
