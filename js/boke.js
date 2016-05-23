//第一个page
var $title=document.getElementById("title");
$title.onclick=function(){
	var $myname=document.getElementById("myname");
	var $sexandage=document.getElementById("sexandage");
	var $homename=document.getElementById("homename");
	var $homepicture=document.getElementById("homepicture");
	$myname.style.transition="left 0.5s linear,font-size 0.3s linear";
	$myname.style.left="50px";
	$sexandage.style.transition="top 1s linear,font-size 0.3s ease";
	$sexandage.style.top="300px";
	$homename.style.transition="top 0.3s ease";
	$homename.style.top="70px";
	$homepicture.style.transition="transform 0.3s linear,top 0.3s linear,right 0.7s linear";
	$homepicture.style.right="60px";
}

var $next1=document.getElementById("next1");
$next1.onclick=function(){
	var $page1=document.getElementById("page1");
	var $page2=document.getElementById("page2");
	$page1.style.transition="top 2s ease";
	$page1.style.top="-610px";
	$page2.style.transition="top 2s ease";
	$page2.style.top="0px";
}

//第二个page
var $page2_title=document.getElementById("page2_title");
$page2_title.onclick=function(){
	var $small_picture_box=document.getElementById("small_picture_box");
	var $big_picture=document.getElementById("big_picture");
	$page2_title.style.transition="opacity 1s linear";
	$page2_title.style.visibility="hidden";
	$big_picture.style.transition="opacity 1s linear";
	$small_picture_box.style.opacity="1";
	$small_picture_box.style.transition="opacity 1s linear";
	$big_picture.style.opacity="1";
}

var $big_picture=document.getElementById("big_picture");
var $small_picture1=document.getElementById("small_picture1");
$small_picture1.onclick=function(){
	$big_picture.src="img/paint1.jpg";
}
var $small_picture2=document.getElementById("small_picture2");
$small_picture2.onclick=function(){
	$big_picture.src="img/paint2.jpg";
}
var $small_picture3=document.getElementById("small_picture3");
$small_picture3.onclick=function(){
	$big_picture.src="img/paint3.jpg";
}
var $small_picture4=document.getElementById("small_picture4");
$small_picture4.onclick=function(){
	$big_picture.src="img/paint4.jpg";
}
var $small_picture5=document.getElementById("small_picture5");
$small_picture5.onclick=function(){
	$big_picture.src="img/paint5.jpg";
}
var $small_picture6=document.getElementById("small_picture6");
$small_picture6.onclick=function(){
	$big_picture.src="img/paint6.jpg";
}
var $small_picture7=document.getElementById("small_picture7");
$small_picture7.onclick=function(){
	$big_picture.src="img/paint7.jpg";
}
var $small_picture8=document.getElementById("small_picture8");
$small_picture8.onclick=function(){
	$big_picture.src="img/paint8.jpg";
}
var $small_picture9=document.getElementById("small_picture9");
$small_picture9.onclick=function(){
	$big_picture.src="img/paint9.jpg";
}
var $small_picture10=document.getElementById("small_picture10");
$small_picture10.onclick=function(){
	$big_picture.src="img/paint10.jpg";
}
var $small_picture11=document.getElementById("small_picture11");
$small_picture11.onclick=function(){
	$big_picture.src="img/paint11.jpg";
}
var $small_picture12=document.getElementById("small_picture12");
$small_picture12.onclick=function(){
	$big_picture.src="img/paint12.jpg";
}
var $small_picture13=document.getElementById("small_picture13");
$small_picture13.onclick=function(){
	$big_picture.src="img/paint13.jpg";
}
var $small_picture14=document.getElementById("small_picture14");
$small_picture14.onclick=function(){
	$big_picture.src="img/paint14.jpg";
}
var $small_picture15=document.getElementById("small_picture15");
$small_picture15.onclick=function(){
	$big_picture.src="img/paint15.jpg";
}

var $next2=document.getElementById("next2");
$next2.onclick=function(){
	var $page2=document.getElementById("page2");
	var $page3=document.getElementById("page3");
	$page2.style.transition="top 2s ease";
	$page2.style.top="-610px";
	$page3.style.transition="top 2s ease";
	$page3.style.top="0px";
}
/*第三个page*/
var $page3_title=document.getElementById("page3_title");
$page3_title.onclick=function(){
	var $page3_picture1=document.getElementById("page3_picture1");
	var $page3_picture2=document.getElementById("page3_picture2");
	var $page3_picture3=document.getElementById("page3_picture3");
	var $page3_picture4=document.getElementById("page3_picture4");
	$page3_picture1.style.transition="top 1s ease";
	$page3_picture2.style.transition="top 1s ease";
	$page3_picture3.style.transition="top 1s ease";
	$page3_picture4.style.transition="top 1s ease";
	$page3_picture1.style.top="160px";
	$page3_picture2.style.top="370px";
	$page3_picture3.style.top="340px";
	$page3_picture4.style.top="120px";
}