<template>
  <v-container class="content">
    <v-layout  row wrap>
    <v-flex sm12 >
      <v-card>
        <div class="container">
          <h5 class="center"> Blog post </h5>
          <v-flex sm12>
            <v-text-field autofocus v-model="title" label="Title" :error-messages="errors.collect('title')" v-validate="'required|max:200'" data-vv-name="title" required> </v-text-field>
          </v-flex>
          <v-flex sm12>
            <v-text-field :error-messages="errors.collect('body')" v-validate="'required|body'" data-vv-name="body" required v-model="body" name="body" label="Post" multi-line></v-text-field>
          </v-flex>
          <v-flex sm12>
            <v-text-field v-model="header_img" label="Image URL" :error-messages="errors.collect('image-url')" v-validate="'required'" data-vv-name="Image URL" required> </v-text-field>
          </v-flex>
          <v-flex sm12 class="rigth">
            <v-btn class="secondary" @click="submit">Publish</v-btn>
          </v-flex>  
          <br>
        </div>
      </v-card>  
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
        title: '',
        body: '',
        header_img: ''
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      }
    }

  }
</script>


