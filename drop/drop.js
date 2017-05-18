jQuery.fn.drop = function() {
	var ele = this;
	alert(ele.get());
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
	//水平的初始化速度
	var v_h1 = 1;
	var v_h = v_h1;

	$(document).mouseup(function(e){
		flag = false;
		v_h = v_h1;
		down();		
	})
	function down() {
		if(flag==false){
			//运动到底部的纵坐标
			var yBottom = H - eleH;
			//设置重力加速度,是以没1ms运动算起
			var g = .05;
			//阻力加速度
			var a = 0.04;
			//上升高度
			var yTop = 0;
			//动态
			var top = ele.offset().top;
			//高度
			var h = H - top - eleH;
			//自由落体的高度和时间
			var t = Math.sqrt(2*h/g);
			//第一次最大速度
			var v = g*t;
			//水平的速度减速至0
			v_h = v_h/1.04 - .4*t/1000;
			v_h = Math.abs(Math.floor(v_h*1000)/1000);
			ele.animate({
				'top': yBottom,
				'left': '+=' + t*v_h + 'px'
			},t*2,'swing',function(){
				t = v / (a + g);
				yTop = H - v*t/2 - eleH;
				ele.animate({
					'top': yTop ,
					'left': '+=' + t*v_h + 'px'
				},t*2,'swing',function(){
					down();
				});
			})
		}
	}
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
	});
};
