$(function(){
	$('#logout').click(function(){
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
});