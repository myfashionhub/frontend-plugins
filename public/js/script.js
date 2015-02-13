$(function() {
  $('nav.global a').click(function(e) {
    var divName = $(e.target).attr('href').replace('#', '');
    toggleNav(divName);
  });

  // Load page content
  $('.splash').load('splash.html');
  $('.slideshow').load('carousel.html');
  $('.widget').load('widget.html');
  $('.lazyload').load('lazyload.html');
  $('.pagination').load('pagination.html');

  // Slide generator Backbone
  var slides = new SlideCollection();
  slideAppInit(slides);
});
