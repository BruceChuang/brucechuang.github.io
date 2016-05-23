/*背景颜色设置*/
var $head_setting_img=document.getElementById("head_setting");
$head_setting_img.onclick=function(){
	var $head_setting=document.getElementById("head_setting");
	$head_setting.style.transition="height 0.3s ease";
	if($head_setting.style.height=="60px"){
		$head_setting.style.height="140px";
	}else{
		$head_setting.style.height="60px";
	}
}
/*背景颜色设置结束*/
