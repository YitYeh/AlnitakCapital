$(document).ready(function() {
	location.hash = '#home';
	$('#home').fadeIn();
    $(".menu-item").click(function(event) {
        event.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).find('a').attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
		
		location.hash = $(this).find('a').attr('href');
    });
});

$(window).on("hashchange", function(e) {
	// Display proper content
	$(".tab-content").not(location.hash).css("display", "none");
	$(location.hash).fadeIn();
});