$(document).ready(function() {
	$('#tab-1').fadeIn();
    $(".menu-item").click(function(event) {
        event.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).find('a').attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});