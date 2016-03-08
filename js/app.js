//window.scrollY

$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    console.log('add Shrink');
    $('.web.header').addClass('shrink');
  } else {
    $('.web.header').removeClass('shrink');
    console.log('remove Shrink');
  }
});