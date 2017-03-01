$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  var jumpIn  = $('header').height();
  var jumpOut = $('#docs-cta').offset().top - wScroll - $(this).height();
  if (wScroll >= jumpIn && jumpOut > 0) {
    $('.js-activated').addClass('visible')
    // console.log('visible')
  } else {
    $('.js-activated').removeClass('visible')
    // console.log('invisible2')
  }
})

$('nav .hamburger').click(function () {
  $('.js-toggled').toggleClass('visible')
})
