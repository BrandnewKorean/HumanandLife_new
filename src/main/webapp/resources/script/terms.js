$(function(){
	var use = false;
	var privacy = false;
	
	$('.terms-check').change(function(){
		var id = $(this).attr('id');
		
		if($(this).is(':checked')){
			if(id == 'use')	use = true;
			else privacy = true;
		}else {
			if(id == 'use')	use = false;
			else privacy = false;
		}
	});
	
	$('#cancel').click(function(){window.location.href = "/home";});
	$('#terms').submit(function(){
		if(use && privacy){
			return true;
		}else if(!use){
			alert('회원이용약관에 동의해주세요.');
			return false;
		}else{
			alert('개인정보처리방침에 동의해주세요.');
			return false;
		}
	});
});