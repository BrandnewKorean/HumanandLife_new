<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="modal" id="custom-alert">
	<div class="inner">
		<div class="alert-wrap" data-source="alert">
			<div class="content">
				<pre id="alert-content"></pre>
			</div>
			<div class="button-wrap">
				<button id="alert-confirm">확인</button>
			</div>
		</div>
		<div class="alert-wrap" data-source="terms">
			<div>
				<a id="terms-title"></a><a id="terms-subtitle"></a>
			</div>
			<div class="content" id="terms-content"></div>
			<div class="button-wrap">
				<button id="terms-confirm">확인</button>
			</div>
		</div>
		<div class="alert-wrap product-wrap" data-source="product">
			<div class="exit-wrap">
				<button id="product-exit"><img src="/resources/icon/x.png" width="100%" height="100%"></button>
			</div>
			<div class="product-inner">
				<div class="product-image">
					<div id="product-image-one"></div>
					<div class="list-wrap">
						<ul id="product-image-list"></ul>
					</div>
				</div>
				<div class="product-content">
					<div class="product-event-wrap"></div>
					<div class="product-content-info">
						<div id="product-name"></div>
						<div class="option-wrap">
							<div class="option">
								<div class="option-title">
									배송비
								</div>
								<div class="option-content" id="product-delivery">
									2,500원
								</div>
							</div>
							<div id="product-option-wrap"></div>
						</div>
						<div id="product-selected-option"></div>
						<div class="total-price-wrap">
							총 구매 금액
							<div class="total-price">
								<a id="product-total-price">0</a>원
							</div>
						</div>
					</div>
					<div class="button-wrap">
						<button>자세히 보기</button>
						<button>구매하기</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>