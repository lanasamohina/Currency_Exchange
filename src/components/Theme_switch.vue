<template>
  <div class="theme_switch" :class="downActive" >
    <div class="theme_switch-wrapper" @click="showSwitchTheme">
      <span class="theme_switch_text">Choose theme</span>
      <i class="fas fa-angle-down" ></i>
    </div>
    <ul class="theme_switch__list">
      <li class="theme_switch__item" v-for="(item, key) in themes"
          :key="key"
          @click="changeTheme(item)"
      >{{item.name}}</li>

    </ul>
    <div class="fade__theme_switch" @click="closeSwitchTheme"></div>
  </div>
</template>

<script>
export default {
  name: 'Theme_switch',
  data () {
    return {
      downActive: '',
      themes: [
        {id: 1, name: 'Light', bodyClass: 'theme-light', logo: 'logo.svg'},
        {id: 2, name: 'Navy', bodyClass: 'theme-navy', logo: 'logo_dark.svg'},
        {id: 3, name: 'White', bodyClass: 'theme-white', logo: 'logo.svg'},
        {id: 4, name: 'Dark', bodyClass: 'theme-dark', logo: 'logo_dark.svg'}
      ]
    }
  },
  methods: {
    showSwitchTheme () {
      this.downActive = 'theme_switch--active'
    },
    closeSwitchTheme () {
      this.downActive = ''
    },
    changeTheme (item) {
      this.$emit('switch-theme', item)
      this.closeSwitchTheme()
      this.$cookies.set('theme', JSON.stringify(item), '1y', '/')
    }
  },
  created: function () {
    let value = this.$cookies.get('theme')
    if (value) {
      let theme = JSON.parse(value)
      if (theme.bodyClass && theme.logo) {
        this.changeTheme(theme)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  @import'../../static/mixins.scss';

  .fade__theme_switch{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .02) ;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    @include z-indexPopupFade;
  }

  .fa-angle-down{
    color: #fe7c1a;
    padding-left: 10px;
    font-size: 20px;
    position: absolute;
    right: -20px;
    bottom: 0;
    @include responsive(500px){
      font-size: 17px;
      right: -15px;
      padding-left: 0px;
    }
  }
  .theme_switch-wrapper{
    position: relative;
  }
  .theme_switch{
    display: flex;
    align-items: center;
    margin-right: 55px;
    cursor: pointer;
    position: relative;
    transition: color .3s ease-in-out;
    @include z-indexContentMiddle;
    @include responsive(1480px){
      margin-right: 25px;
    }
    @include responsive(1250px){
      order: 2;
      margin-top: 0;
    }
    @include responsive(500px){
      width: 79px;
      line-height: 17px;
    }
  }
  .theme_switch-wrapper:hover, .theme_switch__item:hover{
    color: #fe7c1a;
    transition: color .3s ease-in-out;
  }

  .theme_switch_text{
    @include responsive(500px){
      font-size: 11px;
    }
  }

  .theme_switch__list{
    display: none;
    list-style: none;
    margin: 0;
    position: absolute;
    padding: 0px;
    width: 100%;
    text-align: center;
    border: 1px solid #fe7c1a;
    border-radius: 5px;
    top: 30px;
    font-size: 14px;
    @include z-indexPopupContent;
  }

  .theme_switch__item{
    padding: 5px;
  }

  .theme_switch--active{
    .fade__theme_switch{
      display: block;
    }
    .fa-angle-down{
      transform: rotate(180deg);
      right: -15px;
    }
    .theme_switch-wrapper{
      color: #fe7c1a;
    }
    .theme_switch__list{
      display: block;
      @include z-indexPopupContent;
    }
  }
</style>
