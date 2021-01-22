var event = false;
var list = -1;

$(function(){
	$('.logout').click(function(){
		$.ajax({
			url: "/service/logout",
			type: "post",
			success: function(data){
				switch(data.code){
				case 0:
					alert('로그아웃 되었습니다.');
					break;
				case 1:
					alert('세션이 만료되어 자동 로그아웃되었습니다.');
					break;
				}
				window.location.reload();
			}
		});
	});
	
	$('#header-menu').click(function(){
		$('#header-menu-modal').show();
	});
	
	$('.inner').click(function(e){
		if($(e.target).hasClass('inner')){
			$('#header-menu-modal').hide();
		}
	});
	
	$('#header-person').hover(function(){
		$('#header-person-submenu').show();
	}, function(){
		$('#header-person-submenu').hide();
	});
	
	$('#header-basket').hover(function(){
		$(this).attr('src','/resources/image/header/basket_blue.png');
	}, function(){
		$(this).attr('src','/resources/image/header/basket.png');
	});
	
	$('#header-delivery').hover(function(){
		$(this).attr('src','/resources/image/header/delivery_blue.png');
	}, function(){
		$(this).attr('src','/resources/image/header/delivery.png');
	});

	if(window.innerWidth < 1200){
		event = true;
		$('#header-menu-modal .inner .list').hide();
		initEvent();
	}
	
	$(window).resize(function(){
		if(window.innerWidth < 1200){
			event = true;
			$('#header-menu-modal .inner .list').hide();
			initEvent();
		}else{
			event = false;
			$('#header-menu-modal .inner .list').show();
		}
	});
});

function initEvent(){
	$('#header-menu-modal .inner .list-wrap .title').click(function(e){
		e.stopImmediatePropagation();
		if(event){
			var id = $(this).attr('id');
			var index = parseInt(id.replace('title',''));
			
			if(index != list){
				$('#header-menu-modal .inner .list').slideUp();
				$('#header-menu-modal .inner #list'+index).slideDown();
				list = index;
			}else{
				$('#header-menu-modal .inner #list'+index).slideUp();
				list = -1;
			}
		}
	});
}