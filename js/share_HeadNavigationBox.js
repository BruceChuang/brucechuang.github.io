var $box=document.getElementById("box");/*定义box的变量*/
$box.style.transition="left 0.5s ease";/*设置box的transition样式*/

/*点击设置图标事件*/
var $head_setting=document.getElementById("head_setting");
var $head_SettingBox_BackButtom=document.getElementById("head_SettingBox_BackButtom");
var $head_SettingBox=document.getElementById("head_SettingBox");
$head_SettingBox.style.transition="left 0.5s ease";

$head_setting.onclick=function(){
	$head_SettingBox.style.left=0;
	$box.style.left="100%";
}
$head_SettingBox_BackButtom.onclick=function(){
	$head_SettingBox.style.left="-100%";
	$box.style.left=0;
}
/*设置---结束*/

/*点击颜色设置事件*/
var $head_SettingBox_content_color_none=document.getElementById("head_SettingBox_content_color_none");
var $head_SettingBox_content_color_white=document.getElementById("head_SettingBox_content_color_white");
var $head_SettingBox_BackButtom=document.getElementById("head_SettingBox_BackButtom");

$head_SettingBox_content_color_none.onclick=function(){
	document.body.style.backgroundColor=" rgb(224,224,224)";
	$head_SettingBox_BackButtom.style.backgroundColor="rgb(224,224,224)";
}
$head_SettingBox_content_color_white.onclick=function(){
	document.body.style.backgroundColor="white";
	$head_SettingBox_BackButtom.style.backgroundColor="white";
}
/*颜色设置事件---结束*/

/*导航条*/
/*点击条形图标事件*/
var $navigation_bar=document.getElementById("navigation_bar");
var $navigation_BarBox_BackButtom=document.getElementById("navigation_BarBox_BackButtom");
var $navigation_BarBox=document.getElementById("navigation_BarBox");
var $navigation_title=document.getElementById("navigation_title");
$navigation_title.style.transition="left 0.5s ease";
$navigation_BarBox.style.transition="left 0.5s ease";
$navigation_BarBox.style.top="30px";

$navigation_bar.onclick=function(){
	$navigation_BarBox.style.left=0;
	$box.style.left="100%";
	$navigation_title.style.left="15%";
}
$navigation_BarBox_BackButtom.onclick=function(){
	$navigation_BarBox.style.left="-100%";
	$box.style.left=0;
	$navigation_title.style.left="-75%";
}
/*点击条形图标事件---结束*/
/*点击“更多”事件*/
var $navigation_title_three_more=document.getElementById("navigation_title_three_more");
$navigation_title_three_more.onclick=function(){
	var $navigation_title_three=document.getElementById("navigation_title_three");
	$navigation_title_three.style.transition="height 0.3s ease";
	if ($navigation_title_three.style.height<"25px") {
		$navigation_title_three.style.height="52px";
	} else{
		$navigation_title_three.style.height="22px";
	}
}
/*点击“更多”事件---结束*/
/*导航条---结束*/