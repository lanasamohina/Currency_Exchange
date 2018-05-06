<template>
  <router-link :to="login.path" class="login">Login</router-link>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: { title: 'login', path: '/login' }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import'../../static/mixins.scss';

  .theme-light, .theme-white{
    .login{
      color: rgb(13,20,44);
    }
  }

  .theme-dark, .theme-navy{
    .login{
      color: #fff;
    }
  }

  .login{
    text-decoration: none;
    display: flex;
    padding: 13px 35px;
    border: 1px solid #fe7c1a;
    border-radius: 5px;
    transition: color .5s ease-in-out, background .5s ease-in-out;
    color: #000;
    @include responsive(1300px){
      padding: 8px 20px;
    }
    @include responsive(1250px){
      order: 3;
    }
    @include responsive(500px){
      padding: 5px 5px;
      font-size: 12px;
    }
  }
  .login:hover{
    background: #fe7c1a;
    color: #fff;
    transition: color .5s ease-in-out, background .5s ease-in-out;
  }
</style>
