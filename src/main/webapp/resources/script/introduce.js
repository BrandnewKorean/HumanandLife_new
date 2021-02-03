$(function(){
	var width = $('.page-wrap').width();
	var num = 0;
	var speed = 300;
	
	$(window).resize(function(){
		width = $('.page-wrap').width();
	});
	
	$('#page .intro .name').animate({
		opacity: 1
	},1000,function(){
		$('#page .intro .since').animate({
			opacity: 1
		},1000);
	});
	
	$('.menu').click(function(){
		$('.menu').removeClass('active');
		$(this).addClass('active');
		
		var id = $(this).attr('id');
		num = parseInt(id.replace('menu',''));
		
		$('#page').css({
			transition: speed+"ms",
			transform: "translate(-"+(width*num)+"px,0)"
		});
	});
	
	if($('#menu').val() != ''){
		$('#'+$('#menu').val()).click();
	}
	
	$('#left').click(function(){
		num--;
		if(num <= 0){
			num = 0;
		}
		
		$('#page').css({
			transition: speed+"ms",
			transform: "translate(-"+(width*num)+"px,0)"
		});
		
		$('.menu').removeClass('active');
		$('#menu'+num).addClass('active');
	});
	
	$('#right').click(function(){
		num++;
		if(num > 3) num = 3;
		
		$('#page').css({
			transition: speed+"ms",
			transform: "translate(-"+(width*num)+"px,0)"
		});
		
		$('.menu').removeClass('active');
		$('#menu'+num).addClass('active');
	});
});