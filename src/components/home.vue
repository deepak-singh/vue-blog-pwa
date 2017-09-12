<template>
<span>
  <v-container class="content main">
    <v-layout row wrap class="grid">
      <v-flex class="grid-item sm12 md4 " v-for="n in 8">
        <v-card hover>
          <router-link :to="{ name: 'post_detail', params: {'slug': n}}" class="no-text-decoration">
            <v-card-media class="white--text" height="200px" src="http://lorempixel.com/500/300/technics/">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
          </router-link>  
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat class="secondary--text half" >View</v-btn>
            <v-btn flat class="secondary--text half" >Comment</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-btn :to="{name: 'post_add'}" v-tooltip:top="{html: 'Click to add posts'}" class="secondary white--text post-add" fab>
    <v-icon>add</v-icon>
  </v-btn> 
</span> 
</template>
<script>
  import Masonry from 'masonry-layout'

  export default {
    mounted () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Masonry('.grid', {
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          percentPosition: true
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

.no-text-decoration {
  text-decoration: none;
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
