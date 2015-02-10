$(window).load(function() {
  $('.splash .container').hide();

  $('.splash').animate({
    backgroundColor: "#000",
    height: 600
  }, 3000);

  setTimeout(function() {
    $('.splash .container').fadeIn();
  }, 2000);

  $('.splash nav a').click(displayContent);
});
