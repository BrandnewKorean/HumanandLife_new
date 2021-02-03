$(function(){
	$('#footer-top').hover(function(){
		$('#footer-top .text').animate({
			width: 50
		});
	}, function(){
		$('#footer-top .text').animate({
			width: 0
		});
	});
	
	$('#footer-top').click(function(){
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});
});