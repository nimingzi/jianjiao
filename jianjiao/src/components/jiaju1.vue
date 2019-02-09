<template>
	<div v-if="homelist.length!=0">
		<a href="#one"></a>

		<swipe class="my-swipe">
			<swipe-item v-for="data of homelist[0].moduleContent.banners" :key="data.id">
			  	<img class="myswipe" :src="data.bannerImgSrc" alt="">
			</swipe-item>
		</swipe>

		<div class="th1">
			<h2>{{homelist[1].moduleName}}</h2>
			<p>{{homelist[1].moduleDescription}}</p>
			<div class="small" @touchstart="handleTouch">
				<div v-for="data in homelist[1].moduleContent.products">
					<img :src="data.productImg" alt="">
					<div>{{data.productTitle}}</div>
					<div>￥{{data.originalPrice}}</div>
				</div>
			</div>
			<div class="look">查看全部</div>
		</div>

		<div class="th2">
			<h2>{{homelist[2].moduleName}}</h2>
			<p>{{homelist[2].moduleDescription}}</p>
			<img :src="homelist[2].moduleContent.banners[0].bannerImgSrc" alt="">
			<div v-for="info in homelist[2].moduleContent.products" class="ads">
				<img :src="info.productImg" alt="">
				<div>{{info.productTitle}}</div>
				<div>￥{{info.sellPrice}}</div>
			</div>
		</div>

		<div class="th3">
			<h2>{{homelist[3].moduleName}}</h2>
			<div v-for="data in homelist[3].moduleContent.banners">
				<img :src="data.bannerImgSrc" alt="">
			</div>
		</div>

		<div class="th4" v-for="data,index in homelist" v-if="index>=4">
			<h2>{{data.moduleName}}</h2>
			<p>{{data.moduleDescription}}</p>
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

		<div class="th10">
			
		</div>
		
	</div>
</template>

<script>
	require('vue-swipe/dist/vue-swipe.css');
	import { Swipe, SwipeItem } from 'vue-swipe';
	import {mapState} from 'vuex';

	export default {
		name:'jiaju1',
		data(){
			return {
				
			}
		},
		methods:{
			handleTouch(e){
				var small=document.querySelector('.small');
				var count=this.homelist[1].moduleContent.products.length;
				small.style.width=6*count+'rem';
				var downX=e.changedTouches['0'].clientX;
				var downLeft=small.offsetLeft;
				
				window.ontouchmove=function(e){
					var diffX=e.changedTouches['0'].clientX-downX;
					var realLeft=small.offsetLeft;
					var max=-(120*count-window.screen.width*2.4);

					if(realLeft>=0 && diffX>0){
						small.style.left = '0px';
					}else if(realLeft<max){
						small.style.left = max+'px';
					}else{
						small.style.left = downLeft + diffX + 'px';
					}
					
				}

				window.ontouchend = function (e) {
					window.ontouchmove = null;
					window.ontouchend = null;
				}
			}
		},
		components:{
			'swipe':Swipe,
			'swipe-item':SwipeItem
		},
		mounted(){
			if(this.$store.state.homelist.length===0){
				this.$store.dispatch("homelistAction");
			}

			window.onscroll=function(e){
				 var t = document.documentElement.scrollTop || document.body.scrollTop;
				 var top=document.querySelector('.top');
				// console.log(t);
				if(top!==null && top.style!==null){
					if(t>500){
						top.style.display='block';
					}else{
						top.style.display='none';
					}
				}
			}
		},
		computed:{
			...mapState(["homelist"])
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

	.th1{
		width:100%;
		height:20rem;
		// background:red;
		overflow:hidden;
		position:relative;
		border-top:1rem solid #f5f5f5;
		.small{
			// border:1px solid black;
			width:6*25rem; //随便给值，但是大于屏幕宽
			height:9rem;
			position:absolute;
			left:0rem;
			div{
				width:6rem;
				height:6rem;
				float:left;
				div{
					font-size:12px;
					width:90%;
					height:15px;
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
				}
			}
		}
		.look{
			position:absolute;
			left:11rem;
			top:17rem;
		}
	}

	.th2{
		height:35rem;
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

	.th3{
		height:13.5rem;
		padding:1rem;
		overflow:hidden;
		border-top:1rem solid #f5f5f5;
		img{
			width:28%;
			float:left;
			margin:0.6rem;
		}
	}

	.th4{
		overflow:hidden;
		border-top:1rem solid #f5f5f5;
		div{
			section{
				width:49.5%;
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