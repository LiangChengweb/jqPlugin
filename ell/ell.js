jQuery.fn.ell = function(count) {
  for (var i = 0; i < $(this).length; i++) {
    var ele = $(this).eq(i);
    //words的width和height
    var W = ele.width();
    var H = ele.height();
    //get element's children p
    var p = ele.find('p');
    //get element's lineheight
    var lineHeight = parseFloat(ele.css('line-height') || ele.find(p).css('line-height'));
    if (count == 1) {
      ele.find(p).css({
        'width': W,
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        'overflow': 'hidden'
      })
    } else if (count > 1) {
      var divH = lineHeight * count;
      if (H != 'auto') {
        ele.css({
          'height': divH
        });
      }
      //如果最的p的高度大于divH，那么删除末尾多余行数的str
      ele.each(function(i) {
        while (p.outerHeight() > divH) {
          p.text(p.text().replace(/(\s)*(\w+|\W)(\.\.\.)?$/, "..."));
        };
      })
    }
  }
};