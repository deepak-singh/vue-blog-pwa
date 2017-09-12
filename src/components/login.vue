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
              <v-text-field label="Username" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary--text" flat @click.native="login_dialog = false">Close</v-btn>
        <v-btn class="secondary--text" flat @click.native="login_dialog = false">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      login_dialog: false
    }
  }
}
</script>
