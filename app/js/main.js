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

  // map

	// map
	$('.b-map').each(function (index, el) {
    var adr = $(this).attr('data-address-for-map');

    function init() {
        var myGeocoder = ymaps.geocode(adr);
        myGeocoder.then(
            function (res) {
                var coord = res.geoObjects.get(0).geometry.getCoordinates();
                var myMap = new ymaps.Map(el, {
                    center: coord,
                    zoom: 16
                });
                myMap.controls.add(
                    new ymaps.control.ZoomControl()
                );
                myPlacemark = new ymaps.Placemark(coord, {
                    balloonContentHeader: adr
                });
                myMap.geoObjects.add(myPlacemark);
            },
            function (err) {
               
            }
        );
    }
    ymaps.ready(init);
});

  // input
  $(".input-block input").focus(function(){
    $(this).parent().addClass("input-block--focus");
     }).blur(function(){
      $(this).parent().removeClass("input-block--focus");
     });
     // проверка на ввод в инпут
     $('.input-block input').blur(function(){
    if($(this).val() == ''){
      $(this).parent().removeClass("input-block--focus");
    }else{
      $(this).parent().addClass("input-block--focus");
    }
     });

  // show-hide form

  $('.js-btn-show').click(function(){
    var btn_text_attr = $('.js-btn-show').attr("attr");
    console.log(btn_text_attr);
    $('.form-section .form-block').slideToggle();
    var btn_text = $('.js-btn-show').text();
    $(this).text(
      btn_text == "Закрыть форму" ? btn_text_attr : "Закрыть форму");

  });

  // input masks
  $('.js-phone-mask').inputmask("mask", {"mask": "+7 (999) 999-99-99", 'placeholder':'+7 (___) ___-__-__'});


})

