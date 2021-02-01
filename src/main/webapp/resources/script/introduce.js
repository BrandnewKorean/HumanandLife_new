$(function(){
	$('.menu').click(function(){
		$('.menu').removeClass('active');
		$(this).addClass('active');
		
		$.ajax({
			url: $(this).attr('data-source'),
			type: "GET",
			success: function(result){
				$('#page').html(result);
			}
		});
	});
	
	$('#'+$('#menu').val()).click();
	
	var num = parseInt($('#menu').val().replace('menu',''));
	
	$('#left').click(function(){
		num--;
		if(num < 1) num = 1;
		
		$('#menu'+num).click();
	});
	
	$('#right').click(function(){
		num++;
		if(num > 3) num = 3;
		
		$('#menu'+num).click();
	});
});