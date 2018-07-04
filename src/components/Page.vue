<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="main-carousel">
      <div class="carousel-cell" id="cell1">
        <img class="carousel-image" data-flickity-lazyload="./static/storyboard-1.png">
      </div>
      <div class="carousel-cell" id="cell2">
        <img class="carousel-image" data-flickity-lazyload="./static/storyboard-2.png">
      </div>
      <div class="carousel-cell" id="cell3">
        <img class="carousel-image" data-flickity-lazyload="./static/storyboard-3.png">
      </div>
    </div>
  </div>
</template>

<script>
import Flickity from 'flickity-hash'

export default {
  name: 'Page',
  data () {
    return {
      flickityOptions: {
        hash: true,
        lazyLoad: true,
        contain: true
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted (){
    var flkty = new Flickity( '.main-carousel', this.flickityOptions);
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-carousel{
  width: 800px;
  margin: 0 auto;
}
.carousel-image {
  // min-width: 500px;
}
</style>
