$(function(){
	$.ajax({
		url: "/admin/getYoutube",
		type: "GET",
		success: function(data){
			$('#main-youtube').attr('src', data.vo['src']);
		}
	});
	
	$.ajax({
		url: "/admin/getMainBanner",
		type: "GET",
		data:{
			banner_id: "main_banner1",
		},
		success: function(data){
			var list = data.list;
			console.log(list);
			
			for(var i=0;i<list.length;i++){
				$('#main_banner1').append(
					'<li class="slide_content"><a href="'+list[i]['href']+'"><img src="/resources/image/home/banner/'+list[i]['filename']+'" width="100%" height="100%"></a></li>'
				);
			}
			
			const slideList = document.querySelector('#main_banner1');
			const slideContents = document.querySelectorAll('#main_banner1 .slide_content');
			const slideLen = slideContents.length;
			var slideWidth = $('#main_banner1_wrap').width();
			const slideSpeed = 500;
			var curIndex = 0;
			
			$('.slide_content').width(slideWidth);
			
			slideList.style.width = (slideWidth * (slideLen+2))+"px";
			slideList.style.transition = "0ms";
			slideList.style.transform = "translate(-"+(slideWidth*(curIndex + 1))+"px,0)";
			
			$(window).resize(function(){
				slideWidth = $('#main_banner1_wrap').width();
				
				$('.slide_content').width(slideWidth);
				
				slideList.style.width = (slideWidth * (slideLen+2))+"px";
				slideList.style.transition = "0ms";
				slideList.style.transform = "translate(-"+(slideWidth*(curIndex + 1))+"px,0)";
			});
			
			var firstChild = slideList.firstElementChild;
			var lastChild = slideList.lastElementChild;
			var clonedFirst = firstChild.cloneNode(true);
			var clonedLast = lastChild.cloneNode(true);
			
			slideList.appendChild(clonedFirst);
			slideList.insertBefore(clonedLast, slideList.firstElementChild);
			
			var pagination = document.querySelector('#main_banner1_page');
			var pageChild = '';
			
			for(var i=0;i<slideLen;i++){
				pageChild += '<li class="name"';
				pageChild += ' data-index="'+i+'">'+list[i]['banner_name']+'</li>';
			}
			
			pagination.innerHTML = pageChild;
			
			var pagedot = document.querySelectorAll('.name');
			pagedot[curIndex].classList.add('active-name');
			
			var slideMove = true;
			
			setInterval(function(){
				if(slideMove){
					curIndex++;
					if(curIndex > 0){
						pagedot[curIndex-1].classList.remove('active-name');
					}else{
						pagedot[slideLen-1].classList.remove('active-name');
					}
					if(curIndex < slideLen){
						pagedot[curIndex].classList.add('active-name');
					}else{
						pagedot[0].classList.add('active-name');
					}
					
					if(curIndex <= slideLen){
						slideList.style.transition = slideSpeed+"ms";
						slideList.style.transform = "translate(-"+(slideWidth*(curIndex+1))+"px,0)";
					}
					
					if(curIndex === slideLen){
						setTimeout(function(){
							slideList.style.transition = "0ms";
							slideList.style.transform = "translate(-"+slideWidth+"px,0)";
						}, slideSpeed);
						curIndex = 0;
					}
				}
			}, list[0]['speed']);
			
			$('#main_banner1_left').click(function(){
				slideMove = false;
				curIndex--;
				if(curIndex < slideLen){
					pagedot[curIndex+1].classList.remove('active-name');
				}else{
					pagedot[0].classList.remove('active-name');
				}
				if(curIndex >= 0){
					pagedot[curIndex].classList.add('active-name');
				}else{
					pagedot[slideLen-1].classList.add('active-name');
				}
				
				if(curIndex >= -1){
					slideList.style.transition =  slideSpeed+"ms";
					slideList.style.transform = "translate(-"+(slideWidth*(curIndex+1))+"px,0)";
				}
				if(curIndex === -1){
					setTimeout(function(){
						slideList.style.transition = "0ms";
						slideList.style.transform = "translate(-"+(slideWidth * slideLen)+"px,0)";
					}, slideSpeed);
					curIndex = slideLen-1;
				}
				
				setTimeout(function(){slideMove = true;},1000);
			});
			
			$('#main_banner1_right').click(function(){
				slideMove = false;
				curIndex++;
				if(curIndex > 0){
					pagedot[curIndex-1].classList.remove('active-name');
				}else{
					pagedot[slideLen-1].classList.remove('active-name');
				}
				if(curIndex < slideLen){
					pagedot[curIndex].classList.add('active-name');
				}else{
					pagedot[0].classList.add('active-name');
				}
				
				if(curIndex <= slideLen){
					slideList.style.transition =  slideSpeed+"ms";
					slideList.style.transform = "translate(-"+(slideWidth*(curIndex+1))+"px,0)";
				}
				
				if(curIndex === slideLen-1){
					setTimeout(function(){
						slideList.style.transition = "0ms";
						slideList.style.transform = "translate(-0px,0)";
					}, slideSpeed);
					curIndex = -1;
				}
				
				setTimeout(function(){slideMove = true;},1000);
			});
			
			$('.name').click(function(){
				slideMove = false;
				var index = parseInt($(this).attr('data-index'));
				
				if(curIndex >= 0){
					pagedot[curIndex].classList.remove('active-name');
				}else{
					pagedot[slideLen-1].classList.remove('active-name');
				}
				curIndex = index;
				pagedot[curIndex].classList.add('active-name');
				
				if(curIndex >= 0){
					slideList.style.transition =  slideSpeed+"ms";
					slideList.style.transform = "translate(-"+(slideWidth*(curIndex+1))+"px,0)";
				}
				if(curIndex === slideLen - 1){
					setTimeout(function(){
						slideList.style.transition = "0ms";
						slideList.style.transform = "translate(-0px,0)";
					}, slideSpeed);
					curIndex = -1;
				}
				
				setTimeout(function(){slideMove = true;},1000);
			});
		}
	});
	
	$('.getlist').click(function(){
		$('.getlist').removeClass('active');
		$(this).addClass('active');
		
		var data = {};
		
		if($(this).attr('id') == 'Best'){
			getProduct("count desc", "Best", 1, 4,'');
		}else{
			getProduct("seq desc", "New", 1, 4,'');
		}
	});
	
	$('#Best').click();
});