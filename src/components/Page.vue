<template>
  <div>
    <div class="pager">
      <div class="pager-header">
        <h3>My Hexschool <i class="icon el-icon-caret-right"></i></h3>
        <el-select v-model="pageValue" placeholder="请选择">
          <el-option
            v-for="(item, index) in flickityImgList"
            :key="item.id"
            :label="'Page ' + (index+1)"
            :value="(index+1)">
          </el-option>
        </el-select>
      </div>
      <div class="pager-footer">
        <el-switch
          v-model="swithValue"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
      
    </div>
    <div class="main-carousel">
      <div class="carousel-cell" :id="'cell'+ (index+1)" v-for="(item, index) in flickityImgList" :key="item.id">
        <img class="carousel-image" :data-flickity-lazyload="item">
      </div>
    </div>
    <div class="carousel-nav">
      <div class="carousel-cell" v-for="item in flickityImgList" :key="item.id">
        <img class="carousel-image" :data-flickity-lazyload="item">
      </div>
    </div>
  </div>
</template>

<script>
var Flickity = require('flickity');
// import Flickity from 'flickity-hash'
require('flickity-as-nav-for');
require('flickity-hash');
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Page',
  data () {
    return {
      //swutch
      swithValue: true, 
      // chapter select
      chapterValue: '',
      chapterOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      // page select
      pageValue: 1,
      // flickity
      flickityImgList: [
        './static/storyboard-1.png',
        './static/storyboard-2.png',
        './static/storyboard-3.png',
        './static/storyboard-4.png',
        './static/storyboard-5.png',
        './static/storyboard-6.png',
        './static/storyboard-7.png',
        './static/storyboard-8.png',
        './static/storyboard-9.png',
        './static/storyboard-10.png',
      ],
      flickityOptions: {
        hash: true,
        lazyLoad: true,
        contain: true,
        pageDots: false
      },
      flickityNavO: {
        asNavFor: '.main-carousel',
        lazyLoad: true,
        // lazyLoad: 5,
        contain: true,
        groupCells: 5,
        pageDots: false
      },
      flkty: ''
    }
  },
  watch: {
    pageValue (value){
      this.flkty.next();
      this.flkty.select( value - 1 );
    },
    swithValue (value){
      this.Mode(value)
    }
  },
  mounted (){
    this.flkty = new Flickity( '.main-carousel', this.flickityOptions);
    var flktyNav= new Flickity( '.carousel-nav', this.flickityNavO);
    // this.flktys = flkty;
  },
  computed: {
    ...mapState(['isLight'])
  },
  methods: {
    ...mapMutations(['Mode'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./page.scss">

</style>
