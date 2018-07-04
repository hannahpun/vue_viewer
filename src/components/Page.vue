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
      flickityOptions: {
        hash: true,
        lazyLoad: true,
        contain: true
      },
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
  width: 100%;
  margin: 0 auto;
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
