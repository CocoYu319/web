<template>
	<h2 class="red">test{{msg}}</h2>
</template>

<script>
	export default{
		name:'HelloWorld',
		props:{
			msg:{
				type:String,
				default:'这是默认值',
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.red{
		color:red;
	}
</style>
