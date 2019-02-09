<template>
	<div>
		<a href="#one"></a>
		<img src="/static/img/head.png" alt="">
		<ul class="product" v-infinite-scroll="loadMore" 
  infinite-scroll-disabled="loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
			<li  v-for="data in list">
				<img :src="data.productImg" alt="">
				<div>{{data.productTitle}}</div>
				<div>￥{{data.originalPrice}}</div>
			</li>
		</ul>
		<div class="more" @click="loadMore">{{more}}</div>

		<a name="one" href="#" class="top">返回顶部</a>
		<div class="th10"></div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:'detail3',
		data(){
			return {
				list:[],
				current:1,
				loading:false,
				more:'加载更多'
			}
		},
		mounted(){
			var id=this.$route.params.id;
			
			axios.get(`/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1547088798371`).then((res)=>{
				this.list=res.data.data.products;
			});

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

			this.$store.dispatch("isShowAction",false);
		},
		methods:{
			loadMore(){
				console.log("loading...");
				var id=this.$route.params.id;
				this.current++;

				axios.get(`/pages/category/${id}?pageNumber=${this.current}&orderBy=onShelfTime&sort=desc&_=1533371975877`).then((res)=>{

					var newList=res.data.data.products;
					this.list=[...this.list,...newList];

					if(newList.length<20){
						this.more="没有更多了";
						this.loading = true;
						return;
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">                           
	img{width:100%;}
	.product{
		height:171rem;
		li{
			width:49.5%;
			height:17rem;
			float:left;
			border:1px solid #f5f5f5;
			div{
				font-size:15px;
				width:85%;
				height:25px;
				line-height:25px;
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
				padding-left:1rem;
			}
		}
	}

 	.more{
 		height:2.5rem;
 		line-height:2.5rem;
 		text-align:center;
 		background:white;
 		clear:both;
 	}

	.top{
		position:fixed;
		right:25px;
		bottom:70px;
		text-decoration:none;
		display:none;
	}

	.th10{
		clear:both;
		height:4.5rem;
		background:#fff;
	}
</style>