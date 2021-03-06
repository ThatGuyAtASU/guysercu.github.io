// jQuery for page scrolling feature - requires jQuery Easing plugin
var flitermodal =  document.getElementById('flitermodal');
var closebtn =  document.getElementsByClassName('fliter-modal-close')[0];
var flitercontent =  document.getElementsByClassName('fliter-modal-content');
var emailbtn =  document.getElementById('emailicon');


emailbtn.onclick = function(){
	flitermodal.style.display="block"
}


closebtn.onclick = function(){
    if(flitermodal.style.display="block"){
        flitermodal.style.display="none"
    }else{
        console.log('somethings wrong');
    }
}

window.onclick = function(event) {
    if (event.target == flitermodal) {
        flitermodal.style.display = "none";
    }
}



$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Reveal CSS Animations
new WOW().init();

jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/

// Back to Top
	var scrollDiv = document.createElement("div");
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");    
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() != 0) {
			jQuery("#toTop").fadeIn();
		} else {
			jQuery("#toTop").fadeOut();
		}
	});
	jQuery("#toTop").click(function () {
		jQuery("body,html").animate({
			scrollTop: 0
		},
		800);
	});
  });