<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HumanandLife | 회원가입</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/join.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<form id="join">
		<input type="hidden" id="privacy" value="${privacy}">
		<input type="hidden" id="use" value="${use}">
		<input type="email" id="email" placeholder="이메일"><br>
		<input type="text" id="phone" placeholder="전화번호"><br>
		<input type="password" id="password" placeholder="비밀번호"><br>
		<input type="text" id="name" placeholder="이름"><br>
		<input type="submit" value="회원가입">
		<input type="button" value="취소" onclick="window.location.href='/home'">
	</form>
</body>
</html>