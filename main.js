$(document).ready(function() {
  tabby.init();
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

  $("#slider4").slick({
 
     dots: false,
     speed: 300,
     autoplay:false,
     autoplaySpeed: 3000,
     arrows:true,
     zIndex: 9,
     dotsClass: 'dots',
     infinite: true,
  slidesToShow: 2,
  prevArrow: $('.left-arrow'),
  nextArrow: $('.right-arrow')
 
  });
 
});