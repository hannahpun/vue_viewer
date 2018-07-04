<template>
  <div>
    <div class="pager">
      <div class="pager-header">
        <h3>My Hexschool <i class="icon el-icon-caret-right"></i></h3>
        <el-select v-model="chapterValue" placeholder="请选择">
          <el-option
            v-for="item in chapterOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="pageValue" placeholder="请选择">
          <el-option
            v-for="item in pageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
      <div class="carousel-cell" :id="'cell'+ index" v-for="(item, index) in flickityImgList" :key="item.id">
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

export default {
  name: 'Page',
  data () {
    return {
      //swutch
      swithValue:true, 
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
      pageValue: '',
      pageOptions: [{
        value: '选项1',
        label: 'haha'
      }, {
        value: '选项2',
        label: 'kk'
      }],
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
        lazyLoad: 5,
        contain: true,
        pageDots: false
      }
    }
  },
  mounted (){
    var flkty = new Flickity( '.main-carousel', this.flickityOptions);
    var flktyNav= new Flickity( '.carousel-nav', this.flickityNavO);
  },
  methods: {
    next() {
      // this.$refs.flickity.next();
    },
    previous() {
      // this.$refs.flickity.previous();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-cell{
  width: 100%;
  img{
    // width: 100%;
  }
}
.main-carousel{
  width: 100%;
  margin: 0 auto;
}

.carousel-nav {
  margin-top: 10px;
  .carousel-cell {
    width: 100px;
    margin: 0 10px;
    box-sizing: border-box;
    counter-increment: carousel-cell;
    text-align: center;
    &.is-nav-selected {
      top: 4px;
      &::before{
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent $b transparent;
        position: relative;
        left: calc(50% - 5px);
      }
      img{
        border: 3px solid $b;
      } 
    }
    &::before{
      content: counter(carousel-cell);
      display: block;
      padding-bottom: 5px;
      // margin-top: -20px;
    }
    img{
      width: 100%;
    }
  }
}
.pager{
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      font-weight: 400;
      font-size: 16px;
    }
    h3{
      padding-right: 5px;
    }
    .pager-header{
      display: flex;
      align-items: center;
    }
    
}
</style>
