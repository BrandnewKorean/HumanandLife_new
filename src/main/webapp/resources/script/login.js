$(function(){
	var email_test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var idCheck = false;
	var pwCheck = false;
	
	$('.login-input').focus(function(){
		var id = $(this).attr('id');
		
		$('#'+id+'-label').animate({
			top: 0,
			fontSize: "0.9rem"
		},200);
		
		$('#'+id+'-wrap').css({
			borderBottom: "2px solid rgb(0,112,196)"
		});
	});
	
	$('.login-input').focusout(function(){
		if($(this).val() == ''){
			var id = $(this).attr('id');
			
			$('#'+id+'-label').animate({
				top: "1.5rem",
				fontSize: "1.2rem"
			},200);
		}
	});
	
	$('#id').focusout(function(){
		if($(this).val() == ''){
			$('#id-check').text('이메일을 입력해주세요.');
			$('#id-wrap').addClass('wrong-input');
		}
	});
	
	$('#id').on('input', function(){
		if($(this).val() == ''){
			$('#id-check').text('이메일을 입력해주세요.');
			$('#id-wrap').addClass('wrong-input');
		}else if(!email_test.test($(this).val())){
			idCheck = false;
			$('#id-check').text('이메일을 올바르게 입력해 주세요.');
			$('#id-wrap').addClass('wrong-input');
		}else{
			idCheck = true;
			$('#id-check').text('');
			$('#id-wrap').removeClass('wrong-input');
		}
	});
	
	$('#password-button').click(function(){
		$(this).toggleClass('active');
		$(this).empty();
		
		if($(this).hasClass('active')){
			$(this).append('<img src="/resources/icon/eyeoff.png" width="100%">');
			$('#password').attr('type','text');
		}else{
			$(this).append('<img src="/resources/icon/eyeon.png" width="100%">');
			$('#password').attr('type','password');
		}
	});
	
	$('#password').on('input', function(){
		if($(this).val().length == 0){
			pwCheck = false;
			$('#password-check').html('<a id="english">영어</a>/<a id="number">숫자</a>/<a id="spec">특수문자</a> 최소 1개 이상 조합(<a id="min-length">8</a>~<a id="max-length">16</a>자)');
			$('#password-wrap').addClass('wrong-input');
		}else if($(this).val().length < 8){
			pwCheck = false;
			$('#password-check').html('<a id="english">영어</a>/<a id="number">숫자</a>/<a id="spec">특수문자</a> 최소 1개 이상 조합(<a id="min-length">8</a>~<a id="max-length">16</a>자)');
			if(englishCheck($(this).val())){
				$('#english').css('color','rgb(0,112,196)');
			}
			if(numberCheck($(this).val())){
				$('#number').css('color','rgb(0,112,196)');
			}
			if(specCheck($(this).val())){
				$('#spec').css('color','rgb(0,112,196)');
			}
			$('#max-length').css('color','rgb(0,112,196)');
			$('#password-wrap').addClass('wrong-input');
		}else if($(this).val().length > 16){
			pwCheck = false;
			$('#password-check').html('<a id="english">영어</a>/<a id="number">숫자</a>/<a id="spec">특수문자</a> 최소 1개 이상 조합(<a id="min-length">8</a>~<a id="max-length">16</a>자)');
			if(englishCheck($(this).val())){
				$('#english').css('color','rgb(0,112,196)');
			}
			if(numberCheck($(this).val())){
				$('#number').css('color','rgb(0,112,196)');
			}
			if(specCheck($(this).val())){
				$('#spec').css('color','rgb(0,112,196)');
			}
			$('#password-wrap').addClass('wrong-input');
		}else{
			$('#min-length').css('color','rgb(0,112,196)');
			$('#max-length').css('color','rgb(0,112,196)');
			if(englishCheck($(this).val()) && numberCheck($(this).val()) && specCheck($(this).val())){
				pwCheck = true;
				$('#password-check').text('');
				$('#password-wrap').removeClass('wrong-input');
			}else{
				pwCheck = false;
				$('#password-check').html('<a id="english">영어</a>/<a id="number">숫자</a>/<a id="spec">특수문자</a> 최소 1개 이상 조합(<a id="min-length">8</a>~<a id="max-length">16</a>자)');
				$('#password-wrap').addClass('wrong-input');
				if(englishCheck($(this).val())){
					$('#english').css('color','rgb(0,112,196)');
				}
				if(numberCheck($(this).val())){
					$('#number').css('color','rgb(0,112,196)');
				}
				if(specCheck($(this).val())){
					$('#spec').css('color','rgb(0,112,196)');
				}
				if($(this).val().length > 7){
					$('#min-length').css('color','rgb(0,112,196)');
				}
				if($(this).val().length < 16){
					$('#max-length').css('color','rgb(0,112,196)');
				}
			}
		}
	});
	
	$('#password').keypress(function(e){
		if(e.keyCode == 13){
			$('#submit').click();
		}
	});
	
	$('#submit').click(function(){
		var vo;
		
		vo = {
			email: $('#id').val(),
			password: $('#password').val()
		};
		
		if(idCheck && pwCheck){
			$.ajax({
				url: "/service/login",
				type: "post",
				data: vo,
				success: function(data){
					switch(data.code){
					case 0:
						alert('로그인에 성공했습니다.');
						window.location.href = "/home";
						break;
					case 1:
						alert('비밀번호를 확인해주세요.');
						break;
					case 2:
						alert('존재하지 않는 아이디입니다.');
						break;
					default:
						alert('서버오류');
					}
				}
			});
		}
	});
});

function englishCheck(string){
	if(string.length == string.replace(/[a-zA-Z]/gi,'').length){
		return false;
	}else{
		return true;
	}
}

function numberCheck(string){
	if(string.length == string.replace(/[0-9]/gi,'').length){
		return false;
	}else{
		return true;
	}
}

function specCheck(string){
	if(string.length == string.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,'').length){
		return false;
	}else{
		return true;
	}
}