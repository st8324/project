$(function(){
	$('.search-input>input').click(function(){
		$('.logo-icon').addClass('display-none');
		$('.back-icon').removeClass('display-none');

		$('.search-btn-group1').addClass('display-none');
		$('.search-btn-group2').removeClass('display-none');

		$('.search-input').addClass('search-input-focus');

		$('.search-list-box').removeClass('display-none');
		$('.body').addClass('display-none');
	})
	$('.logo').click(function(){
		if($(this).find('.back-icon').hasClass('display-none')){
			return;
		}
		$('.logo-icon').removeClass('display-none');
		$('.back-icon').addClass('display-none');

		$('.search-btn-group1').removeClass('display-none');
		$('.search-btn-group2').addClass('display-none');

		$('.search-input').removeClass('search-input-focus');
		
		$('.search-list-box').addClass('display-none');
		$('.body').removeClass('display-none');
	})

	$('.card-item').click(function(){
		$(this).toggleClass('card-item-select');
		$(this).find('.card-subs')
					 .toggleClass('card-subs-select');
		//선택된 언론사 갯수
		var count = $('.card-subs-select').length;
		if(count == 0){
			$('.subs-count-box').addClass('display-none');
		}else{
			var str = count + '개 언론사 구독';
			$('.subs-count-box').text(str);
			$('.subs-count-box').removeClass('display-none');
		}
	})

	$('.menu-item').click(function(){
		if($(this).hasClass('sel-pink')){
			$('.menu-list').addClass('menu-list2');
			$('.menu-plus').addClass('display-none');
		}else{
			$('.menu-list').removeClass('menu-list2');
			$('.menu-plus').removeClass('display-none');
		}
	})
})