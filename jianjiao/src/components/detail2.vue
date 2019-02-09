<template>
	<div>
		<a href="#one"></a>
		<div class="th1">
			<i class="iconfont icon-box" @click="handleClick"></i>
			<p>商品详情</p>
			<i class="iconfont icon-search"></i>
		</div>
		<img :src="src" alt="">
		<p>{{title}}</p>
		<p><b>￥{{price}}</b></p>
		<img src="/static/img/banner.png" alt="" class="banner">

		<div v-if="volist.length!=0" v-for="data in volist">
			<div v-if="data.content.indexOf('h')===0">
				<img :src="data.content" alt="">
			</div>
			<div v-else>
				<article class="bottomTitle">{{data.content}}</article>
			</div>
		</div>

		<div class="instruction">
			<h3>详细规格参数</h3>
			<section v-for="data in table">
				<nav class="left">{{data.attributeName}}</nav>
				<nav class="right">{{data.attributeValueText}}</nav>
			</section>
		</div>

		<img src="/static/img/other.png" alt="">

		<div class="recommend" v-if="hotlist.length!=0">
			<section v-for="info of hotlist">
				<img :src="info.productImg" alt="">
				<div>{{info.productTitle}}</div>
				<div>￥{{info.sellPrice}}</div>
			</section>
		</div>

		<img src="/static/img/contact.png" alt="" class="contact">

		<a name="one" href="#" class="top">返回顶部</a>

		<div class="th10"></div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:'detail2',
		data(){
			return {
				id:'',
				src:'',
				title:'',
				price:'',
				volist:[],
				table:[],
				hotlist:[]
			}
		},
		methods:{
			handleClick(){

			}
		},
		mounted(){
			var arr=this.$route.params.id.split('=');
			var id=arr[0];
			var src='/product/images/'+arr[4];
			var title=arr[1];
			var price=arr[2];
			var parentId=arr[3];

			this.id=id;
			this.src=src;
			this.title=title;
			this.price=price;

			this.$store.dispatch("isShowAction",false);

			axios.get(`/itemdetail/spuInfos/${parentId}?_=1533280456165`).then((res)=>{
				this.volist=res.data.data.itemDetailIntroVoList;
			});

			axios.get(`/itemdetail/skuInfos/${id}?_=1533282483096`).then((res)=>{
				this.table=res.data.data.skuAttrPairs;
			});

			axios.get(`/recommend/item?skuId=${id}&_=1533285931434`).then((res)=>{
				this.hotlist=res.data.data.skuInLists;
			});

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
		}
	}
</script>

<style scoped lang="scss">
	.th1{
		width:100%;
		height:2.8rem;
		line-height:2.8rem;
		border-bottom:1px solid #f5f5f5;

		i{
			width:3rem;
			height:100%;
			text-align:center;
			font-size:23px;
		}

		.icon-box{float:left;}
		.icon-search{float:right;}

		p{
			width:69%;
			float:left;
			height:100%;
			text-align:center;
		}
	}

	img{width:100%;display:block;}
	p{font-size:20px;hieght:40px;line-height:40px;padding-left:2rem;}

	.banner{margin-top:1rem;}

	h2{height:4rem;line-height:4rem;text-align:center;}

	article{font-size:15px;padding:0.3rem 1rem 1.2rem 1rem;background:#f5f5f5;}

	.instruction{
		border-top:1.5rem solid #f5f5f5;
		padding:1.5rem;
		padding-top:0;
		h3{
			height:3.5rem;
			line-height:3.5rem;
		}
		section{
			height:2rem;
			line-height:2rem;
			border-top:1px solid #ccc;
			nav{
				float:left;
			}
			.left{width:35%;}
			.right{width:65%;}
		}
	}

	.recommend{
		section{
			width:49.5%;
			height:18rem;
			float:left;
			border:1px solid #ccc;
			div{
				font-size:15px;
				width:100%;
				height:30px;
				line-height:30px;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
				padding-left:1rem;
			}
		}
	}

	.contact{border-top:1rem solid #f5f5f5;}

	.top{
		position:fixed;
		right:25px;
		bottom:70px;
		text-decoration:none;
		display:none;
	}

	.th10{clear:both;height:4.6rem;background:#f5f5f5;}
</style>