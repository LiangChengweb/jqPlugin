/*
 * @Author: liangcheng
 * @Date:   2018-01-25 12:29:06
 * @Last Modified by:   liangcheng
 * @Last Modified time: 2018-01-25 15:49:07
 */

/**
 * [datestyle 获取格式化的事件]
 * @Author   Liangcheng
 * @DateTime 2018-01-25T13:00:53+0800
 * @param    {[type]}                 date  [description]
 * @param    {string}                 style [输出日期时间的风格，类是php的date函数的第一个参数]
 * @return   {[type]}                       [格式化后的事件]
 */
function datestyle(datestr, style) {
  /**
   *只有7种格式 
   *m:d | h:m
   *y:m:d | h:m:s
   *y:m:d h:m
   *m:d h:m:s
   *y:m:d h:m:s 
   */
  // datastr 格式是否正确
  try {
    if (datestr instanceof Date) {
      date = datestr;
    } else {
      date = new Date(datestr);
    }
  } catch (e) {
    console.error('时间日期不对');
    return;
  }

  // 默认风格
  if (style === undefined) {
    style = 'y-m-d h:m:s';
  }
  style = style.toLowerCase();
  return dateFormat(style, date);
}
/**
 * [dateFormat 处理日期时间]
 * @Author   Liangcheng
 * @DateTime 2018-01-25T12:59:08+0800
 * @param    {[type]}                 style [description]
 * @return   {[type]}                       [description]
 */
function dateFormat(style, date) {
  var syb1 = syb2 = syb3 = syb4 = '';

  switch (style.length) {
    case 3:
      if (style[0] == 'm') {
        syb2 = style[1];
      } else if (style[0] == 'h') {
        syb3 = style[1];
      }
      break;
    case 5:
      if (style[0] == 'y') {
        syb1 = style[1];
        syb2 = style[3];
      } else if (style[0] == 'h') {
        syb3 = style[1];
        syb4 = style[3];
      }
      break;
    case 9:
      if (style[0] == 'y') {
        syb1 = style[1];
        syb2 = style[3];
        syb3 = style[7];
      } else if (style[0] == 'm') {
        syb2 = style[1];
        syb3 = style[3];
        syb4 = style[7];
      }
      break;
    case 11:
      syb1 = style[1];
      syb2 = style[3];
      syb3 = style[7];
      syb4 = style[9];
      break;
    default:
      console.error('风格不对');
      break;
  }

  var y = date.getFullYear();
  var m = date.getMonth();
  var d = date.getDate();
  var kong = ' ';
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  m   < 10 ? m  = syb1 + '0' + m  : m   = syb1 + m;
  d   < 10 ? d  = syb2 + '0' + d  : d   = syb2 + d;
  h   < 10 ? h  = '0'  + h        : h;
  mi  < 10 ? mi = syb3 + '0' + mi : mi  = syb3 + mi;
  s   < 10 ? s  = syb4 + '0' + s  : s   = syb4 + s;
  // 正则和对应正确输出结果
  var rules = [
    [
      /^y\Wm\Wd\sh\Wm$/ig,
      '' + y + m + d + kong + h + mi
    ],
    [
      /^y\Wm\Wd$/ig,
      '' + y + m + d
    ],
    [
      /^m\Wd\sh\Wm\Ws$/ig,
      '' + m + d + kong + h + mi + s
    ],
    [
      /^m\Wd$/ig,
      m + d
    ],
    [
      /^h\Wm$/ig,
      h + mi
    ],
    [
      /^h\Wm\Ws$/ig,
      h + mi + s
    ],
    [
      /^y\Wm\Wd\sh\Wm\Ws$/ig,
      '' + y + m + d + kong + h + mi + s
    ]
  ]

  for (var i = 0; i < rules.length; i++) {
    var item = rules[i];
    if (item[0].test(style)) {
      return item[1];
    }
  }
/*  
  if (style.length == 3) {
    if (style[0] == 'd') {
      syb2 = style[1];
    } else if (style[0] == 'h') {
      syb3 = style[1];
    }
  } else if (style.length == 5) {
    if (style[0] == 'y') {
      syb1 = style[1];
      syb2 = style[3];
    } else if (style[0] == 'h') {
      syb3 = style[1];
      syb4 = style[3];
    }
  } else if (style.length == 9) {
    if (style[0] == 'y') {
      syb1 = style[1];
      syb2 = style[3];
      syb3 = style[7];
    } else if (style[0] == 'm') {
      syb2 = style[1];
      syb3 = style[3];
      syb4 = style[7];
    }
  } else if (style.length == 11) {
    syb1 = style[1];
    syb2 = style[3];
    syb3 = style[7];
    syb4 = style[9];
  }
*/
/* else if
  if (/^y\Wm\Wd\sh\Wm$/ig.test(style)) {
    return '' + y + m + d + kong + h + mi;
  } else if (/^y\Wm\Wd$/ig.test(style)) {
    return '' + y + m + d;
  } else if (/^m\Wd\sh\Wm\Ws$/ig.test(style)) {
    return '' + m + d + kong + h + mi + s;
  } else if (/^m\Wd$/ig.test(style)) {
    return m + d;
  } else if (/^h\Wm$/ig.test(style)) {
    return h + mi;
  } else if (/^h\Wm\Ws$/ig.test(style)) {
    return h + mi + s;
  } else if (/^y\Wm\Wd\sh\Wm\Ws$/ig.test(style)) {
    return '' + y + m + d + kong + h + mi + s;
  } else {
    console.error('格式错误');
  }
*/
}