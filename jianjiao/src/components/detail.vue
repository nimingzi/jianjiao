<template>
	<div>
		<a href="#one"></a>
		<img :src="srcImg" alt="">
		<div class="pro" v-if="list.length!=0" v-for="data in list">
			<section>
				<img :src="data.productImg" alt="">
				<div>{{data.productTitle}}</div>
				<p>￥{{data.originalPrice}}</p>
				<div>{{data.prizeOrSlogan}}</div>
			</section>
		</div>

		<a name="one" href="#" class="top">返回顶部</a>

		<div class="th10"></div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:'detail',
		data(){
			return {
				srcImg:'',
				list:[]
			}
		},
		mounted(){
			var arr=this.$route.params.id.split('=');
			var id=arr[0];
			var srcImg='/page/banners/'+arr[1];
			this.srcImg=srcImg;

			axios.get(`/topic/${id}/products?_=1533272726166`).then((res)=>{
				this.list=res.data.lists;
			});

			this.$store.dispatch("isShowAction",false);

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
	img{width:100%;display:block;}

	section{
		width:49.5%;
		height:18rem;
		border:1px solid #f5f5f5;
		float:left;
		div,p{
			font-size:15px;
			width:90%;
			height:20px;
			line-height:20px;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
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
		clear:both;
		height:3.6rem;
		background:#f5f5f5;
	}
</style>