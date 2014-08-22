$(document).ready(function(){
$.get("../turtorial_template.html",function(data){
$(".flash-page").html(data);

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
});
$.get("../../../header.html",function(data){
$("#header").html(data);
});
$.get("../../../footer.html",function(data){
$("#footer").html(data);
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