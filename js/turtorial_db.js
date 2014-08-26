
$(document).ready(function(){
$.get("../turtorial_template.html",function(data){
$(".flash-page").html(data);
$('a#section-title').attr("href",back_chapter);
$('.tutorial-title').text(tutorial_title);
$('.publisher .teacher').text(publisher);
$('iframe').attr("src",src);
for(var i = 0;i< turtorialArray.length;i++){
  if(i < turtorialArray.length-1){
	$("#tutorial-tab-link").clone(true).appendTo("ul.tutorial-nav-content-list");
  }
  $("ul>a>li>span").eq(i).text(turtorialArray[i]);
  $("ul.tutorial-nav-content-list a").eq(i).attr("href",srcArray[i]);
}
for(var i = 0;i< turtorialArray.length;i++){
  if(turtorialArray[i] == tutorial_title){
	$('ul>a>li').eq(i).addClass("active");
  }
}
if(tutorial_nav_next[0] != ""){
	$('.tutorial-nav-next-label').text(tutorial_nav_next[0]);
	$('.tutorial-nav-next a').attr("href",tutorial_nav_next[1]);
}else{
	$('.tutorial-nav-next').hide();
}
//jiathis分享开始

jQuery.ajax({
      url: "http://v3.jiathis.com/code_mini/jia.js",
	  async: false,
      dataType: "script"
}).done(function() {
  return;
});

//jiathis分享结束
if($(".tutorial-wrap").width()-250>500){
$(".flash-box").width($(".tutorial-wrap").width()-250);
}else{
$(".flash-box").width("500");
}

$(".hidelist").click(function(){
  if(!$(".tutorial-nav").is(":hidden")){
	$(".tutorial-nav").hide();
	$(".flash-box").width("100%");
	$(this).text("显示列表");
  }else{
    $(".tutorial-nav").show();
	$(".flash-box").width($(".tutorial-wrap").width()-250);
	$(this).text("收起列表");
  }
});
$.get("/footer.html",function(data){
$("#footer").html(data);
});
$('.ds-thread').attr("data-title",tutorial_title);
$('.ds-thread').attr("data-thread-key",tutorial_title);
$('.ds-thread').attr("data-url",window.location.href);
});
$.get("../../../header.html",function(data){
$("#header").html(data);
});

$(window).resize(function(){
if($(".tutorial-wrap").width()-250>500){
  if(!$(".tutorial-nav").is(":hidden")){
	$(".flash-box").width($(".tutorial-wrap").width()-250);
  }else{
    $(".flash-box").width("100%");
  }
}else{
$(".flash-box").width("500");
}
}); 
});
var jiathis_config={
	siteNum:6,
	sm:"tsina,qzone,weixin,renren,cqq,douban",
	summary:"我看到了一个很好的视频课，分享给大家【"+tutorial_title+"】"+"——来自格物学院（www.gewuxy.com）",
	title:" ",
	boldNum:0,
	appkey:{
		"tsina":"weibo",
		"tqq":"tencent-weibo"
	},
	shortUrl:false,
	hideMore:true
};