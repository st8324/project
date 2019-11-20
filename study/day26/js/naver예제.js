$(function(){
	$('.keyboard').click(function(){
		$('.keyboard-icon').toggleClass('active');
	})
	$('.auto').click(function(){
		$('.auto-icon').toggleClass('active');
		$('.auto-box').toggle();
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

	$('.more').click(function(){
		$(this).toggleClass('fold');
		$('.more-box').toggle();
		$('.white-menu-sub1').removeClass('display-none');
		$('.white-menu-sub2').addClass('display-none');
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		if(!$(this).hasClass('fold')){
			initBlackMenu();
		}
	})
	
	//x버튼 클릭
	$('.white-menu-close').click(function(){
		//$('.more').toggleClass('fold');//접기->더보기로
		//$('.more-box').toggle();//박스 접는 역할
		//위 코드와 more버튼 클릭한 코드가 같기 때문에 
		//more버튼을 클릭한 이벤트를 실행
		$('.more').click();
		$('.white-menu-cancle').click();
	})
	//메뉴설정 버튼 클릭
	$('.white-menu-setting').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		//체크박스 관련 부분
		$('.check-img').removeClass('display-none');
		//검은 메뉴 처리 부분
		selMenuTmp = selMenu.slice(0);
		drawMenu(selMenuTmp);
		//녹색박스 설정
		
	})
	//취소 버튼 클릭
	$('.white-menu-cancle').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		closeWhiteBox();
		//메뉴 설정에서 선택된 메뉴들을 적용하지 않게다
		selMenuTmp = [];
		setInputCheckbox(selMenu);
		initBlackMenu(selMenu);
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
		var value=$(this).find('.checkbox-input').val();
		$(this).find('.check-img').toggleClass('checked-img');
		if($(this).find('.check-img').hasClass('checked-img')){
			$(this).find('.checkbox-input').prop('checked',true);
		}else{
			$(this).find('.checkbox-input').prop('checked',false);
		}
		var pos = selMenuTmp.indexOf(value);
		//선택한 메뉴가 체크 된 경우
		if(pos == -1){
			selMenuTmp.push(value);
		}
		//선택된 메뉴가 체크 해제된 경우
		else{
			selMenuTmp.splice(pos,1);
		}
		//selMenuTmp에 있는 배열에 맞춰 배치하기
		drawMenu(selMenuTmp);
	})
	//확인 버튼이 클릭되면
	$('.white-menu-ok').click(function(){
		selMenu = selMenuTmp.splice(0);
		if(selMenu.length == 0){
			alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.')
		}
		//white박스랑 black박스 닫고
		$('.more').click();
		//메뉴 적용
		initBlackMenu();
	})
	$('.white-menu-init').click(function(){
		alert('초기설정으로 돌아갑니다.');
		selMenu = [];
		initBlackMenu();
		$('.more').click();
		setInputCheckbox(selMenu);
	})
})
var oriMenu = ["dic","news","stock","deal","map"
			,"movie",	"music","book","comic"];
var selMenu = [];//확인 버튼을 눌러 확정된 메뉴들
var selMenuTmp = [];//메뉴설정에서 선택된 메뉴들

/* 검은색 메뉴를 초기화 하는 함수 */
function initBlackMenu(){
	var i = 0;
	//메뉴설정에서 선택된 메뉴가 있는 경우
	if(selMenu.length != 0){
		$('.black-container>a').each(function(){
			$(this).prop('class','');
			if(i<selMenu.length){
				$(this).addClass('black-box bg3 '+selMenu[i]);
			}else{
				$(this).addClass('display-none');
			}
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
	//초기화해야하는 경우
	else{
		$('.black-container>a').each(function(){
			//요소의 모든 클래스 제거
			$(this).prop('class','');
			$(this).addClass('black-box bg3 ' + oriMenu[i]);
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
}

//arr를 기준으로 검은색 메뉴들을 빈 박스 또는 선택된 메뉴로 배치
function drawMenu(arr){
	if(arr.length > 5){
		return;
	}
	var i = 0;
	$('.black-container>a').each(function(){
		//요소의 모든 클래스 제거
		$(this).prop('class','');
		if(i < arr.length){
			$(this).addClass('black-box bg3 '+arr[i]);
		}
		//else{
		$(this).addClass('box-menu');
		//}
		if(i>4){
			$(this).addClass('display-none');
		}
		i++;
	})
	$('.box-menu').eq(arr.length).addClass('select');
}
//arr를 기준으로 input 체크박스의 checked와 선택이미지를 설정하는 함수
function setInputCheckbox(arr){
	$('.checkbox-input').each(function(){
		/* 체크 박스의 value를 가져옴 */
		var value = $(this).val();
		/* value가 arr에 있는지 확인 */
		var pos = arr.indexOf(value);
		/* 있으면 체크박스를 체크하고 */
		if(pos != -1){
			$(this).prop('checked', true);
			$(this).prev().addClass('checked-img')
		}
		/* 없으면 체크박스를 해제한다 */
		else{
			$(this).prop('checked', false);
			$(this).prev().removeClass('checked-img')
		}
	})
}
