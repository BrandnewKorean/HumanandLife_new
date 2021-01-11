$(function(){
	if($('#privacy').val() == 'false' || $('#privacy').val() == '' || $('#use').val() == 'false' || $('#use').val() == ''){
		alert('이용약관에 동의해주세요');
		location.replace('/join-terms');
	}
	
	$('#join').submit(function(e){
		e.preventDefault();
		
		$.ajax({
			url: "/service/join",
			type: "post",
			data:{
				email: $('#email').val(),
				phone: $('#phone').val(),
				password: $('#password').val(),
				name: $('#name').val()
			},
			success: function(data){
				switch(data.code){
				case 0:
					alert('회원가입이 완료되었습니다.');
					window.location.href = "/login-page";
					break;
				case 1:
					alert('회원가입에 실패했습니다.');
					break;
				case 2:
					alert('이미 가입된 회원입니다.');
					window.location.href = "/login-page";
					break;
				default:
					alert('서버 오류');
				}
			}
		});
	});
});