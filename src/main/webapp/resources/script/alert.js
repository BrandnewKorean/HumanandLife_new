function buyProduct(product_code){
	var df = new DecimalFormat('###,###');
	
	init();
	$('.alert-wrap[data-source="product"]').show();
	
	$.ajax({
		url: "/service/getProduct",
		type: "GET",
		data:{
			product_code: product_code
		},
		success: function(data){
			var product = data.product['vo']['store'];
			var event = data.product['vo']['event'];
			var imagelist = data.product['vo']['productImageList'];
			var nessOptionMap = data.product['vo']['nessOptionMap'];
			var addOptionMap = data.product['vo']['addOptionMap'];
			
			$('#product-image-one').html('<img id="product-one-image" src="/resources/image/product_image/'+imagelist[0]['filename']+'" width="100%" height="100%">');
			
			$('#product-image-list').css({
				width: (imagelist.length*100)+(2*imagelist.length*2)
			});
			
			$('#product-image-list').empty();
			for(var i=0;i<imagelist.length;i++){
				$('#product-image-list').append(
					'<li id="product-image-wrap'+i+'">'
						+'<img class="product-image-list-one" id="product-image'+i+'" src="/resources/image/product_image/'+imagelist[i]['filename']+'" width="100%" height="100%" ondragstart="return false">'
					+'</li>'
				);
			}
			
			$('#product-image-wrap0').addClass('active');
			$('.product-image-list-one').click(function(){
				var id = $(this).attr('id'); 
				var index = id.replace('product-image', '');
				
				$('#product-one-image').attr('src',$(this).attr('src'));
				
				$('#product-image-list li').removeClass('active');
				$('#product-image-wrap'+index).addClass('active');
			});
			
			var isdrag = false;
			var drag_x = 0;
			var left = 0;
			$('.product-wrap .product-inner .product-image .list-wrap').on({
				mousedown: function(e){
					e.preventDefault();
					isdrag = true;
					drag_x = e.pageX;
					left = $(this).scrollLeft();
					$('#product-image-list li').css({cursor: "move"});
				},
				mousemove: function(e){
					e.preventDefault();
					if(isdrag){
						var newX = e.pageX;
						$('.product-wrap .product-inner .product-image .list-wrap').scrollLeft(left - newX + drag_x);
					}
				},
				mouseup: function(e){
					e.preventDefault();
					isdrag = false;
					$('#product-image-list li').css({cursor: "pointer"});
				}
			});
			
			$('.product-event-wrap').empty();
			
			if(event != null){
				var eventString = '';
				if(event['ispersent']){
					eventString = '<div class="event-box">'+event['category']+'&nbsp;'+event['persent']+'%'+'</div>';
				}else if(event['isdiscount']){
					eventString = '<div class="event-box">'+event['category']+'&nbsp;'+df.format(event['discount'])+'</div>';
				}else{
					eventString = '<div class="event-box">'+event['category']+'&nbsp;EVENT</div>';
				}
				$('.product-event-wrap').append(eventString);
			}
			
			$('#product-name').text(product['name']);
			
			$('#product-option-wrap').empty();
			if(Object.keys(nessOptionMap).length > 0){
				$('#product-option-wrap').append(
					'<div class="option">'
						+'<div class="option-title">'
							+'필수옵션'
						+'</div>'
						+'<div class="option-content">'
							
						+'</div>'
					+'</div>'
				);
				for(var i=1;i<=Object.keys(nessOptionMap).length;i++){
					$('#product-option-wrap').append(
						'<div class="option">'
							+'<div class="option-title">'
								+nessOptionMap[i][0]['option_name']
							+'</div>'
							+'<div class="option-content">'
								+'<select class="select-option" id="option'+i+'"></select>'
							+'</div>'
						+'</div>'
					);
					
					$('#option'+i).append(
						'<option value="">옵션을 선택해주세요</option>'
					);
					
					for(var j=0;j<Object.keys(nessOptionMap[i]).length;j++){
						if(i == 1){
							if(product['event_price'] != 0){
								if(nessOptionMap[i][j]['price_plus'] != 0){
									$('#option'+i).append(
										'<option value="'+(product['event_price'])+'">'+nessOptionMap[i][j]['name']+'(+'+nessOptionMap[i][j]['price_plus']+')'+'</option>'
									);
								}else{
									$('#option'+i).append(
										'<option value="'+(product['event_price'])+'">'+nessOptionMap[i][j]['name']+'</option>'
									);
								}
							}else{
								if(nessOptionMap[i][j]['price_plus'] != 0){
									$('#option'+i).append(
										'<option value="'+(product['price'])+'">'+nessOptionMap[i][j]['name']+'(+'+nessOptionMap[i][j]['price_plus']+')'+'</option>'
									);
								}else{
									$('#option'+i).append(
										'<option value="'+(product['price'])+'">'+nessOptionMap[i][j]['name']+'</option>'
									);
								}
							}
						}else{
							if(product['event_price'] != 0){
								if(nessOptionMap[i][j]['price_plus'] != 0){
									$('#option'+i).append(
										'<option value="'+(nessOptionMap[i][j]['price_plus'])+'">'+nessOptionMap[i][j]['name']+'(+'+nessOptionMap[i][j]['price_plus']+')'+'</option>'
									);
								}else{
									$('#option'+i).append(
										'<option value="'+(nessOptionMap[i][j]['price_plus'])+'">'+nessOptionMap[i][j]['name']+'</option>'
									);
								}
							}else{
								if(nessOptionMap[i][j]['price_plus'] != 0){
									$('#option'+i).append(
										'<option value="'+(nessOptionMap[i][j]['price_plus'])+'">'+nessOptionMap[i][j]['name']+'(+'+nessOptionMap[i][j]['price_plus']+')'+'</option>'
									);
								}else{
									$('#option'+i).append(
										'<option value="'+(nessOptionMap[i][j]['price_plus'])+'">'+nessOptionMap[i][j]['name']+'</option>'
									);
								}
							}
						}
						
					}
				}
			}
			
			if(Object.keys(addOptionMap).length > 0){
				$('#product-option-wrap').append(
					'<div class="option">'
						+'<div class="option-title">'
							+'추가옵션'
						+'</div>'
						+'<div class="option-content">'
						+'</div>'
					+'</div>'
				);
				for(var i=Object.keys(nessOptionMap).length+1;i<(Object.keys(nessOptionMap).length+1+Object.keys(addOptionMap).length);i++){
					$('#product-option-wrap').append(
						'<div class="option">'
							+'<div class="option-title">'
								+addOptionMap[i][0]['option_name']
							+'</div>'
							+'<div class="option-content">'
								+'<select class="select-add-option" id="addoption'+i+'"></select>'
							+'</div>'
						+'</div>'
					);
					
					$('#addoption'+i).append(
						'<option value="">옵션을 선택해주세요</option>'
					);
					
					for(var j=0;j<Object.keys(addOptionMap[i]).length;j++){
						$('#addoption'+i).append(
							'<option value="'+(addOptionMap[i][j]['price_plus'])+'">'+addOptionMap[i][j]['name']+'(+'+addOptionMap[i][j]['price_plus']+')'+'</option>'
						);
					}
				}
			}
			
			$('#product-selected-option').empty();
			
			$('.select-add-option').change(function(){
				var id = $(this).attr('id');
				
				if($(this).val() != ""){
					if($('#'+id+' option:selected').hasClass('selected')){
						alert('이미 선택된 상품입니다.');
						$(this).val('');
					}else{
						$('#'+id+' option:selected').addClass('selected');
						$('#product-selected-option').append(
							'<div>'
								+$('#'+id+' option:selected').text()
							+'</div>'
						);
					}
				}
			});
			
			$('.select-option').change(function(){
				var allCheck = true;
				
				for(var i=1;i<=$('.select-option').length;i++){
					if($('#option'+i).val() == ''){
						allCheck = false;
						break;
					}
				}
				
				if(allCheck){
					var indexString = '';
					var nameString = '';
					var price = 0;
					
					for(var i=1;i<=$('.select-option').length;i++){
						if(i == 1){
							nameString = $('#option'+i+' option:selected').text();
							indexString = $('#option'+i+' option').index($('#option'+i+' option:selected'));
							price += parseInt($('#option'+i).val());
						}else{
							nameString += ' / '+$('#option'+i+' option:selected').text();
							indexString += '-'+$('#option'+i+' option').index($('#option'+i+' option:selected'));
							price += parseInt($('#option'+i).val());
						}
					}
					
					if($('#option1').hasClass(indexString)){
						alert('이미 선택된 항목입니다.');
						$(this).val('');
					}else{
						$('#product-selected-option').append(
							'<div class="selected-option">'
								+'<div class="name">'
									+nameString
								+'</div>'
								+'<div class="price">'
									+df.format(price)+'원'
								+'</div>'
							+'</div>'
						);
						$('#option1').addClass(indexString);
					}
				}
			});
		}
	});
	
	$('#product-exit').click(function(){
		close();
	});
	
	$('#custom-alert').click(function(e){
		if($(e.target).hasClass('inner')){
			close();
		}
	});
}


function customAlert(content){
	init();
	$('.alert-wrap[data-source="alert"]').show();
	$('#alert-content').text(content);
	
	$('#alert-confirm').click(function(){
		close();
	});
	
	$('#custom-alert').click(function(e){
		if($(e.target).hasClass('inner')){
			close();
		}
	});
}

function viewTerms(obj){
	init();
	$('.alert-wrap[data-source="terms"]').show();
	$('#terms-title').text(obj.title);
	
	if(obj.subtitle != undefined){
		$('#terms-subtitle').text(obj.subtitle);
	}
	
	$.ajax({
		url: "/policy/"+obj.content,
		type: "GET",
		success: function(result){
			$('#terms-content').html(result);
		}
	});
	
	$('#terms-confirm').click(function(){
		close();
	});
	
	$('#custom-alert').click(function(e){
		if($(e.target).hasClass('inner')){
			close();
		}
	});
}

function init(){
	scrollDisable();
	$('#custom-alert').show();
	$('.alert-wrap').hide();
}

function close(){
	$('#custom-alert').hide();
	scrollEnable();
}

function scrollDisable(){
	$('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}

function scrollEnable(){
	$('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
}