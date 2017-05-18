/**
 * event 表示事件对象
 * delata 表示滚动方向，向上滚动为1，向下滚动为-1
 * deltaX ,deltaY 表示横纵坐标上的表示滚动方向
 */

$(function(){
    /*
     // using the event helper
     $(window).mousewheel(function(event, delta, deltaX, deltaY) {
     if (window.console && console.log) {
     console.log(delta, deltaX, deltaY);
     }
     });
     */

    // using bind
    $(window).bind('mousewheel', function(event, delta, deltaX, deltaY) {
        if (window.console && console.log) {
            console.log(delta, deltaX, deltaY);
        }
    });




})