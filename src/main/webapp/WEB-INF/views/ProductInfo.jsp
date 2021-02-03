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
	<div>
		${info.content}
	</div>
	상품정보 제공고시
	<table>
		<tr>
			<th>품명 / 모델명</th><td>${provision.name}</td>
		</tr>
		<tr>
			<th>법에 의한 인증, 허가 등을 받았음을 확인할 수 있는 경우 그에 대한 사항</th><td>${provision.law}</td>
		<tr>
			<th>제조자(사)</th><td>${provision.manufacturer}</td>
		</tr>
		<tr>
			<th>제조국</th><td>${provision.country}</td>
		</tr>
		<tr>
			<th>고객센터</th><td>${provision.servicecenter}</td>
		</tr>
	</table>
	거래조건에 관한 정보
	<table>
		<tr>
			<th>재화 등의 배송방법에 관한 정보</th>
			<td>택배</td>
		</tr>
		<tr>
			<th>주문 이후 예상되는 배송기간</th>
			<td>대금 지급일로부터 3일 이내에 발송</td>
		<tr>
			<th>제품하자·오배송 등에 따른 청약철회 등을 할 수 있는 기간 및 통신판매업자가 부담하는 반품비용 등에 관한 정보</th>
			<td>전자상거래등에서의 소비자보호에 관한 법률 등에 의한 제품의 하자 또는 오배송 등으로 인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 청약철회를 할 수 있으며, 반품 비용은 통신판매업자가 부담합니다.</td>
		</tr>
		<tr>
			<th>제품하자가 아닌 소비자의 단순변심, 착오구매에 따른 청약철회 시 소비자가 부담하는 반품비용 등에 관한 정보</th>
			<td>편도 2,500원 (최초 배송비 무료인 경우 5,000원 부과)</td>
		</tr>
		<tr>
			<th>제품하자가 아닌 소비자의 단순변심, 착오구매에 따른 청약철회가 불가능한 경우 그 구체적 사유와 근거</th>
			<td>전자상거래 등에서의 소비자 보호에 관한 법률 등에 의한 청약철회 제한 사유에 해당하는 경우 및 기타 객관적으로 이에 준하는 것으로 인정되는 경우 청약철회가 제한될 수 있습니다.</td>
		</tr>
		<tr>
			<th>재화 등의 교환·반품·보증 조건 및 품질보증기준</th>
			<td>소비자분쟁하결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.</td>
		</tr>
		<tr>
			<th>재화 등의 A/S 관련 전화번호</th>
			<td>02-6407-0114</td>
		</tr>
		<tr>
			<th>대금을 환불받기 위한 방법과 환불이 지연될 경우 지연에 따른 배상금을 지급받을 수 있다는 사실 및 배상금 지급의 구체적 조건 및 절차</th>
			<td>주문 취소 및 대금의 환불은 마이페이지 내의 주문현황에서 신청할 수 있으며, 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 소비자의 청약철회 후 판매자가 재화 등을 반환 받을 날로부터 3일(영업일 기준) 이내에 지급받은 대금의 환급을 정당한 사유 없이 지연하는 때에는 소비자는 지연기간에 대해서 연 20%의 지연배상금을 판매자에게 청구할 수 있습니다.</td>
		</tr>
	</table>
</body>
</html>