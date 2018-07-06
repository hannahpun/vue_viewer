<template>
  <div class="home">
    <div class="main">
      <div class="img">
        <img src="@/assets/comic_cover.png" alt="">
      </div>
      <div class="txt-wrapper">
        <h1 class="txt-header">
          MY HEXSCHOOL
        </h1>
        <div class="txt-summery">
          <ul>
            <li>
              <p class="bold title">Genres</p>
              <p class="txt">Fusce/vehicula/dolor</p>
            </li>
            <li>
              <p class="bold title">Author</p>
              <p class="txt">Namae Shiranai</p>
            </li>
            <li>
              <p class="bold title">Status</p>
              <p class="txt">Ongoing</p>
            </li>
            <li>
              <p class="bold title">Rate</p>
              <p class="txt">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
              </p>
            </li>
          </ul>
          <div class="txt-detail">
            <h4 class="bold sub-title">Summary</h4>
            <p>If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.</p>
            <p> Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. </p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="list">
      <h2>All Chapters</h2>
      <nav>
        <router-link to="/page">Chapter 1: The F2E Challenge Start!</router-link>
      </nav>
    </div>
   </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./home.scss">

</style>
