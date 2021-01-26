<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HumanandLife | 로그인</title>
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Login.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/login.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div class="login-wrap">
		<div class="logo-wrap">
			<a href="/home"><img src="/resources/image/header/logo.png" width="150px" alt="humanandlife" title="홈"></a>
		</div>
		<div class="login-form-wrap">
			<div class="login-input-wrap" id="id-wrap">
				<input class="login-input login-input-id" id="id" type="email">
				<label class="login-input-label" for="id" id="id-label">이메일</label>
			</div>
			<a class="login-input-check" id="id-check"></a>
			<div class="blank"></div>
			<div class="login-input-wrap" id="password-wrap">
				<input class="login-input login-input-password" id="password" type="password">
				<button class="password-button" id="password-button">
					<img src="/resources/icon/eyeon.png" width="100%">
				</button>
				<label class="login-input-label" for="password" id="password-label">비밀번호</label>
			</div>
			<a class="login-input-check" id="password-check"></a>
			<div class="blank"></div>
			<div>
				<a class="login-link" href="#">이메일 찾기</a>
				<a class="login-link find-pw" href="#">비밀번호 찾기</a>
			</div>
			<div class="blank"></div>
			<button class="login-button submit" id="submit">로그인</button>
			<div class="blank"></div>
			<a href="${naver_url}"><img class="login-button" src="/resources/image/login/naver_login.png"></a>
			<div class="blank"></div>
			<a href="/join-page"><button class="login-button join" id="join">회원가입</button></a>
		</div>
	</div>
</body>
</html>