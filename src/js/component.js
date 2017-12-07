$(document).ready(function () {
  $('.about-link').click(function () {
    var destination = $(".about").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $('.speaker-link').click(function () {
    var destination = $(".speaker").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.programs-link').click(function () {
    var destination = $(".programs").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.formula-link').click(function () {
    var destination = $(".formula").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.cases-link').click(function () {
    var destination = $(".cases").offset().top - 50;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $('.item-title').hover(function () {
    $('#programs-content .item').removeClass('active');
    $('#programs-content .item h4').removeClass('animate');
    $('.item-title').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).data('id')).addClass('active');
    setTimeout(function () {
      $('#programs-content .item h4').addClass('animate');
    }, 300)
  })


  $('.cases-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 1
      }
    }
  })

  if ($(window).width() < 736) {

    $('.about-carousel').addClass('owl-carousel owl-theme')
    $('.about-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: false,
      responsive: {
        0: {
          items: 1
        }
      }
    })

  } else {
    $('.about-carousel').removeClass('owl-carousel owl-theme')
  }

  $('.cases-carousel .owl-dots .owl-dot span').each(function (index) {
    $(this).text('0' + (index + 1));
  });
  $('.reg input').focus(function () {
    $('.reg label').removeClass('active');
    $(this).parent().addClass('active');
  });
  
  if ($(window).width() < 1200) {
    $('header .nav-list li').click(function(){
      $(this).parents('nav').removeClass('open');
      $(this).parent().hide();
      $('.nav-btn').removeClass('open');
    })
  }

  $('.nav-btn').click(function () {
    $('nav').toggleClass('open');
    $(this).toggleClass('open');
    $('.nav-list').slideToggle();
  });
  
  
    $('.modal-btn').click(function (e) {
    e.preventDefault;
      var modalTitle = $(this).text();
    $('#' + $(this).data('modal')+' h4').text(modalTitle);
    $('#' + $(this).data('modal')).show('400');
    $('.overlay').show('400');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 400);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('400');
    $('.overlay').hide('400');

    $('.modal').animate({
      opacity: 0,
    }, 400);
  });
  
  $('.more-btn').click(function(){
    $(this).parent().find('.more').slideToggle('200');
  })
  
});