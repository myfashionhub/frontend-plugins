function Carousel() {
  var that = this;

  var carousel = $('<div>').addClass('carousel');
  this.carousel = carousel;

  this.init = function(configSlides, container, interval) {
    var slides = that.currentSlides(configSlides);
    that.create(slides, container);
    that.play(interval);
  };

  this.create = function(slides, container) {
    for (var i = 0; i < slides.length; i++) {
      var slideImage = $('<img>').attr('data', slides[i].src).attr('src', '');
      var slideUrl = $('<a>').attr('href', slides[i].url).attr('target', '_blank').addClass('slide');
      slideUrl.wrapInner(slideImage);
      $(carousel).append(slideUrl);
    }

    var firstSlide = carousel.children().first();
    var firstSlideImage = firstSlide.find('img');
    firstSlideImage.attr('src', firstSlideImage.attr('data'));
    firstSlide.addClass('current');

    // Create new carousel & replace existing one
    $(container).html(carousel);
  };

  this.currentSlides = function(slides) {
    var currentSlides = [];
    for (var i = 0; i < slides.length; i++) {
      var begin = slides[i].begin;
      var end = slides[i].end;
      var beginDate = new Date(begin[0], begin[1]-1, begin[2]);
      var endDate = new Date(end[0], end[1]-1, end[2]);          var today = new Date();

      if (beginDate <= today && today <= endDate) {
          currentSlides.push(slides[i]);
      }
    }

    return currentSlides;
  };

  this.play = function(interval) {
    setInterval(function() {
      var slides = that.carousel.children();
      var currentSlide = $('.slide.current');
      var currentIdx = slides.index(currentSlide);
      var nextIdx = currentIdx + 1;

      if (nextIdx === slides.length) {
          nextIdx = 0;
      }

      currentSlide.removeClass('current').toggle('slide', 'left');          var nextSlide = $(slides[nextIdx]);
      var nextSlideImage = nextSlide.find('img');

      if (nextSlideImage.attr('src') === '') {
        nextSlideImage.attr('src', nextSlideImage.attr('data'))
      }

      nextSlide.addClass('current').fadeIn('slow');
    }, interval);
  };
}





