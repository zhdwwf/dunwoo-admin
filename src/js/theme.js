
import '../scss/_theme.scss';


/**
 * --------------------------------------------------------------------------
 * Dunwoo Admin (v1.0.0): theme.js
 * Licensed under MIT (https://github.com/dwosc/dunwoo-admin/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

$(function() {
	$(".menubar-toggle").on("click", function() {
	    $(".menubar").toggleClass("toggled").one("transitionend", function() {
	        setTimeout(function() {
	            window.dispatchEvent(new Event("resize"))
	        }, 100)
	    })
	});

  // 
  var $backToTop = $(".back-to-top");

  $backToTop.on("click", function(e) {
      e.preventDefault ()
      $('body, html').animate({
        scrollTop: 0
      }, 600);
  });

  $(window).scroll (function () {
    if ($(this).scrollTop () > 150) {
      $backToTop.addClass('show');
    } else {
      $backToTop.removeClass('show');
    }
  });

});	


