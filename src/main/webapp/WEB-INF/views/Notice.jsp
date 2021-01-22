<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HumanandLife | 공지사항</title>
</head>
<body>
	<div id="wrap">
		<jsp:include page="Header.jsp"></jsp:include>
		<div class="container">
			<table>
				<tr>
					<td>번호</td>
					<td>제목</td>
					<td>작성자</td>
					<td>등록일</td>
				</tr>
				<c:choose>
					<c:when test="${notice.list.size() > 0}">
						<c:forEach items="${notice.list}" var="list">
							<tr>
								<td>
									<a href="/notice/${search.getCurrPage()}/${list.seq}">${list.seq}</a>
								</td>
								<td>
									<a href="/notice/${search.getCurrPage()}/${list.seq}">${list.title}</a>
								</td>
								<td>
									<a href="/notice/${search.getCurrPage()}/${list.seq}">${list.writer}</a>
								</td>
								<td>
									<a href="/notice/${search.getCurrPage()}/${list.seq}">${list.regdate}</a>
								</td>
							</tr>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<tr>
							<td colspan="4">공지사항이 없습니다.</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</table>
			<div class="notice-pageblock">
				<c:if test="${notice.search.getStartPage() != 1}">
					<a href="/notice/1" class="notice-otherpage"><img src="/resources/image/servicecenter/1.png"></a>
					<a href="/notice/${search.getCurrPage()-1}" class="notice-otherpage"><img src="/resources/image/servicecenter/2.png"></a>
				</c:if>
				
				<c:forEach begin="${search.getStartPage()}" end="${search.getCurrPage()-1}" var="i">
					<a href="/notice/${i}" class="notice-otherpage">${i}</a>
				</c:forEach>
					<a class="notice-currpage">${search.getCurrPage()}</a>
				<c:forEach begin="${search.getCurrPage()+1}" end="${search.getEndPage()}" var="i">
					<a href="/notice/${i}" class="notice-otherpage">${i}</a>
				</c:forEach>
				
				<c:if test="${search.getEndPage() != search.getLastPage()}">
					<a href="/notice/${search.getCurrPage()+1}" class="notice-otherpage"><img class="rotate-180" src="/resources/image/servicecenter/2.png"></a>
					<a href="/notice/${search.getLastPage()}" class="notice-otherpage"><img class="rotate-180" src="/resources/image/servicecenter/1.png"></a>
				</c:if>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>