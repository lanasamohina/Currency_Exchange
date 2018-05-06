<template>
  <div class="container">
    <div class="dashboard">
      <h1 class="dashboard__title">International currency exchange</h1>
      <ul class="dashboard__list">
        <li class="dashboard__item"><span class="dashboard_text">Quality of service is our advantage!</span></li>
        <li class="dashboard__item"><span class="dashboard_text">Working 24 hours a day. 24/7</span></li>
        <li class="dashboard__item"><span class="dashboard_text">Latest update: {{courses.date}}</span></li>
      </ul>

      <div class="exchange">
        <!-- i give-->
        <div class="give-get__wrapper">
          <i class="reverse fas fa-exchange-alt" @click="reverseCurrencies"></i>
          <span class="give-get__select"  @click="showModalGive">
            <img :src="'./static/'+giveCurrency.flagImage" class="give__img-flag">
            <span class="give__descr">{{giveCurrency.code}}</span>
            <i class="fas fa-exchange-alt"></i>
          </span>
          <label class="exchange-label" for="input-give">I give</label>
          <input type="text" class="exchange-input__give" id="input-give" v-model="giveValue">
          <i v-html="giveCurrency.iconContent" :class="giveCurrency.iconClass"></i>
          <!--give list-->
          <app-modal_from @change-currency="setGiveCurrency" modal-class="give-modal" type="give" v-show="isModalGiveVisible" @close="closeModal"/>
          <!--/give list-->
        </div>

       <!-- i get-->
        <div class="give-get__wrapper">
          <span class="give-get__select" @click="showModalGet">
            <img :src="'./static/'+getCurrency.flagImage" class="give__img-flag">
            <span class="give__descr">{{getCurrency.code}}</span>
            <i class="fas fa-exchange-alt"></i>
          </span>

          <label class="exchange-label exchange-label--get" for="input-get">I get</label>
          <input type="text" class="exchange-input__get" id="input-get" v-model="getValue" :change="convertCurrency()">
          <i v-html="getCurrency.iconContent" :class="getCurrency.iconClass"></i>

          <!--get list-->
          <app-modal_from @change-currency="setGetCurrency" modal-class="get-modal" type="get" v-show="isModalGetVisible" @close="closeModal"/>
        </div>
       </div>

    </div>
  </div>

</template>

<script>
import ModalFrom from '../components/Modal_from.vue'
import courceApi from '../api/index.js'
export default {
  name: 'dashboard',
  components: {
    appModal_from: ModalFrom
  },
  created () {
    this.fetchCourses()
  },
  data () {
    return {
      isModalGiveVisible: false,
      isModalGetVisible: false,
      giveValue: 1000,
      getValue: 0,
      courses: {},
      giveCurrency: {code: 'USD', name: 'US Dollar', flagImage: 'united-states.svg', iconClass: 'fas fa-dollar-sign', iconContent: '', id: 1},
      getCurrency: { code: 'UAH', name: 'Ukrainian Hryvnia', flagImage: 'ukraine.svg', iconClass: 'fa-hryvnia-sign', iconContent: '&#8372;', id: 2 }
    }
  },
  methods: {
    showModalGive () {
      this.isModalGiveVisible = true
    },
    closeModal () {
      this.isModalGiveVisible = false
      this.isModalGetVisible = false
    },
    showModalGet () {
      this.isModalGetVisible = true
    },
    setGetCurrency (value) {
      this.getCurrency = value
      this.closeModal()
      this.convertCurrency()
    },
    setGiveCurrency (value) {
      this.giveCurrency = value
      this.closeModal()
      this.convertCurrency()
    },
    fetchCourses () {
      courceApi.getCourses(this)
    },
    convertCurrency () {
      if (typeof (this.courses.rates) === 'undefined') {
        return true
      }
      let getRate = this.courses.rates[this.getCurrency.code]
      let giveRate = this.courses.rates[this.giveCurrency.code]
      this.getValue = Math.round(((this.giveValue / giveRate) * getRate) * 1000) / 1000
    },
    reverseCurrencies () {
      let tmpCurrency = this.getCurrency
      this.getCurrency = this.giveCurrency
      this.giveCurrency = tmpCurrency
    }
  }
}
</script>

<style lang="scss" scoped>
  @import'../../static/mixins.scss';

  .give-get__wrapper .fa-exchange-alt.fas.reverse{
    color: #fe7c1a;
    font-size: 55px;
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    bottom: 15px;
    right: 380px;
    @include z-indexPopupContent;
    @include large{
      right: 170px;
    }
    @include medium{
      right: 120px;
    }
    @include responsive(1480px){
      right: -50px
    }
    @include responsive(1330px){
      left: 456px;
      bottom: -75px;
    }
    @include responsive(1300px){
      left: 435px;
    }
    @include responsive(1120px){
      left: 306px;
    }
    @include small{
      top: 114px;
      left: 325px;
      font-size: 45px;
    }
    @include responsive(800px){
      width: 50px;
      left: 240px;
    }
    @include responsive(500px){
      top: 91px;
      font-size: 30px;
      height: 30px;
      width: 32px;
      left: 110px;
    }
  }

  .dashboard__title{
    font-size: 63px;
    letter-spacing: -1px;
    line-height: 23px;
    margin: 190px 0 45px 325px;
    @include large{
      margin: 190px 0 45px 250px;
    }
    @include responsive(1480px){
      font-size: 54px;
      margin: 190px auto 45px auto;
      text-align: center;
    }
    @include responsive(1120px){
      font-size: 42px;
    }
    @include small{
      font-size: 34px;
      margin-top: 120px;
    }
    @include exSmall{
      font-size: 28px;
    }
    @include responsive(450px){
      font-size: 24px;
    }
  }
  .dashboard__list{
    margin: 5px 0 0 290px;
    @include large{
      margin: 5px 0 0 215px;
    }
    @include responsive(1480px){
      margin: 5px 0 0 150px;
      }
    @include responsive(1300px){
     margin: 5px 0 0 50px;
      }
    @include small{
      margin: 5px 0 0 78px;
    }
    @include responsive(450px){
      margin: 5px 0 0 0;
    }
  }
  .dashboard__item{
    color: #fe7c1a;
  }
  .dashboard_text{
    font-size: 20px;
    letter-spacing: 0;
    line-height: 30px;
    color: rgb(132,138,153);
    @include responsive(1200px){
      font-size: 17px;
    }
    @include responsive(500px){
      font-size: 15px;
    }
  }
  .exchange{
    margin: 150px 0 45px 325px;
    position: relative;
    display: flex;
    align-items: center;
    @include large{
      margin: 150px 0 45px 258px;
    }
    @include responsive(1480px){
      margin: 150px 0 45px 190px;
      }
    @include responsive(1300px){
     margin: 150px 0 45px 90px;
      }
    @include small{
      flex-flow: column;
      margin: 50px auto 20px auto;
    }
  }
  .exchange-label{
    color: #fe7c1a;
    position: absolute;
    top: -45px;
    @include small{
      top: 60px;
      left: 130px;
    }
    @include responsive(800px){
      top: 55px;
      left: 40px;
    }
    @include responsive(500px){
      top: -30px;
      left: 0;
    }
  }
  .exchange-label--get{
    @include small{
      top: 195px;
    }
    @include responsive(500px){
      top: -25px;
    }
  }
  .exchange-input__give, .exchange-input__get{
    border: none;
    padding: 10px;
    width: 300px;
    outline: none;
    font-size: 30px;
    line-height: 23px;
    color: rgb(48,48,48);
    @include responsive(1120px){
      width: 170px;
    }
    @include responsive(1120px){
       width: 170px;
     }
    @include responsive(500px){
      width: 135px;
      font-size: 19px;
    }
  }

  .wrapper{
    display: flex;
    align-items: center;
  }
  .give__img-flag{
    width: 35px;
    margin-right: 10px;
  }
  .wrapper .give__img-flag{
    margin-right: 25px;
  }
  .give-get__wrapper>.fas, .fa-hryvnia-sign{
    font-size: 24px;
    color: rgb(132,138,153);
    @include responsive(500px){
      font-size: 16px;
    }
  }
  .fa-hryvnia-sign{
    font-size: 27px;
    color: rgb(132,138,153);
    font-weight: bold;
    @include responsive(500px){
      font-size: 20px;
    }
  }
  .give-get__wrapper{
    width: 470px;
    height: 75px;
    box-shadow: 3px 3px 5px 0 rgba(0,0,0,0.5);
    border-radius: 5px;
    margin-right: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 10px;
    @include responsive(1120px){
      width: 320px;
    }
    @include small{
      margin: 30px auto;
    }
    @include responsive(500px){
      width: 260px;
      position: relative;
    }
  }
  .give-get__select{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .give-get__select>.fa-exchange-alt{
    margin-left: 10px;
    transform: rotate(90deg);
    color: rgb(132,138,153);
    font-size: 23px;
    @include responsive(500px){
      font-size: 18px;
      margin-left: 3px;
    }
  }
  .give__descr{
    @include responsive(500px){
      font-size: 12px;
    }
  }

</style>
