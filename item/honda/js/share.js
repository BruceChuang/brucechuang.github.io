//头部搜索框
window.onload=function(){
	document.getElementById("header_search_icon").onclick();
}

document.getElementById("header_nav1_allCar").onclick=function(){
	document.getElementById("body_allCar").scrollTop="0px";
}


document.getElementById("header_search_icon").onclick=function(){
	if(document.getElementById("header_search_text").style.width=="0px"){
		document.getElementById("header_search_text").style.width="150px";
		document.getElementById("header_search_text").focus();
	}else{
		document.getElementById("header_search_text").style.width="0px";
	}
}

//回到顶部按钮
window.onscroll=function(){
	if (document.body.scrollTop>300||document.documentElement.scrollTop>300) {
		document.getElementById("backTop").style.opacity=1;
	} else{
		document.getElementById("backTop").style.opacity=0;
	}
}
document.getElementById("backTop").onclick=function(){
	document.documentElement.scrollTop = "0";
	document.body.scrollTop = "0";
}
//定位到“全部车型”
document.getElementById("header_nav1_allCar").onclick=function(){
	document.documentElement.scrollTop = "580";
	document.body.scrollTop = "580";
}
//定位到“帮您购车”
document.getElementById("header_nav1_buyCarHelp").onclick=function(){
	document.documentElement.scrollTop = "1730";
	document.body.scrollTop = "1730";
}
