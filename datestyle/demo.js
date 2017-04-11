var $date  = new Date();
/*
* fn datestyle 函数方法 将时间转化常用的格式
* param $date 时间对象的参数
* param style 时间书写格式
* */
function datestyle($date,style) {
//	只有六种格式 m:d, h:m, | y:m:d, h:m:s, | y:m:d h:m, m:d h:m:s, | y:m:d h:m:s
	if(style === undefined ){
		style = 'y:m:d h:m:s';
	}
    style = style.toLowerCase();
    if($date instanceof Date){
		//特殊字符	
		var symbol1=symbol2=symbol3=symbol4='';
    	if(style.length == 3){
    		if(style.charAt(0)=='d'){
    			symbol2 = style.charAt(1);
    		}else if(style.charAt(0)=='h'){
    			symbol3 = style.charAt(1);
    		}
    	} else if( style.length == 5) {
    		if(style.charAt(0)=='y'){
    			symbol1 = style.charAt(1);
    			symbol2 = style.charAt(3);
    		}else if(style.charAt(0)=='h'){
    			symbol3 = style.charAt(1);
    			symbol4 = style.charAt(3);
    		}
    	} else if(style.length == 9 ) {
    		if(style.charAt(0)=='y'){
    			symbol1 = style.charAt(1);
    			symbol2 = style.charAt(3);
    			symbol3 = style.charAt(7);
    		}else if(style.charAt(0)=='m'){
    			symbol2 = style.charAt(1);
    			symbol3 = style.charAt(3);
    			symbol4 = style.charAt(7);
    		}
    	} else if(style.length == 11) {
    		var symbol1 = style.charAt(1);
	        var symbol2 = style.charAt(3);
	        var symbol3 = style.charAt(7);
	        var symbol4 = style.charAt(9);
    	}
        var kong = ' ';
        var y = $date.getFullYear();
        var m = $date.getMonth();
        if(m < 10){
            m = symbol1 + '0' + m;
        }else {
            m = symbol1 + m;
        }
        var d = $date.getDate();
        if(d < 10){
            d = symbol2 + '0' + d;
        } else {
            d = symbol2 + d;
        }
        var h = $date.getHours();
        if(h < 10){
           h = '0' + h;
        }
        var mi = $date.getMinutes();
        if(mi < 10){
            mi = symbol3 + '0' + mi;
        }else {
            mi = symbol3 + mi;
        }
        var s = $date.getSeconds();
        if(s < 10){
            s = symbol4 + '0' + s;
        }else {
            s = symbol4 + s;
        }
        if(/^y\Wm\Wd\sh\Wm$/ig.test(style)){
            s = '';
            return ''+y+m+d+kong+h+mi+s;
        }else if(/^y\Wm\Wd$/ig.test(style)){
            h = '';
            mi = '';
            s = '';
            kong = '';
            return ''+y+m+d+kong+h+mi+s;
        }else if(/^m\Wd\sh\Wm\Ws$/ig.test(style)){
            y = '';
            return ''+y+m+d+kong+h+mi+s;
        }else if(/^m\Wd$/ig.test(style)){
            y = '';
            h = '';
            mi = '';
            s = '';
            kong = '';
            return ''+y+m+d+kong+h+mi+s;
        }else if(/^h\Wm$/ig.test(style)){
            y = '';
            m = '';
            d = '';
            s = '';
            kong = '';
            return ''+y+m+d+kong+h+mi+s;
        }else if(/^h\Wm\Ws$/ig.test(style)){
            y = '';
            m = '';
            d = '';
            kong = '';
            return ''+y+m+d+kong+h+mi+s;
        } else if(/^y\Wm\Wd\sh\Wm\Ws$/ig.test(style)){
            return ''+y+m+d+kong+h+mi+s;
        } else {
            alert('格式错误');
        }
    } else {
        alert('date错误');
    }
}
console.log(datestyle($date));
console.log(datestyle($date,"h:m:s"));






































