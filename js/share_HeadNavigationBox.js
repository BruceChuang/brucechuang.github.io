var $box=document.getElementById("box");/*定义box的变量*/
$box.style.transition="left 0.5s ease";/*设置box的transition样式*/

/*点击设置图标事件（在pc下为什么点了之后会跳到顶端？？？？？？？？？？？？？？？？？？）*/
var $head_setting=document.getElementById("head_setting");
var $head_SettingBox_BackButtom=document.getElementById("head_SettingBox_BackButtom");
var $head_SettingBox=document.getElementById("head_SettingBox");
$head_SettingBox.style.transition="left 0.5s ease";

$head_setting.onclick=function(){
	if(window.innerWidth<=480){
		$head_SettingBox.style.left=0;
		$box.style.left="100%";
	}else{
		if($head_SettingBox.style.left=="-30%"){
			$head_SettingBox.style.left="0%";
			$box.style.left="30%";
		}else{
			$head_SettingBox.style.left="-30%";
			$box.style.left="0%";
		}
	}
}
/*移动设备下才有的事件*/
$head_SettingBox_BackButtom.onclick=function(){
	if(window.innerWidth<=480){
		$head_SettingBox.style.left="-100%";
		$box.style.left=0;
	}
}
/*移动设备下才有的事件---结束*/
/*设置---结束*/
/*设置内容，无论什么设备都无需更改*/
/*点击颜色设置事件*/
var $head_SettingBox_content_color_none=document.getElementById("head_SettingBox_content_color_none");
var $head_SettingBox_content_color_white=document.getElementById("head_SettingBox_content_color_white");
var $head_SettingBox_BackButtom=document.getElementById("head_SettingBox_BackButtom");
var $head=document.getElementById("head");
var $navigation=document.getElementById("navigation");
var $navigation_BarBox=document.getElementById("navigation_BarBox");
var $navigation_BarBox_BackButtom=document.getElementById("navigation_BarBox_BackButtom");
var $head_SettingBox=document.getElementById("head_SettingBox");
var $head_SettingBox_BackButtom=document.getElementById("head_SettingBox_BackButtom");
$head_SettingBox_content_color_none.onclick=function(){
	$head.style.backgroundColor="rgb(51,51,51)";
	$navigation.style.backgroundColor="rgba(51,51,51,0.5)";
	$navigation_BarBox.style.backgroundColor="rgba(51,51,51,0.5)";
	$head_SettingBox.style.backgroundColor="rgba(51,51,51,0.5)";
	document.body.style.backgroundColor=" rgb(224,224,224)";
	$navigation_BarBox_BackButtom.style.backgroundColor=" rgb(224,224,224)";
	$head_SettingBox_BackButtom.style.backgroundColor="rgb(224,224,224)";
	if(window.innerWidth>480){
		var $head_navigation_three=document.getElementById("head_navigation_three");
		$head_navigation_three.style.backgroundColor="rgb(51,51,51)";
	}
	
}
$head_SettingBox_content_color_white.onclick=function(){
	$head.style.backgroundColor="rgb(44,161,134)";
	$navigation.style.backgroundColor="rgba(44,161,134,0.5)";
	$navigation_BarBox.style.backgroundColor="rgba(44,161,134,0.5)";
	$head_SettingBox.style.backgroundColor="rgba(44,161,134,0.5)";
	document.body.style.backgroundColor="rgb(238,238,238)";
	$navigation_BarBox_BackButtom.style.backgroundColor=" rgb(238,238,238)";
	$head_SettingBox_BackButtom.style.backgroundColor=" rgb(238,238,238)";
	if(window.innerWidth>480){
		var $head_navigation_three=document.getElementById("head_navigation_three");
		$head_navigation_three.style.backgroundColor="rgb(44,161,134)";
	}
}
/*颜色设置事件---结束*/
/*设置内容，无论什么设备都无需更改---结束*/

/*导航条*/
var $navigation_bar=document.getElementById("navigation_bar");
/*判断条形图表的颜色*/
window.onload=function(){
	if(window.innerWidth>480){
		$navigation_bar.src="img/条形图表1.png";
	}
}
/*点击条形图标事件*/
var $navigation_BarBox_BackButtom=document.getElementById("navigation_BarBox_BackButtom");
var $navigation_BarBox=document.getElementById("navigation_BarBox");
var $navigation_title=document.getElementById("navigation_title");
$navigation_title.style.transition="left 0.5s ease";
$navigation_BarBox.style.transition="left 0.5s ease";
$navigation_BarBox.style.top="30px";

$navigation_bar.onclick=function(){
	if(window.innerWidth<=480){
		$navigation_BarBox.style.left=0;
		$box.style.left="100%";
		$navigation_title.style.left="15%";
	}else{
		if($navigation_BarBox.style.left=="-30%"){/*为什么pc下要点第一次没反应？？？？？？？？？？？？*/
			$navigation_BarBox.style.left="0%";
			$box.style.left="30%";
		}else{
			$navigation_BarBox.style.left="-30%";
			$box.style.left=0;
		}
	}
}
/*移动设备下才有的事件*/
$navigation_BarBox_BackButtom.onclick=function(){
	if(window.innerWidth<=480){
		$navigation_BarBox.style.left="-100%";
		$box.style.left=0;
		$navigation_title.style.left="-75%";
	}
}
/*移动设备下才有的事件---结束*/
/*点击条形图标事件---结束*/
/*点击“更多”事件*/
	/*移动设备下*/
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
	/*移动设备下---结束*/
	/*pc下*/
var $head_navigation_three_more=document.getElementById("head_navigation_three_more");
$head_navigation_three_more.onclick=function(){
	var $head_navigation_three=document.getElementById("head_navigation_three");
	$head_navigation_three.style.transition="height 0.3s ease";
	if ($head_navigation_three.style.height<"45px") {
		$head_navigation_three.style.height="90px";/*为什么超过100px就无法拉回去？？？？？？？？？？？？？？？？*/
	} else{
		$head_navigation_three.style.height="40px";
	}
}
	/*pc下---结束*/
/*点击“更多”事件---结束*/
/*导航条---结束*/	