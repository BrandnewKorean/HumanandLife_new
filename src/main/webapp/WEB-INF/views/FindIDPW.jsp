<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Terms.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/FindIDPW.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/findidpw.js?ver=<%= System.currentTimeMillis()%>"></script>
<title>HumanandLife | 아이디 찾기</title>
</head>
<body>
	<div class="container">
		<div class="terms-title">
			아이디, PW 찾기
		</div>
		<div class="terms-content">
			(주)휴먼앤라이프 홈페이지를 이용해 주셔서 감사합니다.<br>
			회원님의 아이디나 비밀번호가 생각나지 않으십니까?<br>
			아래의 입력폼에 회원의 신청정보를 입력하시면 아이디나 비밀번호를 찾으실 수 있습니다.<br>
			<br>
			<div class="terms-content-title">
				아이디 찾기
			</div>
			<div class="terms-content-inner">
				<div class="find-wrap">
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>회원이름
						</div>
						<div class="col2">
							<input type="text">
						</div>
					</div>
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>휴대폰번호
						</div>
						<div class="col2">
							<input type="email">
						</div>
					</div>
				</div>
			</div>
			<div class="terms-content-buttons">
				<button class="terms-button agree">확인하기</button>
				<button class="terms-button disagree">취소</button>
			</div>
			<div class="terms-content-title">
				비밀번호 찾기
			</div>
			<div class="terms-content-inner">
				<div class="find-wrap">
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>아이디
						</div>
						<div class="col2">
							<input type="text">
						</div>
					</div>
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>회원이름
						</div>
						<div class="col2">
							<input type="text">
						</div>
					</div>
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>전화번호
						</div>
						<div class="col2">
							<input type="text">
						</div>
					</div>
					<div class="find-row">
						<div class="col1">
							<a class="point">*</a>이메일
						</div>
						<div class="col2">
							<input type="email">
						</div>
					</div>
				</div>
			</div>
			<div class="terms-content-buttons">
				<button class="terms-button agree">확인하기</button>
				<button class="terms-button disagree">취소</button>
			</div>
		</div>
	</div>
</body>
</html>