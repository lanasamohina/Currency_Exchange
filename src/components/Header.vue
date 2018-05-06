<template>
  <header class="header">
    <div class="container">
      <router-link :to="logo.path" class="logo__link"> <img :src="'./static/'+logo.image" alt="logo" class="logo"></router-link>
      <app-nav />
      <app-theme_switch @switch-theme="switchTheme" />
      <app-login />
    </div>
  </header>
</template>
<script>
import Nav from './Nav.vue'
import Login from './Login.vue'
import ThemeSwitch from './Theme_switch.vue'
export default {
  name: 'Header',
  components: {
    appNav: Nav,
    appLogin: Login,
    appTheme_switch: ThemeSwitch
  },
  data () {
    return {
      logo: { title: 'logo', path: '/', image: 'logo.svg' }
    }
  },
  methods: {
    switchTheme (theme) {
      this.logo.image = theme.logo
      this.$emit('switch-theme', theme)
    }
  }
}

</script>
<style lang="scss" scoped>
  @import'../../static/mixins.scss';
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
.header{
  margin-top: 40px;
}
  .logo__link{
    @include responsive(500px){
      width: 70px;
    }
  }
  .logo{
    @include responsive(1300px){
      width: 85%;
    }
    @include responsive(1250px){
      order: 1;
    }
    @include responsive(500px){
      width: 100%;
    }
  }
</style>
