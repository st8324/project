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
})