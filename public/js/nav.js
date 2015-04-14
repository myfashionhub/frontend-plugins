function toggleNav(divName) {
  $('nav a.current').removeClass('current');
  $('nav a[href="#'+divName+'"]').addClass('current');

  $('.wrapper').find('.current').removeClass('current');
  $('.wrapper').find('div.'+divName).addClass('current');
}

function displayContent() {
  var currentHash = window.location.hash;

  if (currentHash === '') {
    window.location.href = 'splash.html';
  } else {
    var divName = currentHash.replace('#', '');
    toggleNav(divName)
  }
}
