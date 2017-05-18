$(function(){
//省略号
function ellipsis(ele,count){ //第一个参数是节点，第二个是数字，表示有多少行
	if(count == 1) {
		if(ele.children().length != 0){
			//一行省略号，最好在css内写
			ele.children().css({
				'width':'100%',
				'overflow':'hidden',
				'white-space':'nowrap',
				'text-overflow':'ellipsis'
			})
		} else if(ele.children().length == 0) {
			ele.css({
				'overflow':'hidden',
				'white-space':'nowrap',
				'text-overflow':'ellipsis'
			})
		}
	} else if(count >1){
		var lineHeight = parseFloat(ele.css('line-height') || ele.find().css('line-height'));
		ele.each(function(i){
		    var divH = lineHeight*count;
		    var $p = $("p", $(this)).eq(0);
		    while ($p.outerHeight() > divH) {
		        $p.text($p.text().replace(/(\s)*(\w+|\W)(\.\.\.)?$/, "..."));
		    };
		});	
	} else if(!(/^\d$/.test(count)) && count == null){
		alert('ellipsis没有行数，请输入正确的行数！')
	}
}
//省略号调用
ellipsis($('.words'),3); //省略号的节点最好都是<div class="words"><p>文本</p></div>
//单选框和复选框选中切换
var check = function(){
	$('.icon-check').find('input').each(function(){$(this).attr('checked') ? $(this).parents('.icon-check').addClass('active') : $(this).parents('.icon-check').removeClass('active');});
};
check();
$('.radio-item , .icon-check , .icon-check input').click(check);  
//下拉弹框
$('select').change(function(){
	var index = parseInt($(this).val()) ,
		$val = $(this).siblings('.sel-val') ,
		valText = $(this).find('option').eq(index).text(); //当input-text被禁用或者只读，那么val()方法无效。
	$val.get(0).tagName = 'INPUT' ? $val .attr('value',valText) : $val.text(valText);
})
//字数限制
$('.texta textarea').on('keyup change',function(){
	var rest = parseInt($(this).attr('maxlength')) - parseInt($(this).val().length);
	if(rest >= 0) $(this).parent().find('.limit-count').text(rest);
})
//图片base64上传
$('input.file').on('change', function () {
    var that = this;
	lrz(that.files[0],{width: 400}).then(function (rst) {
        var img = new Image(),
			div = document.createElement('div');
        div.className = 'img';
        div.appendChild(img);
        img.onload = function () {
            $('.file-group').append(div);
            var len = $('.file-group').find('img').length;
            if(len>0||len==0){
            	$('.file-group .img').append('<a class="close" href="#">&times;</a>');
            	for(var i=1;i<$('.file-group .img').length;i++){$('.file-group .img .close').eq(i).remove();}
            }
            //默认按钮是在左边的
            //$('.file-btn').appendTo('.file-group');//按钮在右边
            $('.close').click(function(){$(this).parent().remove();return false;})
        };
        img.src = rst.base64;
        return rst;
    });
});
//解决下半屏幕的输入框问题
$('.input-focus').focus(function(){
	$('.dialog').show();
	$('.gb-mask').show();
	$('.input-focus').removeClass('on');
	$(this).addClass('on');
	$('.texta textarea').select().val($('.input-focus.on').val());
})
$(document).on('touchmove',function(e){
	if($('.dialog').css('display') == 'block'){
		e.preventDefault();	
	}
})
//弹窗确定与取消
$('.dialog-btns .sure').click(function(){
	$('.input-focus.on').val($('.texta textarea').val());
	$(this).parents('.dialog').hide();
	$('.gb-mask').hide();
})
$('.dialog-btns .exit').click(function(){
	$(this).parents('.dialog').hide();
	$('.gb-mask').hide();
})

/*sel-btns*/
$('.sel-btns a').click(function(){
	$(this).parents('.sel-btns').hide();
	$('.gb-mask').hide();
})
//字数不得小于10个字
$('.p-o-texta textarea').on('blur',function(){
	if($(this).val().length < 10){
		$(this).siblings('.texta-handle').show();
	}
})
$('.p-o-texta textarea').on('keyup change',function(){
	if($(this).val().length > 10){
		$(this).siblings('.texta-handle').hide();
	}
})
$('.p-o-submit button').on('touchstart submit',function(e){
	if($('.p-o-texta textarea').val().length < 10){
		var $this = $(this);
		$('.gb-mask').show()
		$('.dialog').show();
		setTimeout(function(){
			$('.gb-mask').fadeOut(1000)
			$('.dialog').fadeOut(1000);
			$('.p-o-texta textarea').siblings('.texta-handle').show();
		},1500);
		return false;
	}
})
//事件插件
$(function () {
	var currYear = (new Date()).getFullYear();	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.default = {
		theme: 'android-ics light', //皮肤样式 : default、andriod、andriod-ics、ios、jquery moblie
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: 'yy-mm-dd',
		lang: 'zh',
		showNow: true,
		nowText: "今天",
		startYear: currYear - 50, //开始年份
		endYear: currYear + 10 //结束年份
	};
	$("#USER_AGE").mobiscroll($.extend(opt['datetime'], opt['default']));
});











































})

