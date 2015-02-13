$(window).load(function() {
  $('.splash .container').hide();
  $('.splash .background-image').hide();

  $('.splash .background-image').fadeIn(2000);

  setTimeout(function() {
    $('.splash .container').fadeIn();
  }, 2000);
});
