var oriMenu = ["dic","news","stock","deal","map"
			,"movie",	"music","book","comic"];
var selMenu = [];

/* 검은색 메뉴를 초기화 하는 함수 */
function initBlackMenu(){
	var i = 0;
	$('.black-container>a').each(function(){
		//요소의 모든 클래스 제거
		$(this).prop('class','');
		$(this).addClass('black-box');
		$(this).addClass('bg3');
		$(this).addClass(oriMenu[i]);
		if(i<5){
			$(this).addClass('box-menu');
		}
		i++;
	})
}
//white-box가 닫히면서 해야할 작업들
function closeWhiteBox(){
	//검은 메뉴를 초기화할지 아니면 선택된 메뉴로 보여줄지 결정
	if(selMenu.length == 0){
		initBlackMenu();
	}else{

	}
}

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
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		if(!$(this).hasClass('fold')){
			closeWhiteBox();
		}
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
		//체크박스 관련 부분
		$('.check-img').removeClass('display-none');
		//검은 메뉴 처리 부분
		$('.black-container .black-box').each(function(){
			if(!$(this).hasClass('box-menu')){
				$(this).addClass('display-none');
			}else{
				$(this).prop('class','box-menu');
			}
		})
	})
	//취소 버튼 클릭
	$('.white-menu-cancle').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		closeWhiteBox();
	})
	//메뉴설정에서 체크박스를 선택했을 때
	$('.check-box').click(function(){
		/*
		체크를 해제하는 상황은 신경 쓸 필요가 없다.
		체크를 해야하는 상황은 신경써야한다. 최대 갯수가 지정 : 5
		*/
		if(!$(this).find('.check-img').hasClass('checked-img')){
			if($('.checked-img').length == 5){
				alert('최대 5개까지 선택 가능합니다.');
				return ;
			}
		}

		$(this).find('.check-img').toggleClass('checked-img');
		if($(this).find('.check-img').hasClass('checked-img')){
			$(this).find('.checkbox-input').prop('checked',true);
		}else{
			$(this).find('.checkbox-input').prop('checked',false);
		}
	})
})