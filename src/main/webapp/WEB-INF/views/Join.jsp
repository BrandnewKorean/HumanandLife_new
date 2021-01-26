<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Join.css?ver=<%= System.currentTimeMillis()%>">
<title>HumanandLife | 회원가입</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/join.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div class="join-wrap">
		<div class="logo-wrap">
			<a href="/home"><img src="/resources/image/header/logo.png" width="150px" alt="humanandlife" title="홈"></a>
		</div>
		<div class="container">
			<div class="title">
				회원가입
			</div>
			<div class="table">
				<div class="row">
					<div class="row-title">
						이름
					</div>
					<div class="row-content">
						<input type="text" id="name">
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						이메일
					</div>
					<div class="row-content">
						<input type="email" id="email">
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						비밀번호
					</div>
					<div class="row-content">
						<input type="password" id="password">
						<button>
							<img class="eyes" id="password-view" src="/resources/icon/eyeon.png">
						</button>
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						비밀번호 확인
					</div>
					<div class="row-content">
						<input type="password" id="password-check">
						<button>
							<img class="eyes" id="password-check-view" src="/resources/icon/eyeon.png">
						</button>
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						연락처
					</div>
					<div class="row-content-long">
						<select id="phone-first">
							<option value=""></option>
							<option value="010">010</option>
							<option value="016">016</option>
							<option value="017">017</option>
							<option value="018">018</option>
							<option value="019">019</option>
						</select>
						<div>
							-
						</div>
						<input type="text" id="phone-second">
						<div>
							-
						</div>
						<input type="text" id="phone-third">
						<div></div>
						<button>휴대폰 인증</button>
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						이메일 수신여부
					</div>
					<div class="row-content-long">
						<input type="radio" name="email" id="email-enable">
						<label for="email-enable">수신함</label>
						<div></div>
						<input type="radio" name="email" id="email-disable" checked>
						<label for="email-disable">수신안함</label>
					</div>
				</div>
				<div class="row">
					<div class="row-title">
					</div>
					<div class="row-content-long">
						Human & Life 에서 제공하는 유익한 소식을 이메일로 받으실 수 있습니다.
					</div>
				</div>
				<div class="block"></div>
				<div class="row">
					<div class="row-title">
						SMS 수신여부
					</div>
					<div class="row-content-long">
						<input type="radio" name="sms" id="sms-enable">
						<label for="sms-enable">수신함</label>
						<div></div>
						<input type="radio" name="sms" id="sms-disable" checked>
						<label for="sms-disable">수신안함</label>
					</div>
				</div>
				<div class="row">
					<div class="row-title"></div>
					<div class="row-content-long">
						Human & Life 에서 제공하는 유익한 소식을 SMS로 받으실 수 있습니다.
					</div>
				</div>
				<div class="block"></div>
			</div>
			<div class="subtitle">
				서비스 약관에 동의해 주세요.
			</div>
			<div class="terms">
				<input type="checkbox"> 모두 동의하기
				<div>
					<input type="checkbox"> [필수] 만 14세 이상입니다.
					<input type="checkbox"> [필수] 이용약관 동의 (광고성 정보 수신 동의 포함)
				</div>
			</div>
		</div>
	</div>
</body>
</html>