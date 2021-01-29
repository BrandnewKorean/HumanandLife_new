$(function(){
	var email_test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var name = false;
	var email = false;
	var emailCheck = false;
	var password = false;
	var passwordCheck = false;
	var phone = false;
	var phoneCheck = false;
	var term = [false, false, false, false, false];
	
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
	
	$('.join-input').focus(function(){
		var id = $(this).attr('id');
		
		$('#'+id+'-wrap').css({
			borderBottom: "2px solid rgb(0,112,196)"
		});
	});
	
	$('#name').on('input', function(){
		if($(this).val() == ''){
			name = false;
			$('#name-check').text('이름을 입력해주세요.');
			$('#name-wrap').addClass('wrong-input');
		}else{
			name = true;
			$('#name-check').text('');
			$('#name-wrap').removeClass('wrong-input');
		}
	});
	
	$('#email').on('input', function(){
		if($(this).val() == ''){
			email = false;
			$('#email-check').text('이메일을 입력해주세요.');
			$('#email-wrap').addClass('wrong-input');
		}else if(!email_test.test($(this).val())){
			email = false;
			$('#email-check').text('이메일을 올바르게 입력해 주세요.');
			$('#email-wrap').addClass('wrong-input');
		}else{
			email = true;
			$('#email-check').text('');
			$('#email-wrap').removeClass('wrong-input');
		}
	});
	
	$('#email').focusout(function(){
		if(email){
			$.ajax({
				url: "/service/duplicateCheck",
				type: "POST",
				data:{
					email: $('#email').val()
				},
				success: function(data){
					switch(data.code){
					case 0:
						$('#email-check').text('');
						$('#email-wrap').removeClass('wrong-input');
						emailCheck = true;
						break;
					case 1:
						$('#email-check').text('이미 가입된 이메일입니다.');
						$('#email-wrap').addClass('wrong-input');
						emailCheck = false;
						break;
					default:
						customAlert({
							content: "중복검사 오류",
						});
						emailCheck = false;
						break;
					}
				}
			});
		}
		
	});
	
	
	$('#password').on('input', function(){
		if($(this).val().length == 0){
			password = false;
			$('#password-check').html('<a id="english">영어</a>/<a id="number">숫자</a>/<a id="spec">특수문자</a> 최소 1개 이상 조합(<a id="min-length">8</a>~<a id="max-length">16</a>자)');
			$('#password-wrap').addClass('wrong-input');
		}else if($(this).val().length < 8){
			password = false;
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
			password = false;
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
				password = true;
				$('#password-check').text('');
				$('#password-wrap').removeClass('wrong-input');
			}else{
				password = false;
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
	
	$('#password-confirm').on('input', function(){
		if($('#password').val() == ''){
			passwordCheck = false;
			$('#password-confirm-check').text('비밀번호를 입력해주세요.');
			$('#password-confirm-wrap').addClass('wrong-input');
		}else if($('#password').val() != $(this).val()){
			passwordCheck = false;
			$('#password-confirm-check').text('비밀번호가 일치하지 않습니다.');
			$('#password-confirm-wrap').addClass('wrong-input');
		}else{
			passwordCheck = true;
			$('#password-confirm-check').text('');
			$('#password-confirm-wrap').removeClass('wrong-input');
		}
	});
	
	$('#phone-first').change(function(){
		if($(this).val() == ''){
			$('#phone-first-wrap').addClass('wrong-input');
		}else{
			$('#phone-first-wrap').removeClass('wrong-input');
		}
		
		if(phoneChecking()){
			$('#phone-check').text('');
			phone = true;
		}else{
			$('#phone-check').text('연락처를 입력해주세요');
			phone = false;
		}
	});
	
	$('#phone-second').focus(function(){$(this).val('');$('#phone-second-wrap').addClass('wrong-input');});
	$('#phone-third').focus(function(){$(this).val('');$('#phone-third-wrap').addClass('wrong-input');});
	
	$('#phone-second').on('input', function(){
		if($(this).val() == ''){
			$('#phone-second-wrap').addClass('wrong-input');
		}else if(!numberCheck($(this).val())){
			$(this).val($(this).val().substring(0,$(this).val().length-1));
		}else if($(this).val().length > 4){
			$(this).val($(this).val().substring(0,$(this).val().length-1));
			$('#phone-third').focus();
		}else{
			$('#phone-check').text('');
			$('#phone-second-wrap').removeClass('wrong-input');
		}
		
		if(phoneChecking()){
			$('#phone-check').text('');
			phone = true;
		}else{
			$('#phone-check').text('연락처를 입력해주세요');
			phone = false;
		}
	});
	
	$('#phone-third').on('input', function(){
		if($(this).val() == ''){
			$('#phone-third-wrap').addClass('wrong-input');
		}else if(!numberCheck($(this).val())){
			$(this).val($(this).val().substring(0,$(this).val().length-1));
		}else if($(this).val().length > 4){
			$(this).val($(this).val().substring(0,$(this).val().length-1));
		}else{
			$('#phone-check').text('');
			$('#phone-third-wrap').removeClass('wrong-input');
		}
		
		if(phoneChecking()){
			$('#phone-check').text('');
			phone = true;
		}else{
			$('#phone-check').text('연락처를 입력해주세요');
			phone = false;
		}
	});
	
	$('#phone-confirm').click(function(){
		if(!phone){
			customAlert("연락처를 입력해주세요.");
			phoneCheck = false;
		}else{
			customAlert("인증되었습니다.");
			phoneCheck = true;
		}
	});
	
	$('#terms-selectall').change(function(){
		if($(this).prop('checked')){
			$('.term').prop('checked', true);
			for(var i=0;i<term.length;i++){
				term[i] = true;
			}
		}else{
			$('.term').prop('checked', false);
			for(var i=0;i<term.length;i++){
				term[i] = false;
			}
		}
	});
	
	$('.term').change(function(){
		var index = $(this).attr('data-index');
		var count = 0;
		
		if($(this).prop('checked')){
			term[index] = true;
		}else{
			term[index] = false;
		}
		
		for(var i=0;i<term.length;i++){
			if(term[i]) count++;
		}
		
		if(count == term.length){
			$('#terms-selectall').prop('checked', true);
		}else{
			$('#terms-selectall').prop('checked', false);
		}
	});
	
	$('#submit').click(function(){
		if(name && email && emailCheck && password && passwordCheck && phone && phoneCheck && term[0] && term[1] && term[2] && term[3] && term[4]){
			$.ajax({
				url: "/service/join",
				type: "POST",
				data:{
					email: $('#email').val(),
					password: $('#password').val(),
					phone: $('#phone-first').val()+'-'+$('#phone-second').val()+'-'+$('#phone-third').val(),
					name: $('#name').val(),
					recept_email: $('#email-enable').prop('checked'),
					recept_sms: $('#sms-enable').prop('checked')
				},
				success: function(data){
					switch(data.code){
					case 0: customAlert("회원가입이 완료되었습니다."); window.location.href = "/"; break;
					case 1: customAlert("회원가입에 실패했습니다."); break;
					case 2: customAlert("이미 존재하는 회원입니다."); break;
					default: customAlert("회원가입 오류"); break;
					}
				}
				
			});
		}else if(!name){
			$('#name').focus();
			customAlert("이름을 입력해주세요.");
		}else if(!email){
			$('#email').focus();
			customAlert("이메일을 입력해주세요.");
		}else if(!emailCheck){
			$('#email').focus();
			customAlert("이미 가입된 이메일입니다.");
		}else if(!password){
			$('#password').focus();
			customAlert("비밀번호를 확인해주세요.");
		}else if(!passwordCheck){
			$('#password-confirm').focus();
			customAlert("비밀번호를 확인해주세요.");
		}else if(!phone){
			$('#phone-first').focus();
			customAlert("연락처를 확인해주세요.");
		}else if(!phoneCheck){
			customAlert("휴대폰 인증을 해주세요.");
		}else if(!term[0]){
			customAlert("서비스 이용약관에 동의해주세요.");
		}else if(!term[1]){
			customAlert("서비스 이용약관에 동의해주세요.");
		}else if(!term[2]){
			customAlert("서비스 이용약관에 동의해주세요.");
		}else if(!term[3]){
			customAlert("서비스 이용약관에 동의해주세요.");
		}else{
			customAlert("서비스 이용약관에 동의해주세요.");
		}
	});
});

function phoneChecking(){
	if($('#phone-first').val() != '' && $('#phone-second').val() != '' && $('#phone-third').val() != ''){
		return true;
	}else{
		return false;
	}
}

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