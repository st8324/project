$(function(){
	$('.keyboard').click(function(){
		$('.keyboard-icon').toggleClass('active');
	})
	$('.auto').click(function(){
		$('.auto-icon').toggleClass('active');
		$('.auto-box').toggle();
	})
	$('.more').click(function(){
		$(this).toggleClass('fold');
		$('.more-box').toggle();
		$('.white-menu-sub1').removeClass('display-none');
		$('.white-menu-sub2').addClass('display-none');
	})
	$('.r2-btn').click(function(){
		//다음페이지로 가야할지 이전페이지로 가야할지를 결정하는 변수
		//1이면 다음페이지, -1이면 이전페이지
		var addNum = 0;
		//현재 페이지 번호 가져옴
		var currentPage = $('.page-current').text();
		//가져온 페이지 번호는 문자열이어서 정수로 바꿈
		currentPage = parseInt(currentPage);
		//전체 페이지 번호 가져옴
		var totalPage = $('.page-total').text();
		//가져온 전체 페이지 번호는 문자열이어서 정수로 바꿈
		totalPage = parseInt(totalPage);
		//클릭한 버튼이 이전버튼이면
		if($(this).hasClass('prev')){
			addNum = -1;
		}
		//클릭한 버튼이 다음버튼이면
		else{
			addNum = 1;
		}
		currentPage += addNum;
		//현재 페이지가 1페이지에서 total페이지 사이가 아닌 경우
		if(currentPage == 0){
			currentPage = totalPage;
		}else if(currentPage>totalPage){
			currentPage = 1;
		}
		$('.page-current').text(currentPage);
	})
	$('.l3-item').hover(function(){
		$(this).find('.l3-item-hover').toggle();
	})
	//x버튼 클릭
	$('.white-menu-close').click(function(){
		//$('.more').toggleClass('fold');//접기->더보기로
		//$('.more-box').toggle();//박스 접는 역할
		//위 코드와 more버튼 클릭한 코드가 같기 때문에 
		//more버튼을 클릭한 이벤트를 실행
		$('.more').click();
	})
	//메뉴설정 버튼 클릭
	$('.white-menu-setting').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
	})
	//취소 버튼 클릭
	$('.white-menu-cancle').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
	})
})