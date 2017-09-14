<template>
    <span>
      <v-parallax :src="post.header_image" height="400" class="full" v-if="post.header_image"></v-parallax>
      <v-container class="content">
        <v-layout row wrap>
          <v-flex sm12>
            <br>
             <h4 class="center primary--text " >{{ post.title }}</h4> 
             <p>
               {{ post.body }}
             </p>
          </v-flex>  
        </v-layout>  
      </v-container> 

      <v-btn v-if="state.username" :to="{name: 'post_add'}" v-tooltip:top="{html: 'Click to add posts'}" class="secondary white--text post-add" fab>
        <v-icon>add</v-icon>
      </v-btn>

    </span>  
</template>
<script>
import State from '@/store'
import HTTP from '@/HTTP'
export default {
  data () {
    return {
      state: State,
      post: {
        title: undefined,
        body: undefined,
        header_image: undefined
      }
    }
  },
  created () {
    HTTP.get('post/' + this.$route.params.post_id)
    .then(response => {
      this.post = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
.container {
  width: 100% !important;
  padding: 0px;
}
.content {
  padding: 16px !important;
}
.center {
  text-align:center;
}
.full {
  width: 100%;
}
.post-add {
  position: fixed;
  bottom: 40px;
  right: 40px;
  /*margin-bottom:30px;*/
}
</style>