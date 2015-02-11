// DOM Ready
$(function() {		
    var $el, leftPos, newWidth;
    $("#magic-tabs").append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
	
    $magicLine
        .width($('.current > a').width())
        .css("left", $(".current a").position().left)
		.data("origLeft",$magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".menu").find(".menu-item").hover(function() {
        $el = $(this).find('a');
        leftPos = $el.position().left;
        newWidth = $el.width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, 	function() { 
		if($('.menu.three.column').is(":hover")) {
			return;
		}
		$magicLine.css("left",$(".current > a").position().left);
		$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $('.current > a').width()
        });  
    });
	$(".menu").on("mouseout", function(e) {
		$magicLine.css('left',$('current > a').position().left);
		$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $('current > a').width()
        });
	});		
});
