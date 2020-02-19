$(function(){
	$('.main-menu>li').hover(function(){
		$('.main-menu>li>a').removeClass('hover');
		$(this).children('a').addClass('hover');
		$(this).find('.sub-menu').stop().animate({'height':'160px'})
	},function(){
		$(this).find('.sub-menu').stop().animate({'height':'0px'})
	})
	$('.menu').mouseout(function(){
		$('.main-menu>li>a').removeClass('hover');
	})
	setInterval(function(){
		$('.img-slide').first().animate({'margin-left':'-1200px'},1500, function(){
			$(this).detach().appendTo('.img-wrap').removeAttr('style');
		})
	},3000);
	$('.contents-head a').focusin(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		var isNotice = $(this).parent().hasClass('notice-tab')
		if(isNotice){
			$('.notice-contents').removeClass('display-none').siblings().addClass('display-none')
		}else{
			$('.gallery-contents').removeClass('display-none').siblings().addClass('display-none')
		}
	})
	$('.contents-head a').click(function(){
		$(this).focusin();
	})
})