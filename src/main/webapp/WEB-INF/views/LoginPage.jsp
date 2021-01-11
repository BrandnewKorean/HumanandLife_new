<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HumanandLife | 로그인</title>
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Login.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/login.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div class="login-wrap">
		<div class="login-text">
			<div class="login-text-buttons">
				<a href="/home">
					<button class="back-button">
						<svg style="transform: rotate(180deg);" focusable="false" viewBox="0 0 24 24" class="pub__svg-icon pub__btn__icon" aria-hidden="true">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z">
							</path>
						</svg>
					</button>
				</a>
			</div>
			<div class="login-text-inner">
				<div class="logo-wrap">
					<div class="logo"></div>
				</div>
				<div class="text-title">
					로그인
				</div>
				<div class="text-inner">
					외워야 할 비밀번호가 많아 불편하셨죠?<br>
					이제 일회용 코드를 이용하여 간편하게 로그인하세요.<br>
					<br>
					* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
				</div>
				<div class="text-footer">
					휴먼앤라이프 - 개인정보처리방침<br>
					Copyright 2020© (주)휴먼앤라이프 All Right Reserved
				</div>
			</div>
		</div>
		<div class="login-form-wrap">
			<div class="login-input-wrap" id="id-wrap">
				<input class="login-input login-input-id" id="id" type="text">
				<label class="login-input-label" for="id" id="id-label">이메일 또는 휴대폰 번호</label>
			</div>
			<a class="login-input-check" id="id-check"></a>
			<div class="blank"></div>
			<div class="login-input-wrap" id="password-wrap">
				<input class="login-input login-input-password" id="password" type="password">
				<button class="password-button" id="password-button">
					<svg focusable="false" viewBox="0 0 24 24" id="password-button-icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM9.99998 12C9.99998 10.8954 10.8954 10 12 10C13.1045 10 14 10.8954 14 12C14 13.1046 13.1045 14 12 14C10.8954 14 9.99998 13.1046 9.99998 12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.8298 11.442C21.8298 11.442 21.8298 11.7947 21.6245 12C21.9328 12.3082 21.8298 12.558 21.8298 12.558L21.8282 12.5605L21.8247 12.5656L21.8133 12.5823C21.8038 12.5962 21.7903 12.6157 21.7731 12.6404C21.7386 12.6897 21.6888 12.7599 21.6245 12.8478C21.4961 13.0236 21.3092 13.2712 21.0699 13.5668C20.5926 14.1563 19.9005 14.9444 19.0414 15.7356C17.359 17.2851 14.8705 19 12 19C9.12949 19 6.64099 17.2851 4.95858 15.7356C4.09951 14.9444 3.40736 14.1563 2.93005 13.5668C2.69078 13.2712 2.5039 13.0236 2.37544 12.8478C2.31117 12.7599 2.26141 12.6897 2.22691 12.6404C2.20966 12.6157 2.19621 12.5962 2.18667 12.5823L2.17529 12.5656L2.17181 12.5605L2.17063 12.5587C2.17063 12.5587 2.18667 12.3016 2.48828 12C2.30078 12 2.17018 11.442 2.17018 11.442L2.17181 11.4395L2.17529 11.4344L2.18667 11.4177C2.19621 11.4038 2.20966 11.3843 2.22691 11.3596C2.26141 11.3103 2.31117 11.2401 2.37544 11.1522C2.5039 10.9764 2.69078 10.7288 2.93005 10.4332C3.40736 9.84372 4.09951 9.05563 4.95858 8.26443C6.64099 6.71494 9.12949 5 12 5C14.8705 5 17.359 6.71494 19.0414 8.26443C19.9005 9.05563 20.5926 9.84372 21.0699 10.4332C21.3092 10.7288 21.4961 10.9764 21.6245 11.1522C21.6888 11.2401 21.7386 11.3103 21.7731 11.3596C21.7903 11.3843 21.8038 11.4038 21.8133 11.4177L21.8247 11.4344L21.8282 11.4395L21.8298 11.442ZM4.48445 12.3082C4.39437 12.197 4.31287 12.0937 4.24038 12C4.31287 11.9063 4.39437 11.803 4.48445 11.6918C4.918 11.1563 5.54387 10.4444 6.31348 9.73557C7.88843 8.28506 9.89992 7 12 7C14.1001 7 16.1116 8.28506 17.6865 9.73557C18.4561 10.4444 19.082 11.1563 19.5155 11.6918C19.6056 11.803 19.6871 11.9063 19.7596 12C19.6871 12.0937 19.6056 12.197 19.5155 12.3082C19.082 12.8437 18.4561 13.5556 17.6865 14.2644C16.1116 15.7149 14.1001 17 12 17C9.89992 17 7.88843 15.7149 6.31348 14.2644C5.54387 13.5556 4.918 12.8437 4.48445 12.3082Z"></path><path d="M21.6245 12L21.8298 11.442L22.2046 12L21.8298 12.558L21.6245 12Z"></path><path d="M2.17018 11.442L2.48828 12L2.17529 12.5656L1.79541 12L2.17018 11.442Z"></path></svg>
				</button>
				<label class="login-input-label" for="password" id="password-label">비밀번호</label>
			</div>
			<a class="login-input-check" id="password-check"></a>
			<div class="blank"></div>
			<button class="login-button submit" id="submit">로그인</button>
			<div class="blank"></div>
			<button class="login-button join" id="join">회원가입</button>
		</div>
	</div>
</body>
</html>