$(document).on("scroll", function(){
	if
  	($(document).scrollTop() > 100){
			$("header").addClass("shrink");
				} else {
			$("header").removeClass("shrink");
		}

		$('.grid-container.overlay').on("touchstart", function (e) {
			'use strict'; //satisfy code inspectors
			var link = $(this); //preselect the link
			if (link.hasClass('hover')) {
			    return true;
			 } else {
			   link.addClass('hover');
			   $('.grid-container.overlay').not(this).removeClass('hover');
			   e.preventDefault();
			   return false; //extra, and to make sure the function has consistent return points
			  }
			});
});



