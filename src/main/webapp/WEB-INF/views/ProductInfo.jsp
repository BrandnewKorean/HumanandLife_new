<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	상품 상세정보
	<table>
		<tr>
			<th>제품번호</th><td>${info.product_code}</td><th>제조사</th><td>${info.manufacturer}</td>
		</tr>
		<tr>
			<th>브랜드</th><td>${info.brand}</td><th>모델명</th><td>${info.model}</td>
		</tr>
		<tr>
			<th>원산지</th><td>${info.origin}</td><th>특징</th><td>${info.charact}</td>
		</tr>
		<tr>
			<th>기능</th><td>${info.func}</td><th>종류</th><td>${info.kinds}</td>
		</tr>
		<tr>
			<th>영수증 발급</th><td colspan="3">${info.receipt}</td>
		</tr>
		<tr>
			<th>A/S 안내</th><td colspan="3">${info.afterservice}</td>
		</tr>		
	</table>
</body>
</html>