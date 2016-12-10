$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#About').position().top){
    // alert('xxx');
        $('#About').css("background-image","url(images/bg_2.png)");
        $('#About').animate({
          'background-position-x': '0%',
          'background-position-y': '0%'
        }, 500, 'linear');
    }

    if($(this).scrollTop()>=$('#Products').position().top){
    // alert('xxx');
        $('#Products').css("background-image","url(images/bg_3.png)");
        $('#Products').animate({
          'background-position-x': '0%',
          'background-position-y': '0%'
        }, 500, 'linear');
    }

    if($(this).scrollTop()>=$('#Gallery').position().top){
    // alert('xxx');
        $('#Gallery').css("background-image","url(images/bg_2.png)");
        $('#Gallery').animate({
          'background-position-x': '0%',
          'background-position-y': '0%'
        }, 500, 'linear');
    }

    if($(this).scrollTop()>=$('#Contact').position().top){
    // alert('xxx');
        $('#Contact').css("background-image","url(images/bg_4.png)");
        $('#Contact').animate({
          'background-position-x': '0%',
          'background-position-y': '0%'
        }, 500, 'linear');
    }
})



$(document).ready(function() {

  


  smoothScroll.init();
   $('.tab-link').click(function(e){
     e.preventDefault();
  });

  $( ".slider_panel" ).each(function( index ) {
      initTab($(this).get(0).id);
  });

  $( ".slider_panel2" ).each(function( index ) {
      initTab2($(this).get(0).id);
  });



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
  initSlider2("2-1");
  initSlider2("2-2");
  initSlider2("2-3");
  initSlider2("2-4");
 

 initSlider3("3-1");
  initSlider3("3-2");
  initSlider3("3-3");
  initSlider3("3-4");

  initSlider4("4-1");
  initSlider4("4-2");

   initSlider2("5-1");

});

function initSlider2(slide_id){
  var ele=$('#slider'+slide_id);
  ele.slick({
 
     dots: true,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:false,
     zIndex: 9,
     appendDots: $('.dots-container'+slide_id),
     dotsClass: 'dots'
 
  });
}

function initSlider3(slide_id){
  var ele=$('#slider'+slide_id);
  ele.slick({
 
     dots: true,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:false,
     zIndex: 9,
     appendDots: $('.dots-container'+slide_id),
     dotsClass: 'dots'
 
  });
}


function initSlider4(slide_id){
  var ele=$('#slider'+slide_id);
  ele.slick({
 
     dots: false,
     speed: 300,
     autoplay:true,
     autoplaySpeed: 3000,
     arrows:true,
     zIndex: 999,
     dotsClass: 'dots',
     infinite: true,
  slidesToShow: 2,
  prevArrow: $('.left-arrow'+slide_id),
  nextArrow: $('.right-arrow'+slide_id),
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
  });
}

function initTab(div_id){
  div_id='#'+div_id;
  $(div_id+' .tab-menu  a:not(:first)').addClass('inactive');
  $(div_id+' .tab-container').hide();
  $(div_id+' .tab-container:first').show();
    
  $(div_id+' .tab-menu  a').click(function(){
      var href = $(this).attr('href');
      console.log(href);
      if($(this).parent().hasClass('about_menu')){ //this is the start of our condition 
        $(div_id+' .tab-menu td.tab-menu').removeClass('about_menu_hover').addClass('about_menu');           
        $(this).parent().removeClass('about_menu').addClass('about_menu_hover');
        console.log(div_id);
      }
      $(div_id+' .tab-container').hide();
      $(href).fadeIn('slow');
  });
}

function initTab2(div_id){
  div_id='#'+div_id;
  $(div_id+' .tab-menu  a:not(:first)').addClass('inactive');
  $(div_id+' .tab-container').hide();
  $(div_id+' .tab-container:first').show();
    
  $(div_id+' .tab-menu  a').click(function(){
      var href = $(this).attr('href');
      console.log('initTab2: '+href);
      if($(this).hasClass('where_menu')){ //this is the start of our condition 
        $(div_id+' .tab-menu a').removeClass('where_menu_hover').addClass('where_menu');           
        $(this).removeClass('where_menu').addClass('where_menu_hover');
        // console.log(div_id);
      }
      $(div_id+' .tab-container').hide();
      $(href).fadeIn('slow');
  });
}



