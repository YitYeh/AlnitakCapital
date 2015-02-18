// DOM Ready
$(function() {		
    var $el, leftPos, newWidth;
    $("#magic-tabs").append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
	
    $magicLine
        .width($('.current > a').width())
        .css("left", $(".current a").position().left)
		.data("origLeft",$magicLine.position().left)
        
    $(".menu").find(".menu-item").hover(function() {
        $el = $(this).find('a');
        leftPos = $el.position().left;
        newWidth = $el.width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, 	function() { 
		if($('.nav-wrap').is(":hover")) {
			return;
		}
		$magicLine.css("left",$(".current > a").position().left);
		//$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
            width: $('.current > a').width()
        },50);  
    });
	$('.menu').mouseout(function(e) {
		$magicLine.css('left',$('current > a').position().left);
		$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
            width: $('current > a').width()
        },50);
	});
});
