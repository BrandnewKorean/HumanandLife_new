<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HumanandLife | 회사소개</title>
<link rel="stylesheet" type="text/css" href="/resources/css/Page.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Introduce.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/page.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="container">
			<div class="page-content">
				<input type="hidden" id="menu" value="${menu}">
				<div class="page-content-nav-wrap">
					<div class="page-content-nav">
						<div class="page-content-nav-title">
							회사소개
						</div>
						<ul class="page-content-nav-list">
							<li><a class="page-content-nav-link menu1" href="/introduce/ceo" data-source="/ceo">CEO 인사말</a></li>
							<li><a class="page-content-nav-link menu2" href="/introduce/plan" data-source="/business-plan">사업개요</a></li>
							<li><a class="page-content-nav-link menu3" href="/introduce/come" data-source="/way-to-come">찾아오시는길</a></li>
						</ul>
					</div>
					<img src="/resources/image/page/phone.png" width="100%">
				</div>
				<div class="page-content-inner">
					<div class="page-content-title"></div>
					<div class="page-content-html"></div>
				</div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>