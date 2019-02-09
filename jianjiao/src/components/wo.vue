<template>
	<div>
		我
	</div>
</template>

<script>
	export default {
		name:'wo',
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	body, html {
    position: relative;
}

/*获取信息*/
.frombox {
    /*position: relative;*/
    width: 6.9rem;
}
.up {
    width: 6.9rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    background-color: #fff;
    z-index: 5;
    color: #000;
    margin: 0 auto;
}
.up input {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #EAEAEA;
    font-size: 0.28rem;
    color: #000;
    font-family: 'PingFangSC-Regular';
}
.up input[name="button"] {
    width: 2rem;
    height: 1rem;
    border: none;
    position: absolute;
    right: 0rem;
    top: 0;
    padding: 0;
    text-align: right;
}
input {
    outline: none;
}
.huoqu {
    position: relative;
}
.huoqu span {
    font-size: 0.28rem;
    color: #000;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
}
input[name="submit"] {
    margin: 0 auto;
    vertical-align: middle;
    width: 6.9rem;
    height: 0.88rem;
    background-color: #FFD444;
    font-size: 0.28rem;
    position: absolute;
    top: 4.38rem;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
}
input[name="yanzhengma"] {
    border: none;
}

/* 本例子css -------------------------------------- */
.tabBox .hd {
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 20px;
    background: #FCFCFC;
}
.tabBox .hd ul {
    background: #FCFCFC;
    height: 0.88rem;
    overflow: hidden;
}
.tabBox .hd ul li {
    float: left;
    color: #808080;
    margin: 0 0.92rem;
    font-size: 0.28rem;
    padding: 0 0.24rem;
}
.tabBox .hd ul li a {
    color: #808080;
}
.tabBox .hd ul .on {
    border-bottom: 0.06rem solid #202020;
    color: #000;
    height: 0.88rem;
}
.tabBox .hd ul .on a {
    display: block;
    color: #000; /* 修复Android 4.0.x 默认浏览器当前样色无效果bug */
}
.tabBox .bd li {
    height: 33px;
}
.tabBox .bd a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 去掉链接触摸高亮 */
.tabBox .bd li a {
    color: #555;
}
.tabBox .bd .t {
    height: 5.05rem;
    /*position: relative;*/
}
#leftTabBox {
    width: 6.9rem;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 0.3rem;
    height: 2.9rem;
}

/*快速注册*/
.register {
    position: absolute;
    right: 0.3rem;
    top: 6.7rem;
    color: #000000;
    font-size: 0.28rem;
    font-family: 'PingFangSC-Regular';
}
</style>