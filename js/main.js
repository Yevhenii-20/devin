$( document ).ready(function() {
    $( ".burger_menu" ).on('click', function() {
	  $( ".switch_menu" ).toggleClass("active");
	  $( ".header_navigation_mob" ).toggleClass("active_menu");
	  
	});
});