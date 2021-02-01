<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Introduce.css?ver=<%= System.currentTimeMillis()%>">
<title>HumanandLife | 회사소개</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/introduce.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="container">
			<div class="introduce" id="contents">
				<div class="menu-wrap">
					<input type="hidden" id="menu" value="${menu}">
					<ul>
						<li class="menu start" id="menu1" data-source="/ceo">CEO 인사말</li>
						<li class="menu" id="menu2" data-source="/business-plan">사업개요</li>
						<li class="menu" id="menu3" data-source="/way-to-come">찾아오시는 길</li>
					</ul>
				</div>
				<div class="page-wrap">
					<button id="left">
						<svg style="transform: rotate(270deg); fill: gray;" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.93872L20.0011 14.9399L18.5868 16.3541L12.0002 9.7671L5.41339 16.353L3.99927 14.9387L12.0003 6.93872Z"></path>
						</svg>
					</button>
					<div id="page">
					</div>
					<button id="right">
						<svg style="transform: rotate(90deg); fill: gray;" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.93872L20.0011 14.9399L18.5868 16.3541L12.0002 9.7671L5.41339 16.353L3.99927 14.9387L12.0003 6.93872Z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>