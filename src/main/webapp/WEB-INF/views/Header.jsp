<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Header.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/header.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="header">
		<div class="container header-border">
			<a href="/home"><img src="/resources/image/header/logo.png" title="humanandlife 홈" alt="logo" width="10%"></a>
			<ul class="header-nav">
				<li class="header-nav-inner">
					<c:choose>
						<c:when test="${logEmail == null}">
							<a class="header-nav-link" href="/login-page">로그인</a>
						</c:when>
						<c:otherwise>
							<a class="header-nav-link" id="logout" href="javascript:void(0);">로그아웃</a>
						</c:otherwise>
					</c:choose>
				</li>
				<c:if test="${logEmail == null}">
					<li class="header-nav-inner">
						<a class="header-nav-link" href="/join-terms">회원가입</a>
					</li>
				</c:if>
				<c:if test="${logEmail == null}">
					<li class="header-nav-inner">
						<a class="header-nav-link" href="/find-idpw">ID,PW찾기</a>
					</li>
				</c:if>
				<li class="header-nav-inner">
					<a class="header-nav-link" href="#">주문내역</a>
				</li>
				<li class="header-nav-inner">
					<a class="header-nav-link" href="#">장바구니</a>
				</li>
			</ul>
			<ul class="header-menu">
				<li class="header-menu-inner">
					<a class="header-menu-link" href="/introduce">회사소개</a>
				</li>
				<li class="header-menu-inner">
					<a class="header-menu-link" href="#">쇼핑몰</a>
				</li>
				<li class="header-menu-inner">
					<a class="header-menu-link" href="#">고객지원</a>
				</li>
				<li class="header-menu-inner">
					<a class="header-menu-link" href="#">한국어</a>
				</li>
			</ul>
		</div>
	</div>
</body>
</html>