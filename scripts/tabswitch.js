$(document).ready(function() {
	location.hash = '#home';
	$('#home').fadeIn(600);
    $(".menu-item").click(function(event) {
        event.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).find('a').attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).show("puff");
		
		location.hash = $(this).find('a').attr('href');
		window.scrollTo(0, 0);
    });
});

$(window).on("hashchange", function(e) {
	// Display proper content
	$(".tab-content").not(location.hash).css("display", "none");
	$(location.hash).show("puff");
	$(".menu-item").each(function() {
		if ($(this).find('a').attr("href") == location.hash) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
	window.scrollTo(0,0);
	var $magicLine = $('#magic-line');
	$magicLine.css("left",$('.current > a').position().left);
	$magicLine.data("origLeft",$magicLine.position().left);
	$magicLine.stop().animate({	
		left: $magicLine.data("origLeft"),
		width: $('.current > a').width()
	});
});