$(function(){
	$('#admin-top-close').click(function(){
		$('#admin-top-open').show().animate({
			top: 0
		});
		$('.admin-top').slideUp();
	});
	
	$('#admin-top-open').click(function(){
		$('.admin-top').slideDown();
		$('#admin-top-open').css({
			display: "none",
			top: "calc(16px + 1em * 2)"
		});
	});
});