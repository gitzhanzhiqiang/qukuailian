<template>
    <div class="app-container calendar-list-container partnersPage">
	  <div class="con">
	  	<div class="SUNFIN">
	  		<h2>SUNFIN TECH PTE. LTD.</h2>
	  		<ul>
	  			<li><i class="ph" :style="phone"></i>TEL：12345678</li>
	  			<li><i class="xinxu" :style="xinxu"></i>Email：12345678@qq.com</li>
	  			<li><i class="dibiao" :style="dibiao"></i>Registered Office Address：85 PASIR RIS GROVE #02-11 NV RESIDENCES SINGAPORE (518212)</li>
	  		</ul>
	  		<img :src="img1"/>
	  	</div>
	  </div>
        
    </div>
</template>
<script>
import ajax from '@utils/config';
export default {
    data() {
    	var phone = require("@res/imgd/phone.png")
    	var dibiao = require("@res/imgd/dibiao.png")
    	var xinxu = require("@res/imgd/xinxu.png")
        return {
           		phone:{
					backgroundImage: "url(" + phone + ")",
				},
				dibiao:{
					backgroundImage: "url(" + dibiao + ")",
				},
				xinxu:{
					backgroundImage: "url(" + xinxu + ")",
				},
          		img1: require("@res/imgd/ditu.png"),
        }
    },
    computed: {

    },
    created() {
    },
    mounted() {
    },
    methods: {
       
    },
    filters: {
    }
}
</script>
<style lang="less" scoped>
.SUNFIN{
	width: 100%;
	overflow: hidden;
}
.SUNFIN h2{
	font-size:36px;
	font-family:MyriadPro-Regular;
	font-weight:bold;
	color:rgba(0,0,0,1);
	line-height:36px;
	text-align: center;
	padding-top: 150px;
}
.SUNFIN ul {
	width: 1000px;
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 80px;
}
.SUNFIN ul li{
	width: 100%;
	overflow: hidden;
	line-height: 50px;
	margin-top:60px ;
}
.SUNFIN ul li i{
	display: inline-block;
	background-size: 100% 100%;
	float: left;
	margin-right: 36px;
}
.SUNFIN ul li i.ph{
	width: 38px;
	height: 38px;
	margin-top: 7px;
}
.SUNFIN ul li i.dibiao{
	width: 33px;
	height: 43px;
}
.SUNFIN ul li i.xinxu{
	width: 39px;
	height: 30px;
	margin-top: 10px;
}
.SUNFIN img{
	width: 100%;
	height: 240px;
	margin-bottom: 110px;
}
</style>


