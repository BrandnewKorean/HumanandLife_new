<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/resources/css/CustomerService.css?ver=<%= System.currentTimeMillis()%>">
<meta charset="UTF-8">
<title>HumanandLife | 공지사항</title>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="customerservice contents">
			<div class="notice container">
				<div class="menu-wrap">
					<ul>
						<li class="menu start" id="menu1"><a class="active">공지사항</a></li>
						<li class="menu" id="menu2"><a href="#">FAQ</a></li>
						<li class="menu" id="menu3"><a href="#">Q&A</a></li>
					</ul>
				</div>
				<div class="table">
					<div class="row head">
						<div class="title">
							제목
						</div>
						<div class="regdate">
							작성일
						</div>
					</div>
					<c:choose>
						<c:when test="${notice.list.size() > 0}">
							<c:forEach items="${notice.list}" var="list">
								<div class="row">
									<div class="title">
										<a href="/notice/${search.getCurrPage()}/${list.seq}">${list.title}</a>
									</div>
									<div class="regdate">
										${list.regdate}
									</div>
								</div>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<div class="row">
								공지사항이 없습니다.
							</div>
						</c:otherwise>
					</c:choose>
				</div>
				<div class="pageblock">
					<c:if test="${notice.search.getStartPage() != 1}">
						<a href="/notice/1" class="otherpage"><img style="transform: rotate(180deg);" src="/resources/icon/end.png"></a>
						<a href="/notice/${search.getCurrPage()-1}" class="otherpage"><img style="transform: rotate(180deg);" src="/resources/icon/next.png"></a>
					</c:if>
					
					<c:forEach begin="${search.getStartPage()}" end="${search.getCurrPage()-1}" var="i">
						<a href="/notice/${i}" class="otherpage">${i}</a>
					</c:forEach>
						<a class="currpage">${search.getCurrPage()}</a>
					<c:forEach begin="${search.getCurrPage()+1}" end="${search.getEndPage()}" var="i">
						<a href="/notice/${i}" class="otherpage">${i}</a>
					</c:forEach>
					
					<c:if test="${search.getEndPage() != search.getLastPage()}">
						<a href="/notice/${search.getCurrPage()+1}" class="otherpage"><img src="/resources/icon/next.png"></a>
						<a href="/notice/${search.getLastPage()}" class="otherpage"><img src="/resources/icon/end.png"></a>
					</c:if>
				</div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>