<template>
  <div class="home">
   <div class="ads"></div>
   <div class="main">
     <div class="img">
       <img src="/static/comic_cover.png" alt="">
     </div>
     <div class="txt-wrapper">
       <div class="txt-header">
         MY HEXSCHOOL
       </div>
       <div class="txt-summery">
         <ul>
          <li>
             <p></p>
             <p></p>
          </li>
          <li>
             <p></p>
             <p></p>
          </li>
         </ul>
       </div>
       <div class="txt-detail">
         <p></p>
       </div>
     </div>
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
