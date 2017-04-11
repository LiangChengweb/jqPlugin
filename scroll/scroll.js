/**
 * Created by Administrator on 2017/2/3.
 */
jQuery.fn.scrollWrap = function() {
    var ele = $(this);
    //样式控制
    var H = parseFloat(ele.height());
    var x = parseFloat(ele.width()) - 30;
    var h = parseFloat(ele.find('.content').outerHeight());
    var p = H/h;
    if(p > 1){
        p = 1;
        ele.find('.content').css('height',H);
    }
    var barH = parseFloat(ele.find('.scroll-bar').height())*p;
    var bar = ele.find('.bar');
    ele.find('.content').css('width',x);
    bar.css('height',barH);
    //事件方法控制
    var flag = false,top = 0,y0 = 0,y1 = 0;
    //scroll-bar到原点的高度
    var a0 = ele.find('.scroll-bar').offset().top;
    //bar的初始距离浏览器的高度
    var a = 0;
    bar.mousedown(function(e){
        flag = true;
        a = bar.offset().top;
        y0 = e.pageY;
        $('body').css('cursor','pointer')
        //禁止选中文字
        return false;
    });
    function rolling(){
        if(top > H - parseFloat(bar.height())){
            top = H - parseFloat(bar.height());
        } else if(top < 0 ) {
            top = 0;
        }
        if(flag){
            bar.css('top',top);
            ele.find('.content').css('top',-((h - H) * (top / (H - barH))));
        }
    }
    $(document).mousemove(function(e){
        y1 = e.pageY;
        top = a + (y1 - y0) - a0;
        rolling();
    });
    $(document).mouseup(function(){
        flag = false;
    })
    //鼠标滚动
    var wflag = false;
    ele.mouseenter(function(){
        wflag = true;
        return false;
    }).mouseleave(function(){
        wflag = false;
        return false;
    });
    /*ele.mousewheel(function(){
        var getTop = function(event, delta) {
            if (delta > 0)
                top -= 10;
            else if (delta < 0)
                top += 10;
        };
        if(wflag){
            a = bar.offset().top;
            top = a - a0;
            getTop();
            flag = wflag;
            rolling();
        }
    })*/

};
