$(function(){
	$('.main-menu>li').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$(this).find('.sub-menu').animate({'width':'100%'});
	},function(){
		$(this).find('.sub-menu').animate({'width':'0%'});
	})
	$('.menu').hover(function(){
		
	},function(){
		$('.main-menu>li').removeClass('hover');
	})
	setInterval(function(){
		$('.img-slide').first().animate({'margin-top':'300px'},function(){
			$('.img-slide').last().detach().prependTo('.img-wrap');
			$(this).removeAttr('style');
		});
	},3000)
})