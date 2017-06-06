$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  var jumpIn  = $('header').height();
  var jumpOut = $('#docs-cta').offset().top - wScroll - $(this).height();
  if (wScroll >= jumpIn && jumpOut > 0) {
    $('.gist.js-activated').addClass('visible')
  } else {
    $('.gist.js-activated').removeClass('visible')
  }
})

$('nav .hamburger').click(function () {
  $('.js-toggled').toggleClass('visible')
})

$(document).ready(function () {
  $.getJSON("https://unpkg.com/waffle-grid?json", function (data) {
    var size = Math.round(data.size / 1000);
    $(".kb").text(size);
  });
});
