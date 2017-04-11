jQuery.fn.bump = function() {
	var ele = $(this);
	var eleW = ele.width();
	var eleH = ele.height();
	//运动的高度和宽度范围
	var W = $(window).width()-eleW;
	var H = $(window).height()-eleH;
	window.onresize = function () {
		W = $(window).width()-eleW;
		H = $(window).height()-eleH;
	}
	var tan_b = H / W;
	var tan = Math.random()*5;
	var v_h = Math.random()*15000;
	var s_h = 0;
	var t = 0,
		x = 0,
		y = 0;
	a = Math.floor(Math.random() * W);
	b = Math.floor(Math.random() * H);
	//建立一个方向的对象
	var der = {
		l: true,
		t: false,
		r: false,
		b: true
	};
	//first
	ele.css({
		'top': b,
		'left': a
	});
	function move() {
		//1
		if(!der.l && !der.t && der.r && der.b){
			if(a!=W){
				var tanA = (H - b) / (W - a);
				if(tanA < Math.abs(tan)) {
					y = H;
					x = (y-b) / tan + a;
					der.l=false;der.t=true;der.r=true;der.b=false;
				} else {
					x = W;
					y = (x-a) * tan + b;
					der.l=true;der.t=false;der.r=false;der.b=true;
				}
			} else {
				X = a;
				y = b;
				der.l=true;der.t=false;der.r=false;der.b=true;
			}
		//2	
		} else if(!der.l && der.t && der.r && !der.b){
			if(a!=W){
				var tanA = b / (W - a);
				if(tanA < Math.abs(tan)) {
					y = 0;
					x = b / tan + a;
					der.l=false;der.t=false;der.r=true;der.b=true;
				} else {
					x = W;
					y = b - (x-a) * tan;
					der.l=true;der.t=true;der.r=false;der.b=false;
				}
			} else {
				X = a;
				y = b;
				der.l=true;der.t=true;der.r=false;der.b=false;
			}	
		//3
		} else if(der.l && der.t && !der.r && !der.b){
			if(a!=0){
				var tanA = b / a;
				if(tanA < Math.abs(tan)) {
					y = 0;
					x = a - b / tan;
					der.l=true;der.t=false;der.r=false;der.b=true;
				} else {
					x = 0;
					y = b - a*tan;
					der.l=false;der.t=true;der.r=true;der.b=false;
				}
			} else {
				x = 0;
				y = b;
				der.l=false;der.t=true;der.r=true;der.b=true;
			}	
		//4
		} else if(der.l && !der.t && !der.r && der.b){
			if(a!=0){
				var tanA = (H - b) / a;
				if(tanA < Math.abs(tan)) {
					y = H;
					x = a - (H - b)/tan;
					der.l=true;der.t=true;der.r=false;der.b=false;
				} else {
					x = 0;
					y = b + a*tan;
					der.l=false;der.t=false;der.r=true;der.b=true;
				}
			} else {
				x = 0;
				y = b;
				der.l=false;der.t=false;der.r=true;der.b=true;
			}		
		}
		s_h =  Math.sqrt((x-a)*(x-a) + (y-b)*(y-b));
		t = (s_h / v_h)*1000;
		ele.animate({
			'top': y,
			'left': x
		},t,'linear',function(){
			a = x;
			b = y;
			move();
		});
	}
	move();
};
