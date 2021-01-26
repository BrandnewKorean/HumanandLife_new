$(function(){
	$('.eyes').click(function(){
		$(this).toggleClass('active');
		
		var id = $(this).attr('id');
		
		if($(this).hasClass('active')){
			$(this).attr('src','/resources/icon/eyeoff.png');
			$('#'+id.replace('-view','')).attr('type','text');
		}else{
			$(this).attr('src','/resources/icon/eyeon.png');
			$('#'+id.replace('-view','')).attr('type','password');
		}
	});
});