<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="con">
			<div class="new">
				<ul>
					<li v-for="itm in news">
						<div class="newt">
							<h2 @click="$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})">{{itm.title}}</h2>
							<span>{{itm.modifiedTime}}</span>
							<img :src="itm.thumbnail" />
							<p>{{itm.summary}}</p>
							<a @click="$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})">VIEW DETAILS</a>
						</div>

					</li>
				</ul>
			</div>
			<div class="fenye">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange" background layout="prev, pager, next" :total="total" :page-size="4">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			return {
				params: {
					pageIndex: 1,
					pageSize: 4,
					platform: 'sunfin',
				},
				urla: 'https://img.zhaogu168.com/',
				img1: require("@res/imgs/newaa.png"),
				news: [
										{
											title:'Gold Ore',
											modifiedTime:'Aug 31,2018',
											thumbnail:require("@res/imgs/newaa.png"),
											summary:'Gold Ore - The first open source platform for blockchain technology enthusiasts and developers. Our platform is dedicated to serve and give fun to users and non-users. Gold Ore will provide basic technology support and great development environment. Everyone who is interested in blockchain technology could apply for the platform developers....',
										},
										{
											title:'Gold Ore',
											modifiedTime:'Aug 31,2018',
											thumbnail:require("@res/imgs/newaa.png"),
											summary:'Gold Ore - The first open source platform for blockchain technology enthusiasts and developers. Our platform is dedicated to serve and give fun to users and non-users. Gold Ore will provide basic technology support and great development environment. Everyone who is interested in blockchain technology could apply for the platform developers....',
										},
				],
				total: 0,
			}
		},
		computed: {

		},
		created() {
			this.fanding()
			this.getTable()
		},
		mounted() {},
		methods: {
			//			 isOpen (row) {
			//			 	//$router.push({path:'/sunfin/details', query:{data: JSON.stringify(itm)}})
			//	            window.open('#/sunfin/details?data=' + JSON.stringify(row))
			//	        },
			getTable() {
				ajax({
						url: 'news/page',
						optionParams: this.params
					}).post()
					.then(response => {
						console.log(response.total)
						if(response.code == 200) {
							//this.news = response.data.records ? response.data.records : []
							this.total = response.data.total
//							this.news.map((item) => {
//								console.log(item.modifiedTime)
//								var timeshi = String(item.modifiedTime)
//								var timeshi = parseInt(timeshi.slice(0, 10))
//								var d = new Date(timeshi * 1000)
//								if((d.getMonth() + 1) == 1) {
//									var moth = 'Jan'
//								} else if((d.getMonth() + 1) == 2) {
//									var moth = 'Feb'
//								} else if((d.getMonth() + 1) == 3) {
//									var moth = 'Mar'
//								} else if((d.getMonth() + 1) == 4) {
//									var moth = 'Apr'
//								} else if((d.getMonth() + 1) == 5) {
//									var moth = 'May'
//								} else if((d.getMonth() + 1) == 6) {
//									var moth = 'Jun'
//								} else if((d.getMonth() + 1) == 7) {
//									var moth = 'Jul'
//								} else if((d.getMonth() + 1) == 8) {
//									var moth = 'Aug'
//								} else if((d.getMonth() + 1) == 9) {
//									var moth = 'Sep'
//								} else if((d.getMonth() + 1) == 10) {
//									var moth = 'Oct'
//								} else if((d.getMonth() + 1) == 11) {
//									var moth = 'Nov'
//								} else if((d.getMonth() + 1) == 12) {
//									var moth = 'Dec'
//								}
//								var times = moth + (d.getDate()) + ',' + (d.getFullYear())
//								this.$set(item, 'times', times)
//							})
						}

					})
					.catch(error => {
						console.log(error)
					})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			// 改变每一页的条数
			handleSizeChange(val) {
				this.params.pageSize = val;
				this.params.pageIndex = 1;
				this.getTable(); //更新列表
			},
			// 切换页码
			handleCurrentPageChange(val) {
				this.params.pageIndex = val;
				this.getTable(); //更新列表
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
.ggg_user{
	padding-top: 105px;
}
	.con {
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-bottom: 30px;
		padding-bottom: 60px;
		background: #F2F2F2;
	}
	
	.fenye {
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 999;
	}
	
	.new {
		width: 100%;
		overflow: hidden;
		background: #F2F2F2;
	}
	.new ul{
		width: 100%;
		overflow: hidden;
		background: #F2F2F2;
	}
	.new ul li {
		width: 100%;
		height: 469px;
		background: rgba(255, 255, 255, 1);
		margin-top: 20px;
		margin: 0 auto ;
		margin-bottom: 20px;
	}
	.new ul li .newt {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		position: relative;
	}
	
	.new ul li .newt h2 {
		font-size: 24px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(0, 0, 0, 1);
		line-height: 40px;
		padding: 36px 0px 0px 0px;
		cursor: pointer;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 将对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3;
		/** 显示的行数 **/
		overflow: hidden;
		
	}
	.new ul li .newt h2:hover{
		color:#4886ef ;
	}
	.new ul li .newt span {
		display: block;
		font-size: 14px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(153, 153, 153, 1);
		line-height: 30px;
		margin-bottom: 25px;
	}
	
	.new ul li .newt img {
		width: 400px;
		height: 220px;
		float: left;
		margin-bottom: 20px;
		margin-top: 30px;
	}
	
	.new ul li .newt p {
		width: 695px;
		height: 150px;
		float: right;
		margin-top: 30px;
		font-size: 14px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(153, 153, 153, 1);
		line-height: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 将对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 6;
		/** 显示的行数 **/
		overflow: hidden;
		/** 隐藏超出的内容 **/
	}
	
	.new ul li .newt a {
		height: 37px;
		font-size:14px;
		font-family:MyriadPro-Regular;
		font-weight:400;
		color:rgba(0,0,0,1);
		cursor: pointer;
		position: absolute;
		right: 50px;
		bottom: 60px
	}
</style>