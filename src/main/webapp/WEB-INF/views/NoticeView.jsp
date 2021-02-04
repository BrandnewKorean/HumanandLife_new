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
			<div class="notice-view container">
				<div class="menu-wrap">
					<ul>
						<li class="menu start" id="menu1"><a class="active">공지사항</a></li>
						<li class="menu" id="menu2"><a href="#">FAQ</a></li>
						<li class="menu" id="menu3"><a href="#">Q&A</a></li>
					</ul>
				</div>
				<div class="inner">
					<div class="head">
						<div class="title">
							${notice.current.title}
						</div>
						<div class="regdate">
							${notice.current.regdate}
						</div>
					</div>
					<c:if test="${notice.attach.size() > 0}">
						<c:forEach var="list" items="${notice.attach}">
							${list}<br>
<%-- 							${list.seq}<br> --%>
						</c:forEach>
					</c:if>
					<div class="content">
						${notice.current.content}
					</div>
				</div>
				<div class="go">
					<div class="back-front">
						<c:if test="${notice.back != null}">
							<c:choose>
								<c:when test="${notice.search.totalRow - (notice.search.currPage-1)*10 == notice.current.seq}">
									<div class="view">
										<span class="inner">
											<span class="title">
												<a href="/notice/${notice.search.currPage - 1}/${notice.back.seq}">
													이전글&nbsp;▲
												</a>
											</span>
											<span>
												<a href="/notice/${notice.search.currPage - 1}/${notice.back.seq}">
													${notice.back.title}
												</a>
											</span>
										</span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="view">
										<span class="inner">
											<span class="title">
												<a href="/notice/${notice.search.currPage}/${notice.back.seq}">
													이전글&nbsp;▲
												</a>
											</span>
											<span>
												<a href="/notice/${notice.search.currPage}/${notice.back.seq}">
													${notice.back.title}
												</a>
											</span>
										</span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
						<c:if test="${notice.front != null}">
							<c:choose>
								<c:when test="${(notice.search.totalRow - (notice.search.currPage-1)*10)-9 == notice.front.seq}">
									<div class="view">
										<span class="inner">
											<span class="title">
												<a href="/notice/${notice.search.currPage + 1}/${notice.front.seq}">
													다음글&nbsp;▼
												</a>
											</span>
											<span>
												<a href="/notice/${notice.search.currPage + 1}/${notice.front.seq}">
													${notice.front.title}
												</a>
											</span>
										</span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="view">
										<span class="inner">
											<span class="title">
												<a href="/notice/${notice.search.currPage}/${notice.front.seq}">
													다음글&nbsp;▼
												</a>
											</span>
											<span>
												<a href="/notice/${notice.search.currPage}/${notice.front.seq}">
													${notice.front.title}
												</a>
											</span>
										</span>
									</div>
								</c:otherwise>
							</c:choose>
						</c:if>
					</div>
					<div class="list-wrap">
						<a href="/notice/${notice.search.currPage}">
							<button>
								목록
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>