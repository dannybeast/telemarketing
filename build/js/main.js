$(document).ready(function(){

  // loader
  $(".loader").fadeOut("slow");
  
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

