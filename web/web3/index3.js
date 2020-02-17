$(function(){
	$('.menu').hover(function(){
		$('.sub-menu-box').animate({'height':'200px'})
	},function(){
		$('.sub-menu-box').animate({'height':'0px'})
		$('.main-menu>li').removeClass('hover')	;
	})
	$('.main-menu>li').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	})
	$('.sub-menu>li').hover(function(){
		var index = $(this).attr('data-target');
		$('.main-menu>li').eq(index).addClass('hover').siblings().removeClass('hover');
	})
})