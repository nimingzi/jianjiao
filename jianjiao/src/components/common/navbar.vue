<template>
  <div class="all" v-show="isShow">
    <h1><img class="logo" src="/static/img/logo.png" alt=""></h1>
    <div class="search">
      <img class="magnifier" src="/static/img/search.png" alt="">
      <input  type="text" placeholder="搜索我的尖叫好物">
    </div>

    <ul>
      <router-link to="/tuijian" tag="li" activeClass="act">推荐</router-link>
      <router-link to="/jiaju4" tag="li" activeClass="act">家具</router-link>
      <router-link to="/jiaju1" tag="li" activeClass="act">家居</router-link>
      <router-link to="/huodong" tag="li" activeClass="act">活动</router-link>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'navbar',
    computed:{
      ...mapState(["isShow"])
    }
  }
</script>

<style scoped lang="scss">
  .all{position:relative;height:5.5rem;}
  h1{float:left;margin-left:0.3rem;}
  .logo{width:3rem;}
  .search{position:relative;width:80%;background:#f5f5f5;border-radius:0.8rem;float:right;margin-top:0.8rem;margin-right:0.5rem; }
  .search input{ font-weight:500; font-size: 0.5rem; padding-left: 0.5rem; }
  .magnifier{width:1.3rem;padding-top:0.15rem; margin-left: 0.5rem;}
  input{width:12rem;height:1rem;position:absolute;top:0.3rem;outline:none;border:none;background:#f5f5f5;}

  ul{position:absolute;top:3rem;width:100%;}
  li{width:25%;float:left;height:2rem;text-align:center;}

  .act{border-bottom:5px solid black;}
</style>
