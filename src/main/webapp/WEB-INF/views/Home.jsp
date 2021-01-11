<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HumanandLife</title>
<link rel="stylesheet" type="text/css" href="/resources/css/Home.css?ver=<%= System.currentTimeMillis()%>">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="home">
			<div class="container">
				<div class="home-promotion">
					<div class="home-promotion-image">
						<img src="/resources/image/promotion/promotion.png" width="100%" height="100%">
					</div>
					<div class="home-promotion-text">
						<div class="promotion-title">
							겨울세일 최대 70% 할인
						</div>
						<div class="promotion-content">
							약 200여개의 제품을 최대 70%까지 할인된 가격으로 만나보세요! 올 겨울 집안 곳곳을 나만의 감각으로 채울 수 있는 기회! 작은 변화로 색다른 분위기를 만들어 연말연시 집에서 따뜻한 추억을 만들어보세요!
						</div>
						<a href="#">
							<button class="promotion-button">자세히보기</button>
						</a>
					</div>
				</div>
				<div class="home-content">
					<div class="home-content-inner-wrap">
						<div class="home-content-inner">
							<div class="notice-header">
								공지사항
								<a style="float: right;" href="#">더보기</a>
							</div>
							<div class="notice-content">
								<c:forEach begin="1" end="6">
								<div class="notice-content-row">
									<div class="notice-title">
										<a href="#">test</a>
									</div>
									<div class="notice-regdate">
										<a href="#">2021-01-07</a>
									</div>
								</div>
								</c:forEach>
							</div>
						</div>
					</div>
					<div class="home-content-inner-wrap">
						<div class="home-content-inner">
							<iframe width="100%" height="100%"
								src="https://www.youtube.com/embed/CIMfxqqsiBA"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen>
							</iframe>
						</div>
					</div>
					<div class="home-content-inner-wrap">
						<div class="home-content-inner">
							<div class="product-search">
								<a href="#"><img src="/resources/image/home/product-search.png" title="제품찾기" alt="제품찾기" width="100%" height="100%"></a>
							</div>
							<div class="service-center">
								<a href="#"><img src="/resources/image/home/service-center.png" title="고객센터" alt="고객센터" width="100%" height="100%"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>