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
/*点击条形图标事件*/
var $navigation_bar=document.getElementById("navigation_bar");
var $navigation_BarBox_BackButtom=document.getElementById("navigation_BarBox_BackButtom");
var $navigation_BarBox=document.getElementById("navigation_BarBox");
$navigation_BarBox.style.transition="left 0.5s ease";
$navigation_BarBox.style.top="30px";
$navigation_bar.onclick=function(){
	$navigation_BarBox.style.left=0;
	$box.style.left="100%";
}
$navigation_BarBox_BackButtom.onclick=function(){
	$navigation_BarBox.style.left="-100%";
	$box.style.left=0;
}
/*点击条形图标事件---结束*/
