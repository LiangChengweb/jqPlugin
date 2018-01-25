/**
 * Created by Administrator on 2017/2/3.
 * w 为节点宽度
 */
jQuery.fn.scrollWrap = function(w) {
  if (typeof w == 'undefined') { w = 300; }
  var ele = $(this);
  ele.append('<div class="scroll-bar"><div class="bar"></div></div>').after('<style type="text/css">#scroll-wrap{position:relative;width:' + w + 'px;overflow:hidden;margin:0 auto;border:1px solid red}#scroll-wrap .clip{width:620px;height:300px;overflow-y:scroll}#scroll-wrap .content:hover{cursor:pointer}#scroll-wrap .scroll-bar{position:absolute;border-left:1px solid #fff;width:15px;padding:0 1px;height:100%;top:0;right:0;background:#000}#scroll-wrap .scroll-bar .bar{width:15px;margin:0 1px;position:absolute;top:0;right:0;background:#fff}#scroll-wrap .scroll-bar .bar:hover{cursor:pointer}</style>');
  var clip = ele.find('.clip');
  var content = ele.find('.content');
  var bar = ele.find('.bar')
  /*
   * 注意eleW是不含padding、border和magin
   * */
  var scrollW = 50;
  var eleW = parseFloat(ele.width());
  var eleH = parseFloat(ele.height());
  ele.css('overflow', 'hidden');
  content.css({
    'width': eleW - 15,
  });
  clip.css({
    'width': eleW + scrollW,
    'overflow-y': 'scroll',
    'height': eleH
  })
  var barH = (eleH / parseFloat(content.height())) * parseFloat(bar.height());
  //barH = 30px时候倍数k
  var k = parseFloat(bar.height()) / 30;
  if (parseFloat(content.height()) > (eleH * k)) {
    //内容高度远远大于clip的高度， bar取最小值
    bar.height('30px');
  } else {
    bar.height(barH);
  }
  //鼠标滚动的效果
  clip.scroll(function() {
    var bart = parseFloat($(this).scrollTop()) / (content.height() - eleH) * parseFloat(eleH - bar.height() - 2);
    $('.scroll-bar').find('.bar').css({
      'top': bart
    })
  })
  //判断是否按住
  var flag = false;
  //设置一个初始点a，目标点b
  var a = b = y0 = y1 = ay0 = 0;
  // bar最初的高度
  var s_top = parseFloat($('.scroll-bar').offset().top);
  var mt = s_top;
  var mb = s_top + parseFloat($('.scroll-bar').height()) - parseFloat(bar.height());
  bar.mousedown(function(e) {
    flag = true;
    a = bar.offset().top;
    y0 = e.pageY;
  })
  $(document).mouseup(function() {
    flag = false;
  })
  $(document).mousemove(function(e) {
    if (flag) {
      y1 = e.pageY;
      var l = y1 - y0;
      if (l < (mt - a)) {
        l = mt - a;
      } else if (l > mb - a) {
        l = mb - a;
      }
      b = l + a - mt;
      bar.css({
        'top': b
      })
      clip.scrollTop(b * (content.height() - eleH) / parseFloat(eleH - bar.height() - 2));
    }
  })
};