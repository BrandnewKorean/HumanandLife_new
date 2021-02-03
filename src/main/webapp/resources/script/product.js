$(function(){
	var df = new DecimalFormat('###,###');
	
	var product_code = $('#product_code').val(); 
	
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
			
			$('title').text(product['name']);
			
			$('#image-one').html('<img id="product-one-image" src="/resources/image/product_image/'+product['product_code']+'/'+imagelist[0]['filename']+'" width="100%" height="100%">');
			
			$('#image-list').css({
				height: (imagelist.length*100)+(2*imagelist.length*2)
			});
			
			$('#image-list').empty();
			
			for(var i=0;i<imagelist.length;i++){
				$('#image-list').append(
					'<li id="image-wrap'+i+'">'
						+'<img class="image-list-one" id="image'+i+'" src="/resources/image/product_image/'+product['product_code']+'/'+imagelist[i]['filename']+'" width="100%" height="100%" ondragstart="return false">'
					+'</li>'
				);
			}
			
			$('#image-wrap0').addClass('active');
			
			$('.image-list-one').click(function(){
				var id = $(this).attr('id'); 
				var index = id.replace('image', '');
				
				$('#product-one-image').attr('src',$(this).attr('src'));
				
				$('#image-list li').removeClass('active');
				$('#image-wrap'+index).addClass('active');
			});
			
			var isdrag = false;
			var drag_y = 0;
			var top = 0;
			$('.product-wrap .product-inner .product-image .list-wrap').on({
				mousedown: function(e){
					e.preventDefault();
					isdrag = true;
					drag_y = e.pageY;
					top = $(this).scrollTop();
					$('#image-list li').css({cursor: "move"});
				},
				mousemove: function(e){
					e.preventDefault();
					if(isdrag){
						var newY = e.pageY;
						$('.product-wrap .product-inner .product-image .list-wrap').scrollTop(top - newY + drag_y);
					}
				},
				mouseup: function(e){
					e.preventDefault();
					isdrag = false;
					$('#image-list li').css({cursor: "pointer"});
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
			
			$('#name').text(product['name']);
			
			$('#option-wrap').empty();
			if(Object.keys(nessOptionMap).length > 0){
				$('#option-wrap').append(
					'<div class="option">'
						+'<div class="option-title">'
							+'필수옵션'
						+'</div>'
						+'<div class="option-content">'
							
						+'</div>'
					+'</div>'
				);
				for(var i=1;i<=Object.keys(nessOptionMap).length;i++){
					$('#option-wrap').append(
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
				$('#option-wrap').append(
					'<div class="option">'
						+'<div class="option-title">'
							+'추가옵션'
						+'</div>'
						+'<div class="option-content">'
						+'</div>'
					+'</div>'
				);
				for(var i=Object.keys(nessOptionMap).length+1;i<(Object.keys(nessOptionMap).length+1+Object.keys(addOptionMap).length);i++){
					$('#option-wrap').append(
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
			
			var total = 0;
			var numberlist = [];
			var pricelist = [];
			var number_count = 0;
			$('#total-price').text(df.format(total));
			
			$('#selected-option').empty();
			
			$('.select-add-option').change(function(){
				var id = $(this).attr('id');
				
				if($(this).val() != ""){
					if($('#'+id+' option:selected').hasClass('selected')){
						alert('이미 선택된 상품입니다.');
						$(this).val('');
					}else{
						$('#'+id+' option:selected').addClass('selected');
						$('#selected-option').append(
							'<div class="selected-option">'
								+'<div class="name">'
									+$('#'+id+' option:selected').text()
								+'</div>'
								+'<div class="number-wrap">'
									+'<button class="number-minus" id="number-minus'+number_count+'">-</button>'
									+'<input class="number" id="number'+number_count+'" type="text" value="1">'
									+'<button class="number-plus" id="number-plus'+number_count+'">+</button>'
								+'</div>'
								+'<div class="price" id="price'+number_count+'">'
									+df.format($('#'+id).val())+'원'
								+'</div>'
							+'</div>'
						);
						
						total += parseInt($('#'+id).val());
						$('#total-price').text(df.format(total));
						numberlist.push(1);
						pricelist.push(parseInt($('#'+id).val()));
						number_count++;
					}
					
					$('.number-minus').click(function(e){
						e.stopImmediatePropagation();
						var id = $(this).attr('id');
						var index = parseInt(id.replace('number-minus',''));
						
						numberlist[index]--;
						if(numberlist[index] < 1) numberlist[index] = 1;
						
						$('#number'+index).val(numberlist[index]);
						$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
						calcTotal();
					});
					
					$('.number-plus').click(function(e){
						e.stopImmediatePropagation();
						var id = $(this).attr('id');
						var index = parseInt(id.replace('number-plus',''));
						
						numberlist[index]++;
						
						$('#number'+index).val(numberlist[index]);
						$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
						calcTotal();
					});
					
					$('.number').focusout(function(e){
						e.stopImmediatePropagation();
						var id = $(this).attr('id');
						var index = parseInt(id.replace('number',''));
						
						if($(this).val() == ''){
							alert('개수를 입력해주세요.');
							$(this).val(numberlist[index]);
						}else if($(this).val().replace(/[0-9]/gi,'').length > 0){
							alert('숫자만 입력 가능합니다.');
							$(this).val(numberlist[index]);
						}else{
							if($(this).val() == 0){
								alert('최소 1 이상의 숫자만 입력해주세요.');
								$(this).val(numberlist[index]);
							}else{
								numberlist[index] = parseInt($(this).val());
								$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
								calcTotal();
							}
						}
					});
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
							indexString = 'option'+i+'-'+$('#option'+i+' option').index($('#option'+i+' option:selected'));
							price += parseInt($('#option'+i).val());
						}else{
							nameString += ' / '+$('#option'+i+' option:selected').text();
							indexString += '-'+'option'+i+'-'+$('#option'+i+' option').index($('#option'+i+' option:selected'));
							price += parseInt($('#option'+i).val());
						}
						$('#option'+i).val('');
					}
					
					if($('#option1').hasClass(indexString)){
						alert('이미 선택된 항목입니다.');
						$(this).val('');
					}else{
						$('#selected-option').append(
							'<div class="selected-option">'
								+'<div class="name">'
									+nameString
								+'</div>'
								+'<div class="number-wrap">'
									+'<button class="number-minus" id="number-minus'+number_count+'">-</button>'
									+'<input class="number" id="number'+number_count+'" type="text" value="1">'
									+'<button class="number-plus" id="number-plus'+number_count+'">+</button>'
								+'</div>'
								+'<div class="price" id="price'+number_count+'">'
									+df.format(price)+'원'
								+'</div>'
							+'</div>'
						);
						$('#option1').addClass(indexString);
						
						total += price;
						$('#total-price').text(df.format(total));
						numberlist.push(1);
						pricelist.push(price);
						number_count++;
						
						$('.number-minus').click(function(e){
							e.stopImmediatePropagation();
							var id = $(this).attr('id');
							var index = parseInt(id.replace('number-minus',''));
							
							numberlist[index]--;
							if(numberlist[index] < 1) numberlist[index] = 1;
							
							$('#number'+index).val(numberlist[index]);
							$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
							calcTotal();
						});
						
						$('.number-plus').click(function(e){
							e.stopImmediatePropagation();
							var id = $(this).attr('id');
							var index = parseInt(id.replace('number-plus',''));
							
							numberlist[index]++;
							
							$('#number'+index).val(numberlist[index]);
							$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
							calcTotal();
						});
						
						$('.number').focusout(function(e){
							e.stopImmediatePropagation();
							var id = $(this).attr('id');
							var index = parseInt(id.replace('number',''));
							
							if($(this).val() == ''){
								alert('개수를 입력해주세요.');
								$(this).val(numberlist[index]);
							}else if($(this).val().replace(/[0-9]/gi,'').length > 0){
								alert('숫자만 입력 가능합니다.');
								$(this).val(numberlist[index]);
							}else{
								if($(this).val() == 0){
									alert('최소 1 이상의 숫자만 입력해주세요.');
									$(this).val(numberlist[index]);
								}else{
									numberlist[index] = parseInt($(this).val());
									$('#price'+index).text(df.format(numberlist[index]*pricelist[index])+'원');
									calcTotal();
								}
							}
						});
					}
				}
			});
			
			function calcTotal(){
				var total = 0;
				
				for(var i=0;i<number_count;i++){
					total += numberlist[i]*pricelist[i];
				}
				
				$('#total-price').text(df.format(total));
			}
		}
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop() + $('#header').height() >= $('.nav').offset().top){
			$('#header').css({
				top: -($(this).scrollTop() + $('#header').height() - $('.nav').offset().top),
				transition: 0
			});
		}else{
			$('#header').css({
				top: 0
			});
		}
	});
	
	$('.nav-button').click(function(){
		$('.nav-button').removeClass('active');
		$(this).addClass('active');
		
		$.ajax({
			url: $(this).attr('data-source'),
			type: "GET",
			success: function(result){
				$('#nav-result').html(result);
			}
		});
	});
	
	$('#nav1').click();
});