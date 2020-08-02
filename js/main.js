
$(document).ready(function() {

      //Start Mean Menue popup
      $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
      });
      //Mean Menue popup End 
	  
	       //Sticky Menue
         $(window).on('scroll',function() {    
          var scroll = $(window).scrollTop();
          if (scroll < 5) {
           $(".sticky").removeClass("sticky-header");
          }else{
           $(".sticky").addClass("sticky-header");
          }
         });
         
         // Start slider 
        $('.slider-active').slick({
          infinite: true,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:true,
          autoplay:true
        });

        //  Pre_loader
        $(window).load(function() {
          $("#loading").fadeOut(500);
        });

        // Scrollup
        $.scrollUp({
          scrollName: 'scrollUp', // Element ID
          topDistance: '300', // Distance from top before showing element (px)
          topSpeed: 300, // Speed back to top (ms)
          animation: 'fade', // Fade, slide, none
          animationInSpeed: 200, // Animation in speed (ms)
          animationOutSpeed: 200, // Animation out speed (ms)
          scrollText: '<img src="img/scroll.png">', // Text for element
          activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
      
       

  });