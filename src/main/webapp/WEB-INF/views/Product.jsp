<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" type="text/css" href="/resources/css/Product.css?ver=<%= System.currentTimeMillis()%>">
<meta charset="UTF-8">
<title>HumanandLife</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/script/DecimalFormat.js"></script>
<script src="/resources/script/product.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<input type="hidden" id="product_code" value="${product_code}">
		<div class="contents">
			<div class="container">
				<div class="product-wrap">
					<div class="product-inner">
						<div class="product-image">
							<div class="list-wrap">
								<ul id="image-list"></ul>
							</div>
							<div id="image-one"></div>
						</div>
						<div class="product-content">
							<div class="product-event-wrap"></div>
							<div class="product-content-info">
								<div id="name"></div>
								<div class="option-wrap">
									<div class="option">
										<div class="option-title">
											배송비
										</div>
										<div class="option-content" id="product-delivery">
											2,500원
										</div>
									</div>
									<div id="option-wrap"></div>
								</div>
								<div id="selected-option"></div>
								<div class="total-price-wrap">
									총 구매 금액
									<div class="total-price">
										<a id="total-price">0</a>원
									</div>
								</div>
							</div>
							<div class="button-wrap">
								<button><img class="icon" src="/resources/icon/product_basket.png"></button>
								<button><img class="icon" src="/resources/icon/heart.png"></button>
								<button id="buy">구매하기</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="nav">
			<div class="container">
				<div class="nav-inner">
					<button class="nav-button" id="nav1" data-source="/productInfo?product_code=${product_code}">
						상세정보
					</button>
					<button class="nav-button" id="nav2" data-source="/productRefund">
						반품/교환정보
					</button>
					<button class="nav-button" id="nav3" data-source="/productSalesman">
						판매자 정보
					</button>
				</div>
			</div>
		</div>
		<div class="contents">
			<div class="container">
				<div id="nav-result"></div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>