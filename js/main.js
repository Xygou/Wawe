$(function(){

  $(".menu a, .footer__logo, .header__icon, .header__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  
  $('.blog-slider__inner').slick({
    arrows:false,
    dots: true
  });

  $('.menu__btn, .menu a').on('click',function(){
    $('.menu').toggleClass('menu--active')
    $('.menu__btn').toggleClass('menu__btn--active')  
    $('body').toggleClass('body--hide-scroll')  
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.header__inner').addClass('header__inner--scrolled');
    }
    else {
        $('.header__inner').removeClass('header__inner--scrolled');
    }
  });


  var mixer = mixitup('.gallery__content');
});