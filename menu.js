$(document).ready(function(){
	$('.menu-toggle').click(function(){
        $(this).toggleClass('open');
        $('.mobile-nav').toggleClass('open');
	});
});