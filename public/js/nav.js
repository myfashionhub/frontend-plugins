$(function() {
  $('.content').children().hide();
  displayContent();

  $('nav a').click(function(e) {
      var divName = $(e.target).attr('href').replace('#', '');
      toggleNav(divName);
  });

  // Load page content
  $('.carousel-anchor').load('carousel.html');
  $('.widget-anchor').load('widget.html');
});

function toggleNav(divName) {
    $('nav a.current').removeClass('current');
    var currentTab = $('nav a[href="#'+divName+'"]');
    currentTab.addClass('current');

    $('.content').find('.current').removeClass('current').hide();
    $('.content').find('div.'+divName).addClass('current').fadeIn();
}

function displayContent() {
    var currentHash = window.location.hash;
    if (currentHash === '') {
       $('nav a').first().addClass('current');
        $('.content').children().first().addClass('current').fadeIn();
    } else {
        var divName = currentHash.replace('#', '');
        toggleNav(divName);
    }

}
