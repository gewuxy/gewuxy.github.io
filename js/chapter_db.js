$(document).ready(function(){
$.ajax({
  url: "../chapter_template.html",
  async: false,
  success: function(data){
	$(".book").html(data);
$('a.subject-link').attr("href",back_book);
$("h2.chapter-title").text(chapter_title);
$(".subject-description").text(subject_description);
var n = 0;
for(var i = 0;i< bookArray.length;i++){
	if(i < bookArray.length-1){
		$("#tutorial-container").clone(true).appendTo("div.content-lists");
	}
	for(var j = 0;j< bookArray[i].length;j++){
		if(j < bookArray[i].length-1){
			$("#section-item-link").clone(true).appendTo($("ul.section-container").eq(i));
		}
		$("span.section-item-title").eq(n).text(bookArray[i][j]);
		$("ul a").eq(n).attr("href",srcArray[i][j]);
		n++;
	}
	$(".tutorial-overview h3").eq(i).text(tutorial_overview[i]);
	$(".tutorial-overview .tutorial-description").eq(i).text(tutorial_description[i]);
	
}
if($(".content-lists").height()<$(window).height()-100){
$(".content-lists").height($(window).height()-100);
};
$(window).resize(function(){
  if($(".content-lists").height()<$(window).height()-100){
    $(".content-lists").height($(window).height()-100);
  }
});
  },

});
$.get("../../../header.html",function(data){
$("#header").html(data);
});
$.get("../../../footer.html",function(data){
$("#footer").html(data);
});
});