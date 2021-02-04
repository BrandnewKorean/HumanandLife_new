<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" type="text/css" href="/resources/css/Basic.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/Header.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/CustomAlert.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/header.js?ver=<%= System.currentTimeMillis()%>"></script>
<script src="/resources/script/alert.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="header">
		<c:if test="${authority == 'ROLE_ADMIN'}">
			<div class="admin-top">
				<script src="/resources/script/adminTopClose.js?ver=<%= System.currentTimeMillis()%>"></script>
				<button>관리자 페이지로</button>
				<button id="admin-top-close">
					x
				</button>
			</div>
			<button id="admin-top-open">열기</button>
		</c:if>
		<div class="event-wrap"></div>
		<div class="container">
			<div class="top-menu">
				<div class="left">
					<a id="header-menu"><img class="icon" src="/resources/image/header/menu.png"></a>
					<a href="/home"><img src="/resources/image/header/logo.png" title="humanandlife 홈" alt="logo" width="150px"></a>
				</div>
				<div class="search-wrap" id="header-search-wrap">
					<input type="search" id="header-search-txt" list="header-search-list" placeholder="찾고 싶은 제품을 검색해보세요!">
					<button id="header-search"><img src="/resources/image/header/search.png"></button>
				</div>
				<ul>
					<li id="header-person">
						<c:choose>
							<c:when test="${logEmail == null}">
								<a href="javascript:void(0);">
									<img class="icon" src="/resources/image/header/person.png"><br>
									마이페이지
								</a>
								<ul class="submenu" id="header-person-submenu">
									<li><a href="/login-page">로그인</a></li>
									<li><a href="/join-page">회원가입</a></li>
								</ul>
							</c:when>
							<c:otherwise>
								<a href="javascript:void(0);">
									<img class="icon" src="/resources/image/header/person_blue.png"><br>
									마이페이지
								</a>
								<ul class="submenu" id="header-person-submenu">
									<li><a class="logout" href="javascript: void(0);">로그아웃</a></li>
									<li><a href="#">마이페이지</a></li>
								</ul>
							</c:otherwise>
						</c:choose>
					</li>
					<li>
						<a class="header-nav-link" id="header-basket" href="#">
							<img class="icon" src="/resources/image/header/basket.png"><br>
							장바구니
						</a>
					</li>
					<li>
						<a class="header-nav-link" id="header-delivery" href="#">
							<img class="icon" src="/resources/image/header/delivery.png"><br>
							배송조회
						</a>
					</li>
					<li>
						<a class="header-nav-link" id="header-wishlist" href="#">
							<img class="icon" src="/resources/image/header/heart.png"><br>
							위시리스트
						</a>
					</li>
				</ul>
			</div>
			<div class="bottom-menu">
				<ul></ul>
			</div>
		</div>
	</div>
	<div class="modal" id="header-menu-modal">
		<div class="inner">
			<div class="list-all">
				<div class="list-wrap">
					<a class="title" id="title1">About</a>
					<ul class="list" id="list1">
						<li><a href="/introduce/ceo">CEO 인사말</a></li>
						<li><a href="/introduce/plan">사업개요</a></li>
						<li><a href="/introduce/way">찾아오시는 길</a></li>
					</ul>
				</div>
				<div class="list-wrap">
					<a class="title" id="title2">Shop</a>
					<ul class="list" id="list2">
					</ul>
				</div>
				<div class="list-wrap">
					<a class="title" id="title3">Customer Service</a>
					<ul class="list" id="list3">
						<li><a href="/notice">공지사항</a></li>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Q&A</a></li>
					</ul>
				</div>
				<div class="list-wrap">
					<a class="title" id="title4">Customer</a>
					<ul class="list" id="list4">
						<c:choose>
							<c:when test="${logEmail == null}">
								<li><a href="/login-page">로그인</a></li>
								<li><a href="#">회원가입</a></li>
							</c:when>
							<c:otherwise>
								<li><a class="logout" href="javascript: void(0);">로그아웃</a></li>
								<li><a href="#">마이페이지</a></li>
							</c:otherwise>
						</c:choose>
						<li><a href="#">장바구니</a></li>
						<li><a href="#">주문조회</a></li>
						<li><a href="#">배송조회</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="modal" id="product-modal"></div>
	<jsp:include page="CustomAlert.jsp"></jsp:include>
</body>
</html>