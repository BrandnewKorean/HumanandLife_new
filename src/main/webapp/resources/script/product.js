function getProduct(data){
	var df = new DecimalFormat('###,###');
	
	$.ajax({
		url: "/service/getProductList",
		type: "GET",
		data: data,
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
			
			$('.product-list').empty();
			for(var i=0;i<list.length;i++){
				var color = list[i]['iscolor'];
				var textString = '';
				var eventString = '';
				var statusString = '';
				
				if(eventlist[i] != null){
					if(eventlist[i]['ispersent']){
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>'+eventlist[i]['persent']+'%';
						textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['event_price'])+'원</a><br><a class="original-price">'+df.format(list[i]['price'])+'원</a>';
					}else if(eventlist[i]['isdiscount']){
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>'+df.format(eventlist[i]['discount']);
						textString = '<a class="name">'+list[i]['name']+'</a><br><a class="price">'+df.format(list[i]['event_price'])+'원</a><br><a class="original-price">'+df.format(list[i]['price'])+'원</a>';
					}else{
						eventString = '<div class="event-box">'+eventlist[i]['category']+'<br>EVENT';
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
								+'<img id="image'+i+'" src="/resources/image/product_image/'+imagelist[list[i]['product_code']][0]['filename']+'" width="100%" height="100%">'
							+'</div>'
							+'<div class="product-status">'
								+statusString
							+'</div>'
							+'<div class="item-text">'
								+textString
							+'</div>'
							+'<div class="button-wrap">'
							+'</div>'
						+'</div>'
						+'<div class="inner-modal" id="product-modal'+i+'">'
							+'<div class="button-wrap">'
								+'<button class="buy">구매하기</button>'
								+'<button><img class="icon" src="/resources/image/header/product_basket.png"></button>'
								+'<button><img class="icon" src="/resources/image/header/heart.png"></button>'
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
		}
	});
}