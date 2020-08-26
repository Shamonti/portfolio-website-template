  	 /*
	  |--------------------------------------------------------------------------
	  | Smooth Scroll
	  |--------------------------------------------------------------------------
	  |
	  |
	  |
	  */
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600
  });
  
  $(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  	 /*
	  |--------------------------------------------------------------------------
	  | Fix top
	  |--------------------------------------------------------------------------
	  |
	  |
	  |
	  */

   $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 50){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0,0,0,1)');
    }
  });
