var event = false;
var list = -1;

$(function(){
	$.ajax({
		url: "/admin/getCategoryList",
		type: "GET",
		success: function(data){
			var list = data.list;
			
			for(var i=0;i<list.length;i++){
				var name = '';
				
				if(list[i]['sub_category'] != null && list[i]['sub_category'] != ""){
					name = list[i]['main_category']+'('+list[i]['sub_category']+')';
				}else{
					name = list[i]['main_category'];
				}
				
				if(i == 0){
					$('#header .bottom-menu ul').append(
						'<li class="all">'
							+'<a href="'+list[i]['href']+'">'+name+'</a>'
						+'</li>'
					);
				}else{
					$('#header .bottom-menu ul').append(
						'<li>'
							+'<a href="'+list[i]['href']+'">'+name+'</a>'
						+'</li>'
					);
				}
			}
		}
	});
	
	$.ajax({
		url: "/admin/getHeaderBanner",
		type: "GET",
		success: function(data){
			var list = data.list;
			
			if(list.length > 0){
				$('#header .event-wrap').append('<div class="event"></div>');
				
				for(var i=0;i<list.length;i++){
					$('#header .event-wrap .event').append(
						'<ul class="event-list">'
							+'<li id="header-event'+i+'">'
								+'<a href="'+list[i]['href']+'">'
									+list[i]['name']
								+'</a>'
							+'</li>'
						+'</ul>'
					);
				}
				
				if(list.length > 1){
					var index = 0;
					
					setInterval(function(){
						$('#header-event'+index).slideUp();
						index++;
						if(index >= list.length){
							index = 0;
						}
						$('#header-event'+index).slideDown();
					}, 3000);
				}
			}
		}
	});
	
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
		$('#header-basket img').attr('src','/resources/image/header/basket_blue.png');
	}, function(){
		$('#header-basket img').attr('src','/resources/image/header/basket.png');
	});
	
	$('#header-delivery').hover(function(){
		$('#header-delivery img').attr('src','/resources/image/header/delivery_blue.png');
	}, function(){
		$('#header-delivery img').attr('src','/resources/image/header/delivery.png');
	});
	
	$('#header-wishlist').hover(function(){
		$('#header-wishlist img').attr('src','/resources/image/header/heart_pink.png');
	}, function(){
		$('#header-wishlist img').attr('src','/resources/image/header/heart.png');
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
	
	$('#header-search-txt').focus(function(){
		$('#header-search-wrap').css({
			border: "1px solid rgb(0,112,196)"
		});
	});
	
	$('#header-search-txt').focusout(function(){
		$('#header-search-wrap').css({
			border: "1px solid rgb(0,0,0)"
		});
	});
	
	$('#header-search-txt').keypress(function(e){
		if(e.keyCode == 13){
			$('#header-search').click();
		}
	});
	
	$('#header-search').click(function(){
		window.location.href = '/product?main_category=All&keyword='+$('#header-search-txt').val();
	});
	
	$(window).scroll(function(){
		if(window.scrollY <= 10){
			$('#header').css({
				boxShadow: "0 0 0 0 rgba(0,0,0,0)",
			});
		}else{
			$('#header').css({
				boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
			});
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