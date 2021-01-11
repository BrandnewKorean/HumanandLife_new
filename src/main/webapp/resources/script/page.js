$(function(){
	$('.page-content-nav-link').click(function(){
		$('.page-content-nav-link').removeClass('active-page');
		$(this).addClass('active-page');
		$('.page-content-title').text($(this).text());
		
		$.ajax({
			url: $(this).attr('data-source'),
			type: "get",
			success: function(result){
				$('.page-content-html').html(result);
			}
		});
	});
	
	$('.'+$('#menu').val()).click();
});