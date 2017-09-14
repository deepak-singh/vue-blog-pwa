<template>
  <v-container class="content">
    <v-layout  row wrap>
    <v-flex sm12 >
      <v-card>
        <div class="container">
          <h5 class="center"> Blog post </h5>
          <v-flex sm12>
            <v-text-field autofocus v-model="post.title" label="Title" :error-messages="errors.collect('title')" v-validate="'required|max:200'" data-vv-name="title" required> </v-text-field>
          </v-flex>
          <v-flex sm12>
            <v-text-field :error-messages="errors.collect('body')" v-validate="'required|max:1000'" data-vv-name="body" required v-model="post.body" name="body" label="Post" multi-line></v-text-field>
          </v-flex>
          <v-flex sm12>
            <v-text-field v-model="post.header_image" label="Image URL" :error-messages="errors.collect('image-url')" v-validate="'required'" data-vv-name="image-url" required> </v-text-field>
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
// import axios from 'axios'
import HTTP from '@/config'
export default {
  $validates: true,
  data () {
    return {
      post: {
        title: '',
        body: '',
        header_image: ''
      }
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll()
      if (!this.$validator.errors.any()) {
        HTTP.post('post/', this.post)
        .then(response => {
          this.$router.push({'name': 'post_detail', params: {'slug': response.data.slug}})
        })
        .catch(error => {
          console.log(error.response)
        })
      }
    }
  }

}
</script>


