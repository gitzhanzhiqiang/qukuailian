<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="new_details">
					<h2>Our mission</h2>
					<img :src="img1"/>
					<p style="margin-bottom: 50px;">Chinese real estate has entered the ebb period.<br />
At the end of 2017, the central government stressed that the house is for living, not for speculation, and cannot exceed the rigid demand, which will form a bubble once it is exceeded.As much as 63% of China's wealth is in real estate, housing prices must remain stable and not rise too fast.As a result, a variety of positive policies to stabilize housing prices have emerged in China this year.
In the future, Chinese real estate is neither likely to surge nor fall sharply.<br />
Facing the domestic real estate market, wang jianlin of wanda had to sell off domestic assets and sold a large number of domestic assets at a time of 63.17 billion yuan.
Li ka-shing, Hong Kong's richest man, sold domestic assets successively from 2013 to 2016 and actively invested in global assets, with a position of 300 billion yuan in the UK.
So why deploy overseas assets?<br />
1. To prevent RMB depreciation and seek the need of asset preservation and appreciation.Since trump took office, a sino-us trade war has led to a devaluation of the renminbi.At the same time, the fed's rate hike trend, along with a sustained rise in the 10-year Treasury yield, is also supporting a steady strengthening of the dollar.
2. Foreign security and secret needs.At present, the domestic living environment, whether air quality or food safety in general, is difficult to be satisfied.But there is little need for such concerns overseas.Moreover, foreign countries attach great importance to food safety.
3. Investment and asset allocation requirements.<br />
For real estate investment, it is mainly divided into two kinds of logic. The first one is to pursue the rise of real estate value and obtain investment returns.Many countries, such as the UK and Canada, have experienced substantial adjustment periods, while the us has experienced the subprime crisis, and the housing bubble is almost bursting.
The second logic is to obtain the income of annual cash flow in the form of property rental.Overseas home ownership is low. Over the past 20 years, U.S. home ownership has been only between 60 and 65 percent.
Demand for children education.As for children's education, the domestic education environment, education quality and the fairness level of education often force a large number of people to choose to send their children overseas to receive more advanced western education.With their children receiving education overseas, buying a home overseas is a necessity for almost every parent.If when the child goes abroad, carry on real estate investment, so use the gain that the house appreciates or the house rents to obtain and study abroad expenses to offset, so study abroad cost can reduce greatly, can earn not little profit even.
5. Other hidden benefits, for example, Greece could become the most popular migrant housing purchase program in Europe at present, with an extremely low threshold of 250,000 euros. The advantage of the identity transfer is also the main reason why this program can attract so many investors to buy houses.
According to the research data of authoritative institutions, 75% of them buy overseas property for investment purposes, 56.1% of them buy overseas for their children education, 42.2% of them want to emigrate through overseas property, and 37.6% of them want to live and 7.6% of them want to medical care.
Buying a house has always been one of the most popular investment among Chinese, and the overseas real estate market is also a very important orientation for Chinese to buy a house.</p>
			</div>
			<div class="xia">
				<p class="lefts" style="cursor: pointer;" @click="getTable('pre')">PREVIOUS ARTICLE</p>
				<p class="rights" style="cursor: pointer;" @click="getTable('next')">NEXT ARTICLE</p>
			</div>
		</div>
		
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				img1: require("@res/imgs/nue.png"),
				rowData:'',
				detaila:'',
				preId:'',
				nextId:'',
				urla:'https://img.zhaogu168.com/',
			}
		},
		computed: {
				
		},
		created() {
			 let data = this.$route.query.data ? JSON.parse(this.$route.query.data) : '';
			 console.log(data)
			 this.rowData = data
			this.fanding()
			//this.getTable()
		},
		mounted() {},
		methods: {

			getTable(num) {
				console.log(num)
				let bmun = ''
				if(num == 'pre'){
					console.log(this.preId)
					bmun = this.preId
				}else if(num == 'next'){
					console.log(this.nextId)
					bmun = this.nextId
				}else{
					bmun = this.rowData.id
				}
				console.log(bmun)
				
				ajax({
					url: 'news/getWithPreNextId',
					optionParams: {
						id:bmun,
						platform:'sunfin'
					}
				}).post()
				.then(response => {
					console.log(response)
					this.detaila = response.data ? response.data : {}
					this.preId = response.data.preId ? response.data.preId : ''
					this.nextId = response.data.nextId ? response.data.nextId : ''
				})
				.catch(error => {
					console.log(error)
				})
			},
			
			
			fanding(){
				window.scrollTo(0,0);
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
.new_details{
	width: 1200px;
	overflow: hidden;
	margin-bottom: 42px;
}

.new_details h2{
	font-size:36px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(0,0,0,1);
	line-height:40px;
	text-align: center;
		padding-top: 125px;

}
.new_details span{
	display: block;
	font-size:14px;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(153,153,153,1);
	line-height:20px;
	margin-top: 19px;
	margin-bottom: 40px;
}
.new_details p{
	font-size:14px;
font-family:Adobe Heiti Std R;
font-weight:normal;
color:rgba(153,153,153,1);
line-height: 25px;
}
.new_details img{
	width: 100%;
	height: 300px;
	display: block;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 40px;
}
.xia{
	width: 100%;
	overflow: hidden;
	margin-bottom: 59px;
}
.xia p{
	width:220px;
	height:38px;
	background:rgba(255,255,255,1);
	border:1px solid rgba(204,204,204,1);
	text-align: center;
	line-height: 38px;
	font-size:14px;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:rgba(153,153,153,1);
}

.xia p.lefts{
	float: left;
}
.xia p.rights{
	float: right;
}
</style>