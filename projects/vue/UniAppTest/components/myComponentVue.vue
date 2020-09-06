<template>
	<view>
		<h1 @click='haha1'>{{title}}</h1>
		<div>{{content1}}</div>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			content1:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			haha1:function(){
				console.log(1)
				this.$emit('haha1','bububu');
			},
		}
	}
</script>

<style>

</style>
