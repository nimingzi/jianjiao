<template>
  <div>
  	<ul>
        <router-link to="/tuijian" tag="li" >
    		<i class="iconfont icon-box"></i>
    		<p>首页</p>
    	</router-link>
    	<router-link to="/fenlei" tag="li" >
    		<i class="iconfont icon-viewgallery"></i>
    		<p>分类</p>
    	</router-link>
    	<router-link to="/gouwuche" tag="li" >
    		<i class="iconfont icon-cart"></i>
    		<p>购物车</p>
    	</router-link>
    	<router-link to="/xiaoxi" tag="li" >
    		<i class="iconfont icon-comments"></i>
    		<p>消息</p>
    	</router-link>
    	<router-link to="/wo" tag="li" >
    		<i class="iconfont icon-account"></i>
    		<p>我</p>
    	</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footbar'
  }
</script>

<style scoped lang="scss">
	ul{
        background:white;
		position:fixed;
		width:100%;
		bottom:0;
        height:3.5rem;
		li{
            margin-top:0.5rem;
			text-align:center;
			width:20%;
			height:2rem;
			float:left;
			i{
				font-size:1rem;
			}
		}
	}
</style>
