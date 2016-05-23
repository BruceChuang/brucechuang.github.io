/*function toggleimg(name){
	var name = document.getElementById(name);
	var texts = document.querySelectorAll(".text");
    var text_titles = document.getElementsByClassName("text_title");
	name.onclick=function(e){
		e.preventDefault();
		texts.style.display="none";
		text_titles.style.display="none";
		document.getElementById(name+"Text").style.display="block";
		document.getElementById(name+"Title").classList.remove("block");
	}
}



var bg1 = document.getElementById("bg1");
bg1.onclick=function(){
	var $body = document.getElementsByTagName("body")[0];
	$body.style.backgroundColor="blue";
}*/
//新闻模块
var title11=document.getElementById("title1");
var text11=document.getElementById("text1");
var title22=document.getElementById("title2");
var text22=document.getElementById("text2");
var title33=document.getElementById("title3");
var text33=document.getElementById("text3");
var title44=document.getElementById("title4");
var text44=document.getElementById("text4");
title11.style.visibility="visible";
text11.style.visibility="visible";
title22.style.visibility="hidden";
text22.style.visibility="hidden";
title33.style.visibility="hidden";
text33.style.visibility="hidden";
title44.style.visibility="hidden";
text44.style.visibility="hidden";

var new11=document.getElementById("new1");
new11.onclick=function(){
	title11.style.visibility="visible";
	text11.style.visibility="visible";
	title22.style.visibility="hidden";
	text22.style.visibility="hidden";
	title33.style.visibility="hidden";
	text33.style.visibility="hidden";
	title44.style.visibility="hidden";
	text44.style.visibility="hidden";
}
var new22=document.getElementById("new2");
new22.onclick=function(){
	title11.style.visibility="hidden";
	text11.style.visibility="hidden";
	title22.style.visibility="visible";
	text22.style.visibility="visible";
	title33.style.visibility="hidden";
	text33.style.visibility="hidden";
	title44.style.visibility="hidden";
	text44.style.visibility="hidden";
}
var new33=document.getElementById("new3");
new33.onclick=function(){
	title11.style.visibility="hidden";
	text11.style.visibility="hidden";
	title22.style.visibility="hidden";
	text22.style.visibility="hidden";
	title33.style.visibility="visible";
	text33.style.visibility="visible";
	title44.style.visibility="hidden";
	text44.style.visibility="hidden";
}
var new44=document.getElementById("new4");
new44.onclick=function(){
	title11.style.visibility="hidden";
	text11.style.visibility="hidden";
	title22.style.visibility="hidden";
	text22.style.visibility="hidden";
	title33.style.visibility="hidden";
	text33.style.visibility="hidden";
	title44.style.visibility="visible";
	text44.style.visibility="visible";
}

//背景模块
var $bg1=document.getElementById("bg1");
var $bg2=document.getElementById("bg2");
var $bg3=document.getElementById("bg3");
var $bg4=document.getElementById("bg4");

$bg1.onclick=function(){
	var $body = document.getElementsByTagName("body")[0];
	$body.style.backgroundColor="greenyellow";
}
$bg2.onclick=function(){
	var $body = document.getElementsByTagName("body")[0];
	$body.style.backgroundColor="rgb(253,251,186)";
}
$bg3.onclick=function(){
	var $body = document.getElementsByTagName("body")[0];
	$body.style.backgroundColor="rgba(0,0,0,0.8)";
}
$bg4.onclick=function(){
	var $body = document.getElementsByTagName("body")[0];
	$body.style.backgroundColor="white";
}
