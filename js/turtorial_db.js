var back_chapter,tutorial_title,publisher,src;
var srcArray = new Array();
var turtorialArray = new Array();
var tutorial_nav_next = new Array();
switch(turId){
	//数学必修一
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
	case MATH_BIXIU1_CHAPTER1_TUR1_3:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "集合运算";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/21889603/";
		srcArray = ["bixiu1_chapter1_turtorial1-1.html","bixiu1_chapter1_turtorial1-2.html","javascript:void(0);"];
		turtorialArray = ["认识集合","集合间的关系","集合运算"];
		tutorial_nav_next = ["函数篇","bixiu1_chapter1_turtorial2-1.html"];
		break;
	case MATH_BIXIU1_CHAPTER1_TUR2_1:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "认识函数";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/21889877/";
		srcArray = ["javascript:void(0);","bixiu1_chapter1_turtorial2-2.html","bixiu1_chapter1_turtorial2-3.html","bixiu1_chapter1_turtorial2-4.html"];
		turtorialArray = ["认识函数","函数图像","单调性","奇偶性"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER1_TUR2_2:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "函数图像";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22022856/";
		srcArray = ["bixiu1_chapter1_turtorial2-1.html","javascript:void(0);","bixiu1_chapter1_turtorial2-3.html","bixiu1_chapter1_turtorial2-4.html"];
		turtorialArray = ["认识函数","函数图像","单调性","奇偶性"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER1_TUR2_3:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "单调性";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22023017/";
		srcArray = ["bixiu1_chapter1_turtorial2-1.html","bixiu1_chapter1_turtorial2-2.html","javascript:void(0);","bixiu1_chapter1_turtorial2-4.html"];
		turtorialArray = ["认识函数","函数图像","单调性","奇偶性"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER1_TUR2_4:
		back_chapter = "bixiu1_chapter1.html";
		tutorial_title = "奇偶性";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22023247/";
		srcArray = ["bixiu1_chapter1_turtorial2-1.html","bixiu1_chapter1_turtorial2-2.html","bixiu1_chapter1_turtorial2-3.html","javascript:void(0);"];
		turtorialArray = ["认识函数","函数图像","单调性","奇偶性"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR1_1:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "指数运算";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22042960/";
		srcArray = ["javascript:void(0);","bixiu1_chapter2_turtorial1-2.html"];
		turtorialArray = ["指数运算","指数函数"];
		tutorial_nav_next = ["对数篇","bixiu1_chapter2_turtorial2-1.html"];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR1_2:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "指数函数";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22043390/";
		srcArray = ["bixiu1_chapter2_turtorial1-1.html","javascript:void(0);"];
		turtorialArray = ["指数运算","指数函数"];
		tutorial_nav_next = ["对数篇","bixiu1_chapter2_turtorial2-1.html"];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR2_1:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "认识对数";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22096754/";
		srcArray = ["javascript:void(0);","bixiu1_chapter2_turtorial2-2.html","bixiu1_chapter2_turtorial2-3.html","bixiu1_chapter2_turtorial2-4.html","bixiu1_chapter2_turtorial2-5.html"];
		turtorialArray = ["认识对数","对数运算","对数运算2","对数函数","对数函数2"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR2_2:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "对数运算";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22099703/";
		srcArray = ["bixiu1_chapter2_turtorial2-1.html","javascript:void(0);","bixiu1_chapter2_turtorial2-3.html","bixiu1_chapter2_turtorial2-4.html","bixiu1_chapter2_turtorial2-5.html"];
		turtorialArray = ["认识对数","对数运算","对数运算2","对数函数","对数函数2"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR2_3:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "对数运算2";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22099808/";
		srcArray = ["bixiu1_chapter2_turtorial2-1.html","bixiu1_chapter2_turtorial2-2.html","javascript:void(0);","bixiu1_chapter2_turtorial2-4.html","bixiu1_chapter2_turtorial2-5.html"];
		turtorialArray = ["认识对数","对数运算","对数运算2","对数函数","对数函数2"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR2_4:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "对数函数";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22100029/";
		srcArray = ["bixiu1_chapter2_turtorial2-1.html","bixiu1_chapter2_turtorial2-2.html","bixiu1_chapter2_turtorial2-3.html","javascript:void(0);","bixiu1_chapter2_turtorial2-5.html"];
		turtorialArray = ["认识对数","对数运算","对数运算2","对数函数","对数函数2"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_BIXIU1_CHAPTER2_TUR2_5:
		back_chapter = "bixiu1_chapter2.html";
		tutorial_title = "对数函数2";
		publisher = "罗老师";
		src = "https://www.educreations.com/lesson/embed/22100239/";
		srcArray = ["bixiu1_chapter2_turtorial2-1.html","bixiu1_chapter2_turtorial2-2.html","bixiu1_chapter2_turtorial2-3.html","bixiu1_chapter2_turtorial2-5.html","javascript:void(0);"];
		turtorialArray = ["认识对数","对数运算","对数运算2","对数函数","对数函数2"];
		tutorial_nav_next = ["",""];
		break;
	
	//数学简史部分
	case MATH_HISTORY_CHAPTER1_TUR1_1:
		back_chapter = "history_chapter1.html";
		tutorial_title = "数的起源";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=tEWQ8JM";
		srcArray = ["javascript:void(0);","history_chapter1_turtorial1-2.html","history_chapter1_turtorial1-3.html"];
		turtorialArray = ["数的起源","古巴比伦文明","古埃及文明"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER1_TUR1_2:
		back_chapter = "history_chapter1.html";
		tutorial_title = "古巴比伦文明";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=GuncFvM";
		srcArray = ["history_chapter1_turtorial1-1.html","javascript:void(0);","history_chapter1_turtorial1-3.html"];
		turtorialArray = ["数的起源","古巴比伦文明","古埃及文明"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER1_TUR1_3:
		back_chapter = "history_chapter1.html";
		tutorial_title = "古埃及文明";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=yp8RWHQ";
		srcArray = ["history_chapter1_turtorial1-1.html","history_chapter1_turtorial1-2.html","javascript:void(0);"];
		turtorialArray = ["数的起源","古巴比伦文明","古埃及文明"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_1:
		back_chapter = "history_chapter2.html";
		tutorial_title = "神秘的学派";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=dHFhnnc";
		srcArray = ["javascript:void(0);","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_2:
		back_chapter = "history_chapter2.html";
		tutorial_title = "公理舞台上起舞的逻辑";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=QmCYS5g";
		srcArray = ["history_chapter2_turtorial1-1.html","javascript:void(0);","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_3:
		back_chapter = "history_chapter2.html";
		tutorial_title = "三大几何难题";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=YVD2ExU";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","javascript:void(0);","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_4:
		back_chapter = "history_chapter2.html";
		tutorial_title = "演绎之王";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=4O0Tkbw";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","javascript:void(0);"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_5:
		back_chapter = "history_chapter2.html";
		tutorial_title = "撬动地球的人";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=p3MxZMu";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"javascript:void(0);","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_6:
		back_chapter = "history_chapter2.html";
		tutorial_title = "圆锥曲线论";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=Cje9gyu";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","javascript:void(0);","history_chapter2_turtorial1-7.html","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_7:
		back_chapter = "history_chapter2.html";
		tutorial_title = "托勒密地心说";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=aPvLoUi";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","javascript:void(0);","history_chapter2_turtorial1-8.html"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER2_TUR1_8:
		back_chapter = "history_chapter2.html";
		tutorial_title = "最后的回光";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=YgTwjKq";
		srcArray = ["history_chapter2_turtorial1-1.html","history_chapter2_turtorial1-2.html","history_chapter2_turtorial1-3.html","history_chapter2_turtorial1-4.html"
		,"history_chapter2_turtorial1-5.html","history_chapter2_turtorial1-6.html","history_chapter2_turtorial1-7.html","javascript:void(0);"];
		turtorialArray = ["神秘的学派","公理舞台上起舞的逻辑","三大几何难题","演绎之王","撬动地球的人","圆锥曲线论","托勒密地心说","最后的回光"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_1:
		back_chapter = "history_chapter3.html";
		tutorial_title = "周髀算经";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=aosP8Mq";
		srcArray = ["javascript:void(0);","history_chapter3_turtorial1-2.html","history_chapter3_turtorial1-3.html","history_chapter3_turtorial1-4.html"
			,"history_chapter3_turtorial1-5.html","history_chapter3_turtorial1-6.html","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_2:
		back_chapter = "history_chapter3.html";
		tutorial_title = "九章算术";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=FaJGUVM";
		srcArray = ["history_chapter3_turtorial1-1.html","javascript:void(0);","history_chapter3_turtorial1-3.html","history_chapter3_turtorial1-4.html"
			,"history_chapter3_turtorial1-5.html","history_chapter3_turtorial1-6.html","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_3:
		back_chapter = "history_chapter3.html";
		tutorial_title = "孙子算经";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=oRoVNxI";
		srcArray = ["history_chapter3_turtorial1-1.html","history_chapter3_turtorial1-2.html","javascript:void(0);","history_chapter3_turtorial1-4.html"
			,"history_chapter3_turtorial1-5.html","history_chapter3_turtorial1-6.html","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_4:
		back_chapter = "history_chapter3.html";
		tutorial_title = "张邱建算经";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=HihitXM";
		srcArray = ["history_chapter3_turtorial1-1.html","history_chapter3_turtorial1-2.html","history_chapter3_turtorial1-3.html","javascript:void(0);"
			,"history_chapter3_turtorial1-5.html","history_chapter3_turtorial1-6.html","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_5:
		back_chapter = "history_chapter3.html";
		tutorial_title = "宋元四大家";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=1lR0YtM";
		srcArray = ["history_chapter3_turtorial1-1.html","history_chapter3_turtorial1-2.html","history_chapter3_turtorial1-3.html","history_chapter3_turtorial1-4.html"
			,"javascript:void(0);","history_chapter3_turtorial1-6.html","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_6:
		back_chapter = "history_chapter3.html";
		tutorial_title = "四大家2--秦九韶算法";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=HV1a3uK";
		srcArray = ["history_chapter3_turtorial1-1.html","history_chapter3_turtorial1-2.html","history_chapter3_turtorial1-3.html","history_chapter3_turtorial1-4.html"
			,"history_chapter3_turtorial1-5.html","javascript:void(0);","history_chapter3_turtorial1-7.html"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER3_TUR1_7:
		back_chapter = "history_chapter3.html";
		tutorial_title = "宋元四大家3";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=soEsR8q";
		srcArray = ["history_chapter3_turtorial1-1.html","history_chapter3_turtorial1-2.html","history_chapter3_turtorial1-3.html","history_chapter3_turtorial1-4.html"
			,"history_chapter3_turtorial1-5.html","history_chapter3_turtorial1-6.html","javascript:void(0);"];
		turtorialArray = ["周髀算经","九章算术","孙子算经","张邱建算经","宋元四大家","四大家2--秦九韶算法","宋元四大家3"];
		tutorial_nav_next = ["",""];
		break;
	case MATH_HISTORY_CHAPTER4_TUR1_1:
		back_chapter = "history_chapter4.html";
		tutorial_title = "黎明前的黑夜";
		publisher = "罗老师";
		src = "https://www.showme.com/sma/embed/?s=soEsR8q";
		srcArray = ["javascript:void(0);","history_chapter4_turtorial1-2.html","history_chapter4_turtorial1-3.html","history_chapter4_turtorial1-4.html"
			,"history_chapter4_turtorial1-5.html","history_chapter4_turtorial1-6.html"];
		turtorialArray = ["黎明前的黑夜","文艺复兴","三次方程的求解与符号体系的建立","透视学与航海图","三角学和天文学","开普勒与行星运动三大定律"];
		tutorial_nav_next = ["",""];
		break;
	
	default:
		break;
}