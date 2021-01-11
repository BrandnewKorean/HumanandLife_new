<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Terms.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/terms.js?ver=<%= System.currentTimeMillis()%>"></script>
<title>HumanandLife | 약관 동의</title>
</head>
<body>
	<div class="container">
		<div class="terms-title">
			회원가입
		</div>
		<div class="terms-content">
			안녕하세요. (주)휴먼앤라이프 웹사이트에 오신 것을 환영합니다.<br>
			(주)휴먼앤라이프 웹사이트에 회원으로 가입하시면 (주)휴먼앤라이프 웹사이트에서 제공하는 모든 서비스를 편하게 이용하실 수 있으며, 회원분들에게는 특별한 가격할인 혜택을 드립니다.<br>
			아래의 이용약관 및 개인정보 보호정책을 읽어보신 후 회원가입 동의여부를 결정하여 주십시오.<br>
			<br>
			<form id="terms" action="join-page" method="post">
				<div class="terms-content-title">
					회원이용약관
				</div>
				<div class="terms-content-inner">
					<div class="terms-content-text">
						
					</div>
					<input type="checkbox" class="terms-check" name="use" id="use">
					<label class="checkbox-label" for="use">상기 회원약관에 동의하시면 체크해주세요.</label>
				</div>
				<div class="terms-content-title">
					개인정보처리방침
				</div>
				<div class="terms-content-inner">
					<div class="terms-content-text">
						
					</div>
					<input type="checkbox" class="terms-check" name="privacy" id="privacy">
					<label class="checkbox-label" for="privacy">상기 개인정보처리방침에 동의하시면 체크해주세요.</label>
				</div>
				<div class="terms-content-buttons">
					<input type="submit" class="terms-button agree" value="동의">
					<input type="button" class="terms-button disagree" id="cancel" value="동의안함">
				</div>
			</form>
		</div>
	</div>
</body>
</html>