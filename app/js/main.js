$(document).ready(function(){

  // loader
  $(".loader").fadeOut("slow");
  
  // podmenu

  $('.header__item').click(function(){
    if ( $(this).children('.header__link').hasClass('active') ){
      $('.header-podmenu').removeClass('show');
      $('.header__link').removeClass('active');
    }else{
      $('.header-podmenu').removeClass('show');
      $('.header__link').removeClass('active');
      $(this).children('.header__link').toggleClass('active');
      $(this).children('.header-podmenu').toggleClass('show');
    }


  });
  
  $(document).mouseup(function (e){ 
    var div = $(".header__item, .header-podmenu");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      $('.header-podmenu').removeClass('show');
      $('.header__link').removeClass('active');
    }
});



  // mobile menu
  $('.nav-icon-wrap').click(function(){
    $(this).toggleClass('open');
    $(this).children('#nav-icon').toggleClass('open');
    $('body').toggleClass('overflow');
    $('.header__navigation').toggleClass('open');
    $('.header').toggleClass('menu-open');
  });

  // tabs
  $('.tabs').tabs();


})

