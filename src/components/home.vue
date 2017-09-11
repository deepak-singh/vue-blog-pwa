<template>
    <v-layout row wrap class="grid">
      <v-flex class="grid-item sm12 md4 " v-for="n in 15">
        <v-card hover>
          <v-card-media class="white--text" height="200px" src="http://lorempixel.com/500/300/technics/">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
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
</template>
<script>
  import Masonry from 'masonry-layout'

  export default {
    mounted () {
      console.log(Masonry)
      // var elem = document.querySelector('.grid')
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
  .container {
      max-width: 1024px;
  }
  .grid-item {
    width: 50%;
  }
}

.half {
  width: 50%;
}

/*@media only screen and (min-width : 320px) and (max-width : 767px) {
  .grid-item {
    width: 100%;
  }  
}
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .grid-item {
    width: 48%;
  }  
}*/

</style>
