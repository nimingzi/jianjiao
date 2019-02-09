<template>
	<div>
		<a href="#one"></a>
		<swipe class="my-swipe">
			<swipe-item v-for="data in swipelist" :key="data.id">
			  	<img class="myswipe" :src="data.bannerImgSrc" alt="" @click="handleImg(data.bannerImgSrc,data.bannerLinkTargetId)">
			</swipe-item>
		</swipe>
	
		<div class="item" v-for="data,index in list"  v-if="index">
			<h2>{{data.moduleName}}</h2>
			<p>{{data.moduleDescription}}</p>
			<img v-for="info in data.moduleContent.banners" :src="info.bannerImgSrc" alt="" @click="handleImg(info.bannerImgSrc,info.bannerLinkTargetId)">
			
			<div class="proContainer" v-if="data.moduleContent.products">
				<div class="smallContainer" v-for="info,index in data.moduleContent.products" v-if="data.moduleContent.products.length<=3">
					<img :src="info.productImg" alt="" @click="handleItem(info)">
					<div>{{info.productTitle}}</div>
					<div>￥{{info.sellPrice}}</div>
				</div>

				<div v-else class="elseContainer">
					<img :src="info.productImg" alt="">
					<div>{{info.productTitle}}</div>
					<div>￥{{info.sellPrice}}</div>
					<p v-if="index===data.moduleContent.products.length-1">查看全部▶</p>
				</div>
			</div>
		</div>

		<a name="one" href="#" class="top">返回顶部</a>

		<div class="th10"></div>

	</div>
</template>

<script>
	require('vue-swipe/dist/vue-swipe.css');
	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from 'axios';
	import {mapState} from 'vuex';
	import router from '../router/index.js';

	export default {
		name:'tuijian',
		data(){
			return {

			}
		},
		methods:{
			handleImg(imgSrc,info){
				var result=imgSrc.lastIndexOf('/');
				var newSrc=imgSrc.slice(result+1);
				router.push(`/detail/${info}=${newSrc}`);

				this.$store.dispatch("isShowAction",false);
			},

			handleItem(info){
				var index=info.productImg.lastIndexOf('/');
				var newSrc=info.productImg.slice(index+1);
				var str=`${info.productId}=${info.productTitle}=${info.sellPrice}=${info.parentProductId}=${newSrc}`;

				router.push(`/detail2/${str}`);

				this.$store.dispatch("isShowAction",false);
			}
		},
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},
		mounted(){
			if(this.$store.state.swipelist.length===0){
				this.$store.dispatch("swipelistAction");
				this.$store.dispatch("listAction");
			}

			this.$store.dispatch("isShowAction",true)

			window.onscroll=function(e){
				 var t = document.documentElement.scrollTop || document.body.scrollTop;
				 var top=document.querySelector('.top');

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
			...mapState(["swipelist","list"])
		}
	}
</script>

<style scoped lang="scss">
	.my-swipe {
	  height: 16rem;
	}

	img{width:100%;}

	h2{text-align:center;height:5rem;line-height:5rem;}
	p{text-align:center;margin-bottom:2rem;}

	.item{border-top:1rem solid #f5f5f5;padding:1rem;}
	.proContainer{
		width:100%;
		height:11rem;
		// border:1px solid red;
		overflow:hidden;
		position:relative;
		.smallContainer{
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
		}

		.elseContainer{
			width:25%;
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