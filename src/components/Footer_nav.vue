<template>
  <nav class="footer_nav">
    <ul class="footer_nav__list">

      <li class="footer_nav__item" v-for="(item, key) in footer_nav"
          :key="key"
      >
        <router-link :to="item.path" class="footer_nav__link">
          {{item.title}}
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'footer_nav',
  data () {
    return {
      footer_nav: [
        {title: 'Site rules', path: '/site-rules'},
        {title: 'Privacy Policy', path: '/privacy'},
        {title: 'AMI', path: '/ami'},
        {title: 'KYC', path: '/kyc'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import'../../static/mixins.scss';
  .footer_nav{
    @include responsive(1120px){
      display: none;
    }
  }
  .footer_nav__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .footer_nav__item:not(:last-child) {
    margin-right: 45px;
  }

  .theme-light, .theme-white{
    .footer_nav__link{
      color: rgb(132,138,153);
    }
  }
  .theme-dark, .theme-navy{
    .footer_nav__link{
      color: rgb(111,119,151);
    }
  }

  .footer_nav__link{
    text-decoration: none;
    transition: color .5s ease-in-out;
  }

  .footer_nav__link:hover{
    color: #fe7c1a;
    transition: color .5s ease-in-out;
  }
</style>
