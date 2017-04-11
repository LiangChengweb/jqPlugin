$(function(){
	/*	 
	 *#jcar_ele 表示轮播的总父节点的id
	 * w 是每个滚动的li的outerwidth
	 * #next
	 * */
	if($('#jcar_ele').size()>0){
		var w = parseFloat($('#jcar_ele li').width())+parseFloat($('#jcar_ele li').css('margin-left'))+parseFloat($('#jcar_ele li').css('margin-right'));
		$('#jcar_ele').jCarouselLite({
			btnPrev: '#next',
			btnNext: '#prev',
			liSize: w
		});	
	}
})
