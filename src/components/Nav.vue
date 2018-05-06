<template>
  <nav class="nav">
    <div class="nav_wrapper" :class="menuActiveClass">
      <ul class="nav__list">
        <div class="menu_fade" @click="navClose"></div>
        <li class="nav__item" v-for="(item, key) in nav"
            :key="key"
        >
          <router-link :to="item.path" class="nav__link">
            {{item.title}}
          </router-link>
        </li>
      </ul>

    </div>

    <button class="menu-btn" id="menu-btn" @click="navOpen">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      menuActiveClass: '',
      nav: [
        {title: 'Rules of exchange', path: '/rules'},
        {title: 'For Partners', path: '/partners'},
        {title: 'News', path: '/news'},
        {title: 'Contacts', path: '/contacts'},
        {title: 'FAQ', path: '/faq'}
      ]
    }
  },
  methods: {
    navOpen () {
      this.menuActiveClass = 'nav_wrapper--active'
    },
    navClose () {
      this.menuActiveClass = ''
    }
  }
}
</script>

<style lang="scss" scoped>

  @import'../../static/mixins.scss';

  .menu_fade{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .15) ;
    position: fixed;
    top: 0;
    left: 0;
    @include z-indexPopupFade;
    margin-left: 230px;
    display: none;
  }

  nav.nav{
    @include z-indexPopupContent;
    @include responsive(1250px){
      order: 4;
    }
    @include responsive(500px){
      width: 30px;
      height: 32px;
    }
  }
  .nav_wrapper{
    margin: 0 360px 0 65px;
    @include medium{
      margin: 0 200px 0 0;
    }
    @include responsive(1480px){
      margin: 0 50px 0 0;
    }
    @include responsive(1250px){
      will-change: transform;
      position: fixed;
      top: 0;
      left: 0;
      width: 230px;
      height: 100vh;
      transform: translateX(-100%);
      transition: transform .5s ease-in-out;
      margin: 0;
      background: #fe7c1a;
    }
  }
  .nav_wrapper--active{
    .menu_fade{
      display: block;
      @include fullScreen{
       display: none;
      }
    }
    @include responsive(1250px){
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }
  }
  .nav__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    @include z-indexPopupOverlay;
    position: relative;
    @include responsive(1250px){
      flex-flow: column nowrap;
    }
  }
  .nav__item:not(:last-child) {
    margin-right: 50px;
    @include responsive(1480px){
      margin-right: 20px;
    }
    @include responsive(1250px){
      margin: 20px 0 0 0;
    }
  }

  .theme-light, .theme-white{
    .nav__link{
      color: rgb(13,20,44);
      @include responsive(1250px){
        color: #fff;
      }
    }
  }

  .theme-dark, .theme-navy{
    .nav__link{
      color: #fff;
    }
  }
  .nav__link {
    text-decoration: none;
    font-size: 16px;
    line-height: 16px;
    transition: color .3s ease-in-out;
    @include responsive(1250px){
      padding: 25px;
      display: block;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .nav__link:hover{
    color: #fe7c1a;
    transition: color .3s ease-in-out;
    @include responsive(1250px){
      color: #fff;
    }
  }
  .menu-btn{
    padding: 0;
    background: none;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    align-items: center;
    display: none;
    @include responsive(1250px){
      display: flex;
      order: 4;
    }
    @include responsive(500px){
      width: 30px;
      height: 32px;
    }
  }
  .fa-bars{
    color: #fe7c1a;
    font-size: 30px;
    @include responsive(500px){
      font-size: 22px;
    }
  }
</style>
