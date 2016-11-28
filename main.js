$(document).ready(function() {
  
  $("#slider").slick({
 
     dots: true,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:false,
     zIndex: 9,
     appendDots: $('.dots-container'),
     dotsClass: 'dots'
 
  });

  $("#slider2").slick({
 
     dots: true,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:false,
     zIndex: 9,
     appendDots: $('.dots-container2'),
     dotsClass: 'dots'
 
  });

  $("#slider3").slick({
 
     dots: true,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:false,
     zIndex: 9,
     appendDots: $('.dots-container3'),
     dotsClass: 'dots'
 
  });
 
});