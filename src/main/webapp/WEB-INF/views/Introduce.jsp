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
			<div class="introduce contents">
				<input type="hidden" id="menu" value="${menu}">
				<div class="menu-wrap">
					<ul>
						<li class="menu start" id="menu1">CEO 인사말</li>
						<li class="menu" id="menu2">사업개요</li>
						<li class="menu" id="menu3">찾아오시는 길</li>
					</ul>
				</div>
				<div class="page-wrap">
					<ul id="page">
						<li class="intro">
							<div>
								<a class="name">Human & Life</a><br>
								<a class="since">Since 2020. 11.</a>
							</div>
						</li>
						<li>
							<div>
								<img class="top-image" align="right" src="/resources/image/header/logo.png">
								안녕하십니까!<br>
								<br>
								(주) 휴먼앤라이프를 찾아주셔서 감사합니다.<br>
								<br>
								(주) 휴먼앤라이프(H&L Inc.)는 대한민국 최고의 방역, 위생, 헬스케어 및 실버케어용품을 국내외 소비자들에게 합리적인 가격에 공급하기 위하여 2020년 11월 설립되었습니다.<br>
								<br>
								현재 당사는 의사들이 만든 기업인 (주)지노닥터의 최고급 무알콜 손세정제 브랜드인 닥터 쉴더(Dr. Shielder)의 동남아 및 유럽 독점 공급사로서 손소독제 시장의 게임체인저가 되기 위하여 최선의 노력을 다하고 있습니다.<br>
								<br>
								또한 K-방역의 우수함을 대변하는 KF 계열의 마스크 및 미국 FDA에서 Respirator로 관리되고 있는 N95 계열의 보건용 마스크 제품 중에서 우수한 제품만을 선정하여 소비자들에게 합리적인 가격에 공급하고 있습니다.<br>
								<br>
								품질, 정직, 신뢰를 기업 모토로 고객님들께서 결코 실망하지 않는 가격과 품질로 다가가는 기업이 되겠습니다.<br>
								<br>
								감사합니다.
							</div>
						</li>
						<li>
							<div>
								<img class="top-image" align="right" src="/resources/image/header/logo.png">
								(주) 휴먼앤라이프를 찾아주셔서 감사합니다.<br>
								<br>
								(주) 휴먼앤라이프(H&L Inc.)는 대한민국 최고의 방역, 위생, 헬스케어 및 실버케어용품을 국내외 소비자들에게 합리적인 가격에 공급하기 위하여 2020년 11월 설립되었습니다.<br>
								<br>
								현재 당사는 의사들이 만든 기업인 (주)지노닥터의 최고급 무알콜 손세정제 브랜드인 닥터 쉴더(Dr. Shielder)의 동남아 및 유럽 독점 공급사로서 손소독제 시장의 게임체인저가 되기 위하여 최선의 노력을 다하고 있습니다.<br>
								<br>
								또한 K-방역의 우수함을 대변하는 KF 계열의 마스크 및 미국 FDA에서 Respirator로 관리되고 있는 N95 계열의 보건용 마스크 제품 중에서 우수한 제품만을 선정하여 소비자들에게 합리적인 가격에 공급하고 있습니다.<br>
								<br>
								품질, 정직, 신뢰를 기업 모토로 고객님들께서 결코 실망하지 않는 가격과 품질로 다가가는 기업이 되겠습니다.<br>
								<br>
								감사합니다.<br>
								<br>
								(주)휴먼앤라이프 CEO 안원규 배상
							</div>
						</li>
						<li>
							<div class="location">
								<div id="navermap">
									네이버 지도
								</div>
								<div>
									<div class="row">
										<img class="icon" src="/resources/icon/ping.png">
										<div>
											서울시 구로구 도림로 6, 3층
										</div>
									</div>
									<div class="row">
										<img class="icon" src="/resources/icon/telephone.png">
										<div>
											02-6407-0114
										</div>
									</div>
									<div class="row">
										<img class="icon" src="/resources/icon/fax.png">
										<div>
											050-4252-429
										</div>
									</div>
									<div class="row">
										<img class="icon" src="/resources/icon/subway.png">
										<div>
											남구로역(7호선) 2번 출구에서 10m
										</div>
									</div>
									<div class="row">
										<img class="icon" src="/resources/icon/car.png">
										<div>
											구로3동 공영주차장에 주차 후 도보 이동 (주차장 없음)
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<button id="left">
						<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 6.93872L20.0011 14.9399L18.5868 16.3541L12.0002 9.7671L5.41339 16.353L3.99927 14.9387L12.0003 6.93872Z"></path>
						</svg>
					</button>
					<button id="right">
						<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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