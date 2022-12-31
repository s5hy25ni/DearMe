<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>freeBoard</title>
</head>
<body>
	<table border="2">

		<tr>
			<td>${resultList.askContent}</td>
		</tr>
		<button type="button" onclick="updateBoard()">글쓰기</button> <br>
	</table>
</body>
<script type="text/javascript">
    function updateBoard(){
        location.href = "/freeBoard/updateBoard";
    }
</script>
</html>