<template>
	<div class="app-container calendar-list-container ggg_user">
		<div class="deng" :style="guoqi">
			<div class="con">
				<div class="pplyfor">
					<div class="information">
						<div class="information_ti" v-show="biaodana">
							<el-form :model="params" :rules="rules" ref="params" label-width="100px" class="demo-ruleForm">
								<ul>
									<li>
										
										<h2>FORGOT PASSWORD</h2>
										<span>Please enter your email<br /> address and you will be sent instructions on <br />how to change your password.</span>
									</li>
									<li>
										<p>E-mail:</p>
										<el-form-item label="" prop="email">
											<el-input v-model="params.email" placeholder="Please enter content"></el-input>
										</el-form-item>
									</li>
								</ul>
							</el-form>
							<el-button type="primary" @click="submitForm('params')" round>NEXT STEP</el-button>
							<p><span @click="$router.push('/sunfin/contactUs')">RETURN TO SIGN IN</span></p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ajax from '@utils/config';
	export default {
		data() {
			var guoqi = require("@res/imgd/dengrubei.png");
			return {
				guoqi: {
		            backgroundImage: "url(" + guoqi + ")",
		         },			
				loading:false,
				params: {
					fullName: '', //全名
					email: '', //email
					regActivityArr:'',
				},
				diqu:'',
				count: '',
				isshow: true,
				selectDataa: {
					label: 'Award planning for developers',
					id: 1
				},
				checked: true,
				rules: {
					fullName: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'blur'
					}, ],
					sex: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'blur'
					}, ],
					nationality: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'blur'
					}, ],
					phone: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'change'
					}],
					smsCode: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'change'
					}],
					email: [{
						required: true,
						message: '*Enter the correct format',
						trigger: 'change'
					}],
				},

				minga: true,
				mingb: false,
				biaodana: true,
				biaodanb: false,
				optionsa: [{
					value: '1',
					label: '男'
				}, {
					value: '2',
					label: '女'
				}, {
					value: '0',
					label: '未知'
				}, ],
			}
		},
		computed: {

		},
		created() {
			this.fanding()
		},
		mounted() {},
		methods: {
			guojia(value) {
				console.log(value)
				this.selectData.map((item) => {
					if(value == item[0]){
						console.log(item[2])
						this.diqu = item[2]
					}
				})
			},
			getTable() {
				this.loading = true
				//this.params.phone = this.diqu + this.params.phone
				ajax({
						url: '/tApplyActivity/add',
						optionParams: this.params
					}).post()
					.then(response => {
						console.log(response)
						if(response.code == 200){
							this.loading = false
							this.$router.push({path:'/sunfin/pagetali', query:{data: JSON.stringify(this.params.phone)}})
						}else{
							this.$message.warning(""+response.msg+"")
							this.loading = false
						}
					})
					.catch(error => {
						console.log(error)
						this.loading = false
					})
			},
			fanding() {
				window.scrollTo(0, 0);
			},
			submitForm(formName) {
				console.log(formName)
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('submit!');
						this.minga = false
						this.biaodana = false

						this.mingb = true
						this.biaodanb = true
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			tab(num) {
				if(num == 'minga') {
					this.mingb = false
					this.biaodanb = false

					this.minga = true
					this.biaodana = true
				} else {
					this.minga = false
					this.biaodana = false

					this.mingb = true
					this.biaodanb = true
				}
			},
		},
		filters: {}
	}
</script>
<style lang="less" scoped>
.deng{
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	position: relative;
}
	.pplyfor {
		width:1200px;
		height:766px;
		background: white;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		box-shadow:9px 14px 21px rgba(4,0,0,0.17);
	}
	
	.pplyfor .information {
		width: 1000;
		height: 500px;
		background: rgba(255, 255, 255, 1);
		margin: 0 auto;
	}
	
	.pplyfor .information .information_ti{
		width: 580px;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 85px;
	}
	
	.pplyfor .information .information_ti button{
		width:580px;
		height:52px;
		background:rgba(58,98,210,1);
		border-radius: 0px;
	}
	
	.pplyfor .information .information_ti ul {
		overflow: hidden;
		margin-bottom: 20px;
	}
	
	.pplyfor .information .information_ti ul li {
		margin-bottom: 40px;
		position: relative;
	}
	
	.pplyfor .information .information_ti ul li p {
		width: 100%;
		line-height: 30px;
		font-size: 16px;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		color: rgba(0, 0, 0, 1);
		margin-bottom: 5px;
	}
	.pplyfor .information .information_ti>p{
		font-size:16px;
		font-family:SenticoSansDT-Light;
		font-weight:normal;
		color:rgba(0,0,0,1);
		line-height:69px;
	}
	.pplyfor .information .information_ti>p>span{
		cursor: pointer;
	}
.pplyfor .information .information_ti ul li h2{
	font-size:38px;
	font-family:MyriadPro-Regular;
	font-weight:bold;
	color:rgba(0,0,0,1);
}
.pplyfor .information .information_ti ul li span{
	font-size:16px;
font-family:SenticoSansDT-Light;
font-weight:normal;
color:rgba(0,0,0,1);
line-height: 25px;
}
</style>