<template>
  <div id="app" :class="{ isDark : !isLight}">
    <div class="header">
      <h1><router-link to="/">Comicomic</router-link></h1>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isLight'])
  },
}
</script>

<style lang="scss">
#app {
  padding-bottom: 30px;
  background-color: $grey;
  color: $b;
  &.isDark{
    background-color: $b;
    color: $w;
  }
}
.container{
  max-width: 760px;
  padding: 0 50px;
  margin: 0 auto;
  box-sizing: border-box;
   @media screen and (max-width: 750px){
        width: 100%;
    }
}
.header{
  padding: 15px 0;
  background-color: $b;
  text-align: center;
  .isDark &{
    background-color: $mainColor;
  }
  h1 a{
    color: $mainColor;
    font-style: italic;
    .isDark &{
      color: $b;
    }
  }
}
</style>
