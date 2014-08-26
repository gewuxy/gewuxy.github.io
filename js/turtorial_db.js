var back_chapter,tutorial_title,publisher,src;
var srcArray = new Array();
var turtorialArray = new Array();
var tutorial_nav_next = new Array();
switch(turId){
	case MATH_BIXIU1_CHAPTER1_TUR1_1:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "认识集合";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/21889272/";
		srcArray = ["javascript:void(0);","bixiu1_chapter1_turtorial1-2.html","bixiu1_chapter1_turtorial1-3.html"];
		turtorialArray = ["认识集合","集合间的关系","集合运算"];
		tutorial_nav_next = ["函数篇","bixiu1_chapter1_turtorial2-1.html"];
		break;
	case MATH_BIXIU1_CHAPTER1_TUR1_2:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "集合间的关系";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/21889444/";
		srcArray = ["bixiu1_chapter1_turtorial1-1.html","javascript:void(0);","bixiu1_chapter1_turtorial1-3.html"];
		turtorialArray = ["认识集合","集合间的关系","集合运算"];
		tutorial_nav_next = ["函数篇","bixiu1_chapter1_turtorial2-1.html"];
		break;
	default:
		break;
}