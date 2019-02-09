<template>
	<div class="all">
		<div class="head">
			<div class="search">
				<i class="iconfont icon-search"></i>
				<input type="text" placeholder="搜索我的尖叫好物">
			</div>
		</div>

		<img src="/static/img/furniture.png" alt="" class="first">

		<div class="instruction">
			<section v-for="data in furniture">
				<nav class="left">{{data}}</nav>
				<nav class="right">
					<i class="iconfont icon-more" @click="handleClick(furniture.indexOf(data)+20)"></i>
				</nav>
			</section>
		</div>

		<img src="/static/img/household.png" alt="" class="live">

		<div class="instruction">
			<section v-for="data in living">
				<nav class="left">{{data}}</nav>
				<nav class="right">
					<i class="iconfont icon-more" @click="handleClick(living.indexOf(data)+25)"></i>
				</nav>
			</section>
		</div>

		<div class="th10"></div>
	</div>
</template>

<script>
	import router from '../router/index.js';
	export default {
		name:'fenlei',
		data(){
			return {
				furniture:["沙发","椅凳","桌几","床","储物"],
				living:["灯具","用餐","时尚生活","收纳","烹饪","纺织品","家饰","儿童","卫浴"]
			}
		},
		mounted(){
			this.$store.dispatch("isShowAction",false);
		},
		methods:{
			handleClick(id){
				router.push(`/detail3/${id}`);
			}
		}
	}
</script>

<style scoped lang="scss">
	img{width:100%;display:block;}
	.first{border-top:0.8rem solid #fff;}
	.all{
		padding:1rem;
		padding-top:0;

		.head{
			height:3rem;
			position:relative;
			// background:#f5f5f5;

			.search{
				border-radius:2rem;
				background:#f5f5f5;
				height:2rem;
				width:18rem;
				position:absolute;
				top:50%;
				transform:translateY(-50%);
				input{
					height:1.5rem;
					width:15rem;
					position:absolute;
					top:50%;
					transform:translateY(-50%);
					outline:none;
					border:none;
					background:#f5f5f5;
				}

				i{
					width:2rem;
					height:2rem;
					line-height:2rem;
					float:left;
					text-align:center;
					font-size:15px;
					display:block;
				}
			}
		}
	}

	.instruction{
		section{
			height:3.5rem;
			line-height:3.5rem;
			border-bottom:1px solid #ccc;
			font-size:18px;
			nav{
				float:left;
				i{
					font-size:25px;
					text-align:right;
					display:block;
				}
			}
			.left{width:85%;padding-left:1rem;}
			.right{width:10%;}
		}
	}

	.live{border-top:1rem solid white;}

	.th10{
		height:6rem;
		background:#fff;
	}
</style>