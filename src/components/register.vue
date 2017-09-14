<template>
  <span>
  <v-dialog id="register-dialog" v-model="register_dialog" width="600px">
    <v-btn class="secondary" slot="activator">Register</v-btn>
    <v-card>
      <br>
      <h5 class="secondary--text center" > Register </h5>
      <v-divider></v-divider>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex sm12 md6>
              <v-text-field v-model="register.first_name" label="First name" :error-messages="errors.collect('firstname')" v-validate="'required|max:200'" data-vv-name="firstname" required></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field v-model="register.last_name" label="Lastname" ></v-text-field>
            </v-flex>
            <v-flex sm12 md12>
              <v-text-field v-model="register.email" label="Email" type="email" :error-messages="errors.collect('email_id')" v-validate="'email'" data-vv-name="email_id"></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field v-model="register.username" label="Username" :error-messages="errors.collect('username')" v-validate="'required|max:50'" data-vv-name="username"></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field v-model="register.password" label="Password" type="password" :error-messages="errors.collect('password')" v-validate="'required|max:50'" data-vv-name="password" required></v-text-field>
            </v-flex>
            
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary--text" flat @click.native="register_dialog = false">Close</v-btn>
        <v-btn class="secondary--text" flat @click.native="save()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

    <v-snackbar :timeout="3000" :error ="is_snack_for_error" :success="!is_snack_for_error" v-model="snack_bar">{{ snack_msg }}
      <v-btn dark flat @click.native="snack_bar = false">Close</v-btn>
    </v-snackbar>

  </span>
</template>
<script>
import HTTP from '@/HTTP'
export default {
  data () {
    return {
      register_dialog: false,
      register: {
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        username: undefined,
        password: undefined
      },
      snack_bar: false,
      snack_msg: undefined,
      is_snack_for_error: true
    }
  },
  methods: {
    save () {
      this.$validator.validateAll()
      if (!this.$validator.errors.any()) {
        HTTP.post('user/', this.register)
        .then(response => {
          this.register_dialog = false
          this.is_snack_for_error = false
          this.snack_bar = true
          this.snack_msg = 'User created, please login!'
        })
        .catch(error => {
          console.log(error.response)
          this.is_snack_for_error = true
          this.snack_bar = true
          this.snack_msg = error.response.data.error
        })
      }
    }
  }
}
</script>
