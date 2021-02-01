<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/Product.css?ver=<%= System.currentTimeMillis()%>">
<title>HumanandLife | 상품리스트</title>
<script src="/resources/script/DecimalFormat.js"></script>
<script src="/resources/script/product.js?ver=<%= System.currentTimeMillis()%>"></script>
</head>
<body onload="getProduct('seq desc','${vo.main_category}', 1, 10,'${search.keyword}');">
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div id="contents">
			<div class="container">
				<p id="keyword-result"></p>
				<ul class="product-list"></ul>
				<div id="page-block"></div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>