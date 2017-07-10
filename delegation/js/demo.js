$(function(){
//	alert(Object.keys($.support));
//	alert(Object.keys($.browser)); //webkit,vesion,safari,这个方法不能用，存在兼容性问题
//	alert($.browser.webkit); //ff返回undefined
//	alert($.browser.safari);//andriod返回true
	$('.header').on('click','p',function(){
		$(this).text('2');
	})
	var count = 0;
	$('#add').click(function(){
		count++;
		$('.header').append('<p>' + count +'</p>');
	})
});

