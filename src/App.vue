<template>
  <div id="app" :class="themeClass">
      <app-header @switch-theme="switchTheme" />
      <main class="maincontent">
         <router-view/>
      </main>
      <app-footer />

  </div>
</template>

<script>

import Dashboard from './views/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      themeClass: 'theme-light'
    }
  },
  components: {
    appDashboard: Dashboard,
    appHeader: Header,
    appFooter: Footer
  },
  methods: {
    switchTheme (theme) {
      this.themeClass = theme.bodyClass
    }
  }
}
</script>

<style lang="scss">

  @import'../static/mixins.scss';
  @font-face {
    font-family: "GothamProLight";
    src: url("./assets/fonts/GothamProLight/GothamProLight.eot");
    src: url("./assets/fonts/GothamProLight/GothamProLight.eot?#iefix")format("embedded-opentype"),
    url("./assets/fonts/GothamProLight/GothamProLight.woff") format("woff"),
    url("./assets/fonts/GothamProLight/GothamProLight.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  *{
    box-sizing: border-box;
  }
  html, body, #app {
    width: 100%;
    height: 100vh;
    @include responsive(500px){
      height: auto;
      min-height: 100vh;
    }
    font-family: 'GothamProLight', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
    flex-flow: column nowrap;
    background-size: cover;

  }
  #app.theme-light{
    background: url("assets/Custom_bg_img.jpg") center center no-repeat;
    color: rgb(13,20,44);
  }

  #app.theme-white{
    background: url("assets/background_white.jpg") center center no-repeat;
    color: rgb(13,20,44);
  }

  #app.theme-dark{
    background: url("assets/CustomDark_bg_img.jpg") center center no-repeat;
    color: #fff;
  }

  #app.theme-navy{
    background: url("assets/background_navy.jpg") center center no-repeat;
    color: #fff;
  }

  .maincontent {
    fleX: 1 0;
  }

  .container{
    width: 1800px;
    margin: 0 auto;
    @include large{
      width: 1500px;
    }
    @include medium{
      width: 1450px;
    }
    @include responsive(1480px){
      width: 1200px;
    }
    @include responsive(1300px){
      width: 1000px;
    }
    @include responsive(1120px){
      width: 800px;
    }
    @include small{
      width: 700px;
    }
    @include responsive(800px){
      width: 550px;
    }
    @include responsive(600px){
      width: auto;
      margin: 0 10px;
    }
  }

</style>
