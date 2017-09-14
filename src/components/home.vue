<template>
<span>
  <v-container class="content main">
    <v-layout row wrap class="grid">
      <v-flex class="grid-item sm12 md4 " v-for="post in posts">
        <v-card hover>
          <router-link :to="{ name: 'post_detail', params: {'slug': post.slug, 'post_id': post.id}}" class="no-text-decoration">
            <v-card-media class="white--text" height="200px" :src="post.header_image">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline"> {{post.title }} </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </router-link>  
          <v-card-title>
            <div>
              <span class="grey--text">{{ post.author_name }}</span><br>
              <span> {{ post.body.substring(0,180) }} </span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn :to="{ name: 'post_detail', params: {'slug': post.slug, 'post_id': post.id}}" flat class="secondary--text full" >Explore</v-btn>
            <!-- <v-btn flat class="secondary--text" >Comment</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-btn v-if="state.username" :to="{name: 'post_add'}" v-tooltip:top="{html: 'Click to add posts'}" class="secondary white--text post-add" fab>
    <v-icon>add</v-icon>
  </v-btn>
  <v-snackbar :timeout="3000" :error ="is_snack_for_error" :success="!is_snack_for_error" v-model="snack_bar">
    {{ snack_msg }} 
    <v-btn dark flat @click.native="snack_bar = false">Close</v-btn>
  </v-snackbar> 
</span> 
</template>
<script>
import Isotope from 'isotope-layout'
import State from '@/store'
import HTTP from '@/config'
export default {
  data () {
    return {
      state: State,
      posts: [],
      snack_bar: false,
      snack_msg: undefined,
      is_snack_for_error: true
    }
  },
  created () {
    HTTP.get('post/')
    .then(response => {
      this.posts = response.data.objects
    })
    .catch(error => {
      this.is_snack_for_error = true
      this.snack_bar = true
      this.snack_msg = error.response.data.reason
    })
  },
  mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new Isotope('.grid', {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        }
      })
    })
  }
}
</script>

<style>
.grid-item {
  padding-bottom: 30px;
  padding-left: 15px !important; 
  padding-right:15px !important;
}

@media only screen and (min-width: 320px) and (max-width: 599px){
  .grid-item {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .grid-item {
    width: 50%;
  }
}

.half {
  width: 50%;
}
.full {
  width: 100%;
}
.main {
  margin-top: 25px;
}
.post-add {
  position: fixed;
  bottom: 40px;
  right: 40px;
  /*margin-bottom:30px;*/
}
</style>
