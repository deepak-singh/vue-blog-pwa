<template>
  <v-dialog v-model="login_dialog" persistent >
    <v-btn class="secondary" slot="activator"> Login</v-btn>
    <v-card>
      <br>
      <h5 class="secondary--text center" > Login </h5>
      <v-divider></v-divider>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="login_data.username" label="Username" autofocus required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="login_data.password" label="Password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary--text" flat @click.native="login_dialog = false">Close</v-btn>
        <v-btn class="secondary--text" flat @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
      <v-snackbar :timeout="3000" :error ="is_snack_for_error" :success="!is_snack_for_error" v-model="snack_bar">
        {{ snack_msg }}
      <v-btn dark flat @click.native="snack_bar = false">Close</v-btn>
    </v-snackbar>
  </v-dialog>
</template>
<script>
import HTTP from '@/HTTP'
import State from '@/store'
export default {
  data () {
    return {
      login_dialog: false,
      login_data: {
        username: undefined,
        password: undefined
      },
      state: State,
      snack_bar: false,
      snack_msg: undefined,
      is_snack_for_error: true
    }
  },
  methods: {
    login () {
      if (this.login_data.username && this.login_data.password) {
        var self = this
        HTTP.post('user/login/', this.login_data)
        .then(response => {
          var apiKey = response.data.api_key
          var header = 'ApiKey ' + response.data.username + ':' + apiKey
          window.localStorage.setItem('api_key_header', header)
          HTTP.defaults.headers.common['Authorization'] = header
          self.state.username = response.data.username
          self.state.last_login = response.data.last_login
          this.$router.push({'name': 'home'})
        })
        .catch(error => {
          this.is_snack_for_error = true
          this.snack_bar = true
          this.snack_msg = error.response.data.reason
        })
      } else {
        this.is_snack_for_error = true
        this.snack_bar = true
        this.snack_msg = 'Please enter a username and password.'
      }
    }
  }
}
</script>
