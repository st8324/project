$(function(){
	$('.main-menu>li').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index = $(this).attr('data');
		$('.sub-menu').addClass('display-none').eq(index).removeClass('display-none');
	})
	$('.menu').hover(function(){
		$('.sub-menu-box').animate({'width':'100%'});
	},function(){
		$('.sub-menu-box').animate({'width':'0%'});
		$('.main-menu>li').removeClass('hover')
	})
	$('.sub-menu>li').hover(function(){
		var index = $(this).parent().attr('data');
		$('.main-menu>li').eq(index).addClass('hover').siblings().removeClass('hover')
	})
})