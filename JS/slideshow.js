$(document).ready(function() {

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
});

//for canvas

			
	// window.onscroll = function() {scroll1()};
	// 	function scroll1(){
	// 	var winScroll=document.body.scrollTop || document.documentElement.scrollTop;
	// 	var height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 	var scrolled = (winScroll / height) * 100;
	// 	var ctx=document.getElementById("myCanvas").getContext('2d');
	// 	ctx.fillStyle="red";
	// 	ctx.fillRect(0, 0, scrolled, 100);
	// }




	// window.onscrollup = function() {scrollTop()};
	// 	function scroll(){
	// 	var winScroll=document.body.scrollTop || document.documentElement.scrollTop;
	// 	var height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 	var scrolled = (winScroll / height) * 100;
	// 	var ctx=document.getElementById("myCanvas").getContext('2d');
	// 	ctx.fillStyle="white";
	// 	ctx.fillRect(100, 100, scrolled, 100);
	// }
// image slider
