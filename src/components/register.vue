<template>
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
              <v-text-field label="Firstname" required></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field label="Lastname" ></v-text-field>
            </v-flex>
            <v-flex sm12 md12>
              <v-text-field label="Email" type="email" ></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field label="Username" required></v-text-field>
            </v-flex>
            <v-flex sm12 md6>
              <v-text-field label="Password" type="password" required></v-text-field>
            </v-flex>
            
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary--text" flat @click.native="register_dialog = false">Close</v-btn>
        <v-btn class="secondary--text" flat @click.native="register_dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      register_dialog: false
    }
  }
}
</script>
