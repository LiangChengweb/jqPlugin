$(function(){
	$('.seach-form .select_wrap li.s1').click(function(){
		var h =parseFloat($(this).parent().outerHeight()); 
		var hs = parseFloat($(this).parent().find('li').length * $(this).outerHeight());
		var li_h = parseFloat($(this).outerHeight()); //34
		if(h<hs){
			$(this).parent().addClass('on').stop(true,true).animate({
				height: hs + 'px',
			})
		} else if(h==hs) {
			$(this).parent().removeClass('on').stop(true,true).animate({
				height:  li_h + 'px',
			})
		}
	})
	$('.seach-form .select_wrap li:not(.s1)').click(function(){
		$(this).siblings('.s1').text($(this).text());
	})
})
