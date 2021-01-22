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
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/header.js?ver=<%= System.currentTimeMillis()%>"></script>
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
		<div class="container">
			<div class="top-menu">
				<a id="header-menu"><img class="icon" src="/resources/image/header/menu.png"></a>
				<ul>
					<li id="header-person">
						<c:choose>
							<c:when test="${logEmail == null}">
								<a href="javascript:void(0);"><img class="icon" src="/resources/image/header/person.png"></a>
								<ul class="submenu" id="header-person-submenu">
									<li><a href="/login-page">로그인</a></li>
									<li><a href="#">회원가입</a></li>
								</ul>
							</c:when>
							<c:otherwise>
								<a href="javascript:void(0);"><img class="icon" src="/resources/image/header/person_blue.png"></a>
								<ul class="submenu" id="header-person-submenu">
									<li><a class="logout" href="javascript: void(0);">로그아웃</a></li>
									<li><a href="#">마이페이지</a></li>
								</ul>
							</c:otherwise>
						</c:choose>
					</li>
					<li>
						<a class="header-nav-link" href="#"><img class="icon" id="header-basket" src="/resources/image/header/basket.png"></a>
					</li>
					<li>
						<a class="header-nav-link" href="#"><img class="icon" id="header-delivery" src="/resources/image/header/delivery.png"></a>
					</li>
				</ul>
			</div>
			<a href="/home"><img src="/resources/image/header/logo.png" title="humanandlife 홈" alt="logo" width="150px"></a>
			<div class="bottom-menu">
				<ul>
					<li class="all">
						<a href="#">All</a>
					</li>
					<li>
						<a href="#">Best</a>
					</li>
					<li>
						<a href="#">New</a>
					</li>
					<li>
						<a href="#">Cleanser</a>
					</li>
					<li>
						<a href="#">Mask</a>
					</li>
					<li>
						<a href="#">위생용품</a>
					</li>
					<li>
						<a href="#">방역용품</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="modal" id="header-menu-modal">
		<div class="inner">
			<div class="list-all">
				<div class="list-wrap">
					<a class="title" id="title1">About</a>
					<ul class="list" id="list1">
						<li><a href="#">CEO 인사말</a></li>
						<li><a href="#">사업개요</a></li>
						<li><a href="#">찾아오시는 길</a></li>
					</ul>
				</div>
				<div class="list-wrap">
					<a class="title" id="title2">Shop</a>
					<ul class="list" id="list2">
						<li><a href="#">전체 상품</a></li>
						<li><a href="#">베스트 상품</a></li>
						<li><a href="#">신규 상품</a></li>
						<li><a href="#">클렌저</a></li>
						<li><a href="#">마스크</a></li>
						<li><a href="#">위생용품</a></li>
						<li><a href="#">방역용품</a></li>
					</ul>
				</div>
				<div class="list-wrap">
					<a class="title" id="title3">Customer Service</a>
					<ul class="list" id="list3">
						<li><a href="#">공지사항</a></li>
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
</body>
</html>