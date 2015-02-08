// DOM Ready
$(function() {		
    var $el, leftPos, newWidth;
    $("#magic-tabs").append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
	
    $magicLine
        .width($magicLine.parent().width() * .31)
        .css("left", $(".current").position().left)
		.data("origLeft",$magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".menu").find(".menu-item").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width() *.31;
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() { 
		if($('.menu.three.column').is(":hover")) {
			return;
		}
		$magicLine.css("left",$(".current").position().left);
		$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });  
    });
});
$(window).on("hashchange", function(e) {
	setTimeout(function() {
		$magicLine.css("left",$('.current').position().left);
		$magicLine.data("origLeft",$magicLine.position().left);
		$magicLine.stop().animate({
			left: $magicLine.data("origLeft"),
			width: $magicLine.data("origWidth")
		});
	},800);
});