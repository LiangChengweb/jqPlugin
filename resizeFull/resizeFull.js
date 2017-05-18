jQuery.fn.resizeFull = function() {
	var ele = this;
	var windowH = $(window).height();
	var windowW = $(window).width();
	function full() {
		ele.css({'width':windowW,'height':windowH});
	};
	full();
	$(window).resize(function(){
		full();
	});
};
