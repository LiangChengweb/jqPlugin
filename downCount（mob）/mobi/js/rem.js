new function (){
var _self = this;
_self.width = 640;//设置默认最大宽度
_self.fontSize = 100;//默认字体大小
_self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};  

_self.changePage = function(){
document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px");
}
_self.changePage();
window.addEventListener('resize',function(){_self.changePage();},false);
};
$(function(){
	//手机高度最小尺寸
	$('body,html').css('min-height',$(window).height());
	//:active 失效的原因
	document.body.addEventListener('touchstart',function(){},false);
})
