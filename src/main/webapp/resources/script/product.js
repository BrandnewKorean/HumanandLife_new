function getProduct(orderby, main_category, currPage, perPage, keyword){
	var df = new DecimalFormat('###,###');
	
	$.ajax({
		url: "/service/getProductList",
		type: "GET",
		data: {
			orderby: orderby,
			main_category: main_category,
			currPage: currPage,
			perPage: perPage,
			keyword: keyword
		},
		beforeSend: function(){
			$('.product-list').html(
				'<li class="loading">'
					+'<img src="/resources/image/loading.gif">'
				+'</li>'
			);
		},
		success: function(data){
			var list = data.product['vo']['storeList'];
			var imagelist = data.product['vo']['productImageMap'];
			var eventlist = data.product['vo']['eventList'];
			var search = data.product['search'];
			
			console.log(search);
			
			if(keyword != ''){
				if(list.length > 0){
					$('#keyword-result').html('<a class="keyword">\''+search['keyword']+'\'</a> 에 관한 <a class="keyword">\''+search['totalRow']+'개\'</a>의 검색결과');
				}else{
					$('#keyword-result').html('<a class="keyword">\''+search['keyword']+'\'</a> 에 관한 검색결과가 없습니다.<br>다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해보세요.');
				}
			}
			
			$('.product-list').empty();
			for(var i=0;i<list.length;i++){
				var color = list[i]['iscolor'];
				var textString = '';
				var eventString = '';
				var statusString = '';
				
				if(eventlist[i] != null){
					if(eventlist[i]['ispersent']){
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>'+eventlist[i]['persent']+'%'+'</div>';
						textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['event_price'])+'원</a><br><a class="original-price">'+df.format(list[i]['price'])+'원</a>';
					}else if(eventlist[i]['isdiscount']){
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>'+df.format(eventlist[i]['discount'])+'</div>';
						textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['event_price'])+'원</a><br><a class="original-price">'+df.format(list[i]['price'])+'원</a>';
					}else{
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>EVENT</div>';
						textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['price'])+'원</a>';
					}
				}else{
					textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['price'])+'원</a>';
				}
				
				if(list[i]['isnew']){
					statusString = '<div class="status-box">NEW</div>';
				}
				
				$('.product-list').append(
					'<li class="product" data-index="'+i+'">'
						+'<div class="inner">'
							+'<div class="event-list">'
								+eventString
								+'<div class="color-list" id="color-list'+i+'"></div>'
							+'</div>'
							+'<div class="image-list">'
								+'<a href="javascript: void(0);"><img id="image'+i+'" src="/resources/image/product_image/'+imagelist[list[i]['product_code']][0]['filename']+'" width="100%" height="100%"></a>'
							+'</div>'
							+'<div class="product-status">'
								+statusString
							+'</div>'
							+'<div class="item-text">'
								+textString
							+'</div>'
							+'<div class="button-wrap">'
								+'<button class="buy" id="buy_'+list[i]['product_code']+'">구매하기</button>'
								+'<button><img class="icon" src="/resources/icon/product_basket.png"></button>'
								+'<button><img class="icon" src="/resources/icon/heart.png"></button>'
							+'</div>'
						+'</div>'
					+'</li>'
				);
				
				if(color){
					for(var j=0;j<imagelist[list[i]['product_code']].length;j++){
						$('#color-list'+i).append(
							'<span class="color-box" id="color-box-'+i+'-'+j+'" style="background-color: '+imagelist[list[i]['product_code']][j]['color']+';"></span>'
						);
					}
				}
			}
			
			$('.product-list .color-box').hover(function(e){
				var id = $(this).attr('id');
				var pindex = id.substring(id.indexOf('-', 9)+1,id.lastIndexOf('-'));
				var cindex = id.substring(id.lastIndexOf('-')+1,id.length);
				
				$('#image'+pindex).attr('src', '/resources/image/product_image/'+imagelist[list[pindex]['product_code']][cindex]['filename']);
			});
			
			$('.product-list .product').hover(function(){
				var index = $(this).attr('data-index');
				
				$('#product-modal'+index).animate({
					top: 0
				});
			},function(){
				var index = $(this).attr('data-index');
				
				$('#product-modal'+index).animate({
					top: '100%'
				});
			});
			
			$('.buy').hover(function(){
				$(this).text('Buy');
			},function(){
				$(this).text('구매하기');
			});
			
			$('.buy').click(function(){
				buyProduct($(this).attr('id').replace('buy_',''));
			});
			
			setPageBlock(orderby, main_category, perPage, search, keyword);
		}
	});
}

function setPageBlock(orderby, main_category, perPage, search, keyword){
	$('#page-block').empty();
	
	if(search['currPage'] > 1){
		$('#page-block').append(
			'<a class="other-page" id="page-1">'
				+'<img style="transform: rotate(180deg);" src="/resources/icon/end.png">'
			+'</a>'
			+'<a class="other-page" id="page-'+(search['currPage']-1)+'">'
				+'<img style="transform: rotate(180deg);" src="/resources/icon/next.png">'
			+'</a>'
		);
	}
	
	for(var i=search['startPage'];i<=search['currPage']-1;i++){
		$('#page-block').append(
			'<a class="other-page" id="page-'+i+'">'+i+'</a>'
		);
	}
	
	$('#page-block').append('<a class="current-page">'+search['currPage']+'</a>');
	
	for(var i=search['currPage']+1;i<=search['endPage'];i++){
		$('#page-block').append('<a class="other-page" id="page-'+i+'">'+i+'</a>');
	}
	
	if(search['currPage'] < search['lastPage']){
		$('#page-block').append(
			'<a class="other-page" id="page-'+(search['currPage']+1)+'">'
				+'<img src="/resources/icon/next.png">'
			+'</a>'
			+'<a class="other-page" id="page-'+search['lastPage']+'">'
				+'<img src="/resources/icon/end.png">'
			+'</a>'
		);
	}
	
	$('.other-page').click(function(){
		getProduct(orderby, main_category, $(this).attr('id').replace('page-',''), perPage, keyword);
	});
}