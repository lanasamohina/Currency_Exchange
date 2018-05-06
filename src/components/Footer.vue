<template>
  <div class="container">
    <footer class="footer">
      <span class="copyright">&copy; Copyright 2018 eXchange</span>
      <div class="cards">
        <img src="../assets/mastercard.svg" alt="mastercard" class="mastercard">
        <img src="../assets/visa.svg" alt="visa" class="visa">
      </div>
      <app-footer_nav />
    </footer>
  </div>
</template>

<script>
import FooterNav from './Footer_nav.vue'
export default {
  name: 'Footer',
  components: {
    appFooter_nav: FooterNav
  }
}
</script>

<style lang="scss" scoped>
  @import'../../static/mixins.scss';
  .footer{
  padding-bottom: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @include exSmall{
    padding-bottom: 30px;
    flex-flow: column;
    }
  }
  .copyright{
    color: rgb(132,138,153);
    @include responsive(1120px){
      font-size: 15px;
    }
    @include exSmall{
      order: 1;
      margin-top: 20px;
    }
  }
  .cards{
    display: flex;
  }

  .mastercard{
    padding-right: 40px;
  }
  .visa{
    @include responsive(1120px){
      width: 50%;
    }
  }
  .mastercard{
    @include responsive(1120px){
      width: 65%;
    }
  }
</style>
