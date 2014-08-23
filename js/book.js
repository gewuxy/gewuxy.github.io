$(document).ready(function(){
$.ajax({
  url: "../book_template.html",
  async: false,
  success: function(data){
	$(".book").html(data);
$(".subject-title").text(subject_title);
$(".subject-description").text(subject_description);

for(var i = 0;i< bookArray.length;i++){
  if(i < bookArray.length-1){
	$("#section-outter").clone(true).appendTo("ul");
  }
  $("ul div a li #section-text").eq(i).text(bookArray[i]);
  $("ul #section-outter a").eq(i).attr("href",srcArray[i]);
}
if($(".right").height()<$(window).height()-100){
$(".right").height($(window).height()-100);
};
$(window).resize(function(){
  if($(".right").height()<$(window).height()-100){
    $(".right").height($(window).height()-100);
  }
});
  },

});
/*$.get("../book_template.html",function(data){
$(".book").html(data);
$(".subject-title").text(subject_title);
$(".subject-description").text(subject_description);
if($(".right").height()<$(window).height()-100){
$(".right").height($(window).height()-100);
};
for(var i = 0;i< bookArray.length;i++){
  if(i < bookArray.length-1){
	$("#section-outter").clone(true).appendTo("ul");
  }
  $("ul div a li #section-text").eq(i).text(bookArray[i]);
  $("ul #section-outter a").eq(i).attr("href",srcArray[i]);
}

$(window).resize(function(){
  if($(".right").height()<$(window).height()-100){
    $(".right").height($(window).height()-100);
  }
});
});*/
$.get("../../../header.html",function(data){
$("#header").html(data);
});
$.get("../../../footer.html",function(data){
$("#footer").html(data);
});
});