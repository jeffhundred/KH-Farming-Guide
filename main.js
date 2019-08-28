$(document).ready(function(){

	let navOpen;

	$(".nav-items").addClass("highlight");
	$(".main-recipes").addClass("hide");

	let navOffset = $(".navigation").offset().top;

	$(window).scroll(function(){
		let currentPosition = $(window).scrollTop();
		if(currentPosition >= navOffset && screen.width <= 768){
			$(".wrapper").addClass("wrapper-offset");
			$(".navigation").addClass("fixed");
		}else{
			$(".wrapper").removeClass("wrapper-offset");
			$(".navigation").removeClass("fixed");
		}
	});

	$(".nav-recipes").click(function(){
		$(".nav-items").removeClass("highlight");
		$(".main-items").addClass("hide");
		$(".nav-recipes").addClass("highlight");
		$(".main-recipes").removeClass("hide");
		$("html, body").animate({scrollTop: 0}, 100);
	});

	$(".nav-items").click(function(){
		$(".nav-recipes").removeClass("highlight");
		$(".main-recipes").addClass("hide");
		$(".nav-items").addClass("highlight");
		$(".main-items").removeClass("hide");
		$("html, body").animate({scrollTop: 0}, 100);
	});

	$(".wrapper nav").click(function(){
		let currentNav = this.className;
		if(currentNav != navOpen){
			$(".wrapper div").slideUp();
		}
		navOpen = currentNav;
		let currentDiv = "."+currentNav+"-description";
		$(currentDiv).slideToggle();
	});
	
	$(".footer-icon").click(function(){
		$("html, body").animate({scrollTop: 0}, 300);
	});
});