<template>
	<div v-if="activelist.length!=0">
		<a href="#one"></a>

		<swipe class="my-swipe">
			<swipe-item>
			  	<img class="myswipe" :src="activelist[0].moduleContent.banners[0].bannerImgSrc" alt="">
			</swipe-item>
			<swipe-item>
			  	<img class="myswipe" :src="activelist[0].moduleContent.banners[0].bannerImgSrc" alt="">
			</swipe-item>
		</swipe>

		<div v-for="data,index in activelist">
			<img class="hd1" v-if="index>=1 && index<=3" :src="data.moduleContent.bannerImgSrc" alt="">
		</div>

		<div class="hd2">
			<h2>{{activelist[4].moduleName}}</h2>
			<img :src="activelist[4].moduleContent.banners[0].bannerImgSrc" alt="">
			<div v-for="info in activelist[4].moduleContent.products" class="ads">
				<img :src="info.productImg" alt="">
				<div>{{info.productTitle}}</div>
				<div>￥{{info.sellPrice}}</div>
			</div>
		</div>

		<div class="th4" v-for="data,index in activelist" v-if="index>=5">
			<h2>{{data.moduleName}}</h2>
			<div v-for="info,index of data.moduleContent.products">
				<section v-if="index<=5">
					<img :src="info.productImg" alt="">
					<div>{{info.productTitle}}</div>
					<p>￥{{info.originalPrice}}</p>
				</section>
			</div>
			<nav>查看全部</nav>
		</div>

		<a name="one" href="#" class="top">返回顶部</a>

		<div class="th10"></div>
	</div>
</template>

<script>
	require('vue-swipe/dist/vue-swipe.css');
	import { Swipe, SwipeItem } from 'vue-swipe';
	import {mapState} from 'vuex';

	export default {
		name:'huodong',
		data(){
			return {
				
			}
		},
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},
		mounted(){
			if(this.$store.state.activelist.length===0){
				this.$store.dispatch("activelistAction");
			}

			window.onscroll=function(e){
				 var t = document.documentElement.scrollTop || document.body.scrollTop;
				 var top=document.querySelector('.top');
				// console.log(t);
				if(top!==null){
					if(t>500){
						top.style.display='block';
					}else{
						top.style.display='none';
					}
				}
			}
		},
		computed:{
			...mapState(["activelist"])
		}
	}
</script>

<style scoped lang="scss">
	.my-swipe {
	  height: 16rem;
	}

	img{width:100%;}

	.hd1{
		border-top:1rem solid #f5f5f5;
		width:100%;
	}

	h2{text-align:center;height:5rem;line-height:5rem;}

	.hd2{
		height:30rem;
		padding:1rem;
		overflow:hidden;
		border-top:1rem solid #f5f5f5;
		.ads{
			width:33%;
			height:11rem;
			float:left;
			div{
				font-size:12px;
				width:100%;
				height:15px;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
				text-align:center;
			}
			p{
				position:absolute;
				left:10rem;
				bottom:-1.5rem;
			}
		}
	}

	.th4{
		overflow:hidden;
		border-top:1rem solid #f5f5f5;
		div{
			section{
				width:49.5%;
				height:17rem;
				float:left;
				border:1px solid #f5f5f5;
				div{
					font-size:20px;
					width:90%;
					height:25px;
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
					text-align:center;
				}
			}
		}
		nav{
			width:100%;
			height:3rem;
			line-height:3rem;
			text-align:center;
			clear:both;
			border-top:1px solid #f5f5f5;
		}
	}

	.top{
		position:fixed;
		right:25px;
		bottom:70px;
		text-decoration:none;
		display:none;
	}

	.th10{
		height:4.5rem;
		background:#f5f5f5;
	}
</style>