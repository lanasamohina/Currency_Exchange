<template>
  <transition name="modal-fade">
    <div class="modal-wrapper " :class="modalClass">
      <div class="fade" @click="close"></div>
      <ul class="give-get__list give__list">
        <li v-for="(currency, key) in currencies" :key="key" class="give__item" @click="changeCurrency(currency)">
          <div class="wrapper">
            <img :src="'./static/'+currency.flagImage" alt="" class="give__img-flag">
            <span class="give__descr">{{currency.code}} - {{currency.name}}</span>
          </div>
          <i v-html="currency.iconContent" :class="currency.iconClass"></i>
        </li>
      </ul>
    </div>

  </transition>

</template>

<script>

export default {
  name: 'modal_from',
  methods: {
    close (event) {
      this.$emit('close')
    },
    changeCurrency (value) {
      this.$emit('change-currency', value)
    }
  },
  data () {
    return {
      currencies: [
        { code: 'USD', name: 'US Dollar', flagImage: 'united-states.svg', iconClass: 'fas fa-dollar-sign', iconContent: '', id: 1 },
        { code: 'UAH', name: 'Ukrainian Hryvnia', flagImage: 'ukraine.svg', iconClass: 'fa-hryvnia-sign', iconContent: '&#8372;', id: 2 },
        { code: 'EUR', name: 'EURO', flagImage: 'european-union.svg', iconClass: 'fas fa-euro-sign', iconContent: '', id: 3 },
        { code: 'GBP', name: 'British Pound', flagImage: 'united-kingdom.svg', iconClass: 'fas fa-pound-sign', iconContent: '', id: 4 },
        { code: 'TRY', name: 'Turkish Lira', flagImage: 'turkey.svg', iconClass: 'fas fa-lira-sign', iconContent: '', id: 5 },
        { code: 'KRW', name: 'South Korean Won', flagImage: 'south-korea.svg', iconClass: 'fas fa-won-sign', iconContent: '', id: 6 },
        { code: 'ILS', name: 'Israeli Shekel', flagImage: 'israel.svg', iconClass: 'fas fa-shekel-sign', iconContent: '', id: 7 },
        { code: 'JPY', name: 'Japanese Yen', flagImage: 'japan.svg', iconClass: 'fas fa-yen-sign', iconContent: '', id: 8 },
        { code: 'INR', name: 'Indian Rupee', flagImage: 'india.svg', iconClass: 'fas fa-rupee-sign', iconContent: '', id: 9 }

      ]
    }
  },
  props: ['modalClass']
}
</script>

<style lang="scss" scoped>
  @import'../../static/mixins.scss';
  .fade{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .15) ;
    position: fixed;
    top: 0;
    left: 0;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .give-get__list{
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    width: 480px;
    max-height: 300px;
    overflow-y: scroll;
    position: absolute;
    display: block;
    @include z-indexPopupContent;

    @include responsive(1200px){
      width: 460px;
    }
    @include responsive(1120px){
      width: 355px;
    }
  }
  .give__list{
    bottom: -60px;
    left: 0;
    @include responsive(1250px){
      left: -25px;
    }
    @include responsive(900px){
      bottom: 140px;
      left: 190px;
    }
    @include responsive(800px){
      bottom: 140px;
      left: 100px;
    }
    @include responsive(520px){
      left: 53px;
    }
    @include responsive(450px){
      left: 30px;
    }
  }
  .give__item{
    background: #eaebef;
    padding: 13px 15px;
    transition: background .4s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wrapper{
    display: flex;
    align-items: center;
  }
  .give__item:hover{
    background: #fff;
    transition: background .4s ease-in-out;
  }
  .give__img-flag{
    width: 35px;
    margin-right: 10px;
  }
  .wrapper .give__img-flag{
    margin-right: 25px;
  }
  .fas, .fa-hryvnia-sign{
    font-size: 24px;
    color: rgb(132,138,153)
  }
  .fa-hryvnia-sign{
    font-weight: bold;
  }
  .give-get__wrapper{
    width: 470px;
    height: 75px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
    border-radius: 5px;
    margin-right: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .give-get__select{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .get-modal .give__list{
    bottom: -60px;
    left: 510px;
    @include responsive(1300px){
      left: 485px;
    }
    @include responsive(1120px){
      left: 350px;
    }
    @include responsive(900px){
      bottom: -160px;
      left: 177px;
    }
    @include responsive(800px){
      bottom: -160px;
      left: 100px;
    }
    @include responsive(520px){
      left: 53px;
    }
    @include responsive(450px){
      left: 30px;
    }
  }
  .fa-exchange-alt{
    margin-left: 10px;
    transform: rotate(90deg);
    color: rgb(132,138,153);
    font-size: 23px;
  }
  .give__descr{
    color: rgb(13,20,44);
  }

</style>
