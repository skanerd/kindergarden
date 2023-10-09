// $(document).ready(function() {
	
// 	$("#mSearch").css("display", "none");
	
// 	// 181119 (메뉴일괄쳘치기 추가)
// 	// js_gnb ();
	
// 	//webNavi
// 	$('#gnb li ul').hide(); 
// 	$('.gnbsubline').hide(); 
	
// 	$('#gnb li').mouseover(function(){
		
// 		$(this).addClass('on'); 
// 		$(this).find('ul.box').show(); 
// 		$('.gnbsubline').show();
// 	});
// 	$('#gnb li').mouseout(function(){	
	
// 		$(this).removeClass('on'); 	
// 		$('#gnb li ul').hide(); 
// 		$('.gnbsubline').hide();
// 	});	
	
// 	//웹접근성 추가
// 	$('#gnb > li > a').focus(function(){

		
// 		$('#gnb > li').removeClass('on');
// 		$('#gnb > li').find('ul.box').hide();

// 		$(this).parent().addClass('on'); 
// 		$(this).parent().find('ul.box').show(); 
// 		$('.gnbsubline').show();
// 	});
	
// 	function n_indexOf(str, searchvalue, nth) {
// 		var times = 0, num = null;

// 		while(times < nth && num !== -1) {
// 			num = str.indexOf(searchvalue, num+1);
// 			times++;
// 		}

// 		return num;
// 	}
// })