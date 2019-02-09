<template>
  <div>
  	<navbar></navbar>
    <router-view class="hid"></router-view>
    <footbar></footbar>
  </div>
</template>

<script>
  import footbar from './components/common/footbar'
  import navbar from './components/common/navbar'

  export default {
    name: 'App',
    components:{
    	footbar,
    	navbar
    }
  }
</script>

<style>
  *{margin:0;padding:0;}
  li{list-style:none;}
  html,body{ height:100%;}
  /*html{font-size:20px;}*/
  html{font-size:window/10px;}
  .hid{overflow:hidden;}
</style>
