$(function() {
  $('.wrapper').children().hide();
  displayContent();

  $('nav a').click(function(e) {
      var divName = $(e.target).attr('href').replace('#', '');
      toggleNav(divName);
  });

  // Load page content
  $('.splash').load('splash.html');
  $('.slideshow').load('carousel.html');
  $('.widget').load('widget.html');
});

function toggleNav(divName) {
    $('nav a.current').removeClass('current');
    var currentTab = $('nav a[href="#'+divName+'"]');
    currentTab.addClass('current');

    $('.wrapper').find('.current').removeClass('current').hide();
    $('.wrapper').find('div.'+divName).addClass('current').fadeIn();
}

function displayContent() {
  var currentHash = window.location.hash;

  if (currentHash === '') {
    $('nav a').first().addClass('current');
    $('.wrapper').children().first().addClass('current').fadeIn();
  } else {
    var divName = currentHash.replace('#', '');
    toggleNav(divName);
  }
}
