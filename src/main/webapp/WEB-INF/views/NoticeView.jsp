<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
			<button onclick="history.back();">뒤로가기</button><br><br>
			제목 : ${vo.title}
			<hr>
			작성일 : ${vo.regdate} 작성자 : ${vo.writer}
			<hr>
			내용 : ${vo.content}
		</div>
		<jsp:include page="Footer.jsp"></jsp:include>
	</div>
</body>
</html>