$(document).ready(function(){
	$('.menu').hover(function(){
		$('.sub-menu-box').animate({"height":"160px"})
	},function(){
		$('.sub-menu-box').animate({"height":"0px"})
	})
})