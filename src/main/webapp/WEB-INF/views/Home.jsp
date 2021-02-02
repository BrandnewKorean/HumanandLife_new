<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Home.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/ProductList.css?ver=<%= System.currentTimeMillis()%>">
<link rel="stylesheet" type="text/css" href="/resources/css/CustomAlert.css?ver=<%= System.currentTimeMillis()%>">
<title>HumanandLife</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/DecimalFormat.js"></script>
<script src="/resources/script/productlist.js?ver=<%= System.currentTimeMillis()%>"></script>
<script src="/resources/script/home.js?ver=<%= System.currentTimeMillis()%>"></script>
<script src="/resources/script/alert.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="home contents">
			<div class="container">
				<div class="banner-wrap" id="main_banner1_wrap">
					<ul class="banner" id="main_banner1"></ul>
					<ul class="banner-page" id="main_banner1_page"></ul>
					<button class="banner-button left" id="main_banner1_left">
						<svg style="transform: rotate(270deg); filter: invert(50%);" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.93872L20.0011 14.9399L18.5868 16.3541L12.0002 9.7671L5.41339 16.353L3.99927 14.9387L12.0003 6.93872Z"></path>
						</svg>
					</button>
					<button class="banner-button right" id="main_banner1_right">
						<svg style="transform: rotate(90deg); filter: invert(50%);" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.93872L20.0011 14.9399L18.5868 16.3541L12.0002 9.7671L5.41339 16.353L3.99927 14.9387L12.0003 6.93872Z"></path>
						</svg>
					</button>
				</div>
				<div class="list-button">
					<span class="getlist" id="Best">Best</span><span class="getlist end" id="New">New</span>
				</div>
				<ul class="product-list"></ul>
				<div class="video-wrap">
					<iframe class="video" id="main-youtube" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<jsp:include page="CustomAlert.jsp"></jsp:include>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>