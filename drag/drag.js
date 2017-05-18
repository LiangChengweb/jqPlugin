jQuery.fn.drag = function() {
	var ele = $(this);
	ele.parent().css('overflow','hidden');
	//初始坐标
	var a = 0,
		b = 0,
		c = 0,
		d = 0;
	//是否移动的布尔值
	var flag = false;
	//window的w，h
	var W = $(window).width();
	var H = $(window).height();
	//处理浏览器变化问题
	$(window).resize(function(){
		W = $(window).width();
		H = $(window).height();
	})
	var eleW = ele.innerWidth();
	var eleH = ele.innerHeight();
	$(document).mouseup(function(e){
		flag = false;
	})
	ele.mousedown(function(e){
		flag = true;
		a = $(this).offset().left;
		b = $(this).offset().top;
		//点击后，节点定位
		$(this).css({
			'cursor': 'pointer' ,
			'position': 'fixed',
			'left': a ,
			'top': b 
		})
		c = e.pageX;
		d = e.pageY;
	})	
	$(document).mousemove(function(e){
		if(flag){
			//$('body').children().css({'z-index':'9','position':'relative'})
			var c1 = e.pageX;
			var d1 = e.pageY;
			var a1 = ele.offset().left;
			var b1 = ele.offset().top;
			var x = a + (c1 - c);
			var y = b + (d1 - d);
			x < 0 ? x = 0 : x = x;
			y < 0 ? y = 0 : y = y;
			x > (W - eleW) ? x = (W - eleW) : x = x;
			y > (H - eleH) ? y = (H - eleH) : y = y;
			ele.css({'left': x,'top': y,'z-index': '0'})	
		}
		$('.x').text(x);
		$('.y').text(y);
	});
	//处理浏览器窗口变化

};
