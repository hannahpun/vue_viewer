<template>
  <div id="app">
    <div class="header">
      <h1>Comicomic</h1>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  padding-bottom: 30px;
}
.container{
  width: 900px;
  padding: 0 50px;
  margin: 0 auto;
  box-sizing: border-box;
}
.header{
  padding: 15px 0;
  background-color: $b;
  text-align: center;
  h1{
    color: $mainColor;
    font-style: italic;
  }
}
</style>
