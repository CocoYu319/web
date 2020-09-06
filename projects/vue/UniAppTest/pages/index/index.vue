<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<switch checked="true"></switch>
			
		</view>
		<yp-number-box></yp-number-box>
		<yp-number-box :min="0" :max="9"></yp-number-box>
		<yp-number-box @change="bindChange"></yp-number-box>
		<yp-number-box @change="change" :index="index" /> -->
		<myComponentVue title="KKKK" content1="ddddddd" @haha1='tapp'></myComponentVue>
	</view>
</template>

<script>
	
import ypNumberBox from "@/components/yp-number-box/yp-number-box.vue"
import myComponentVue from "@/components/myComponentVue.vue"
	export default {
		data() {
			return {
				// title: 'Hello'
				
			}
		},
		onLoad() {

		},
		methods: {
			tapp:function(e){
				console.log(e)
			}
		},
		components:{
			ypNumberBox,
			myComponentVue,
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
