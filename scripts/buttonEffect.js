// DOM Ready
$(function() {		
	
    var $el, leftPos, newWidth;
    $("#magic-tabs").append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
	
    $magicLine.stop().animate({
		left: $('.current > a').position().left,
        width: $('.current > a').width()
	});
        
    $(".menu").find(".menu-item").hover(function() {
        $el = $(this).find('a');
        leftPos = $el.position().left;
        newWidth = $el.width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, 	function() { 
		if($('.menu').is(":hover")) {
			return;
		}
		$magicLine.stop().animate({
			left: $('.current > a').position().left,
            width: $('.current > a').width()
        },300);  
    });
	$('.menu').mouseleave(function(e) {
		$magicLine.stop().animate({
			left: $('.current > a').position().left,
            width: $('.current > a').width()
        },300);
	});
});
