jQuery(document).ready(function() {
  setTimeout(function() {
  // Sample carousel
  var carousel = new Carousel();
  carousel.init(slideConfig, '.slideshow-container', 4000);
  }, 300);

  // Refresh twice a day
  setInterval(function() {
      var carousel = new Carousel();
      carousel.init(slideConfig, '.slideshow-container', 4000);
  }, 43200000);

});


// date config format [ year, month, day ]

var slideConfig = [
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/AdamLevine_HomePageSlider_1aa.png',
      url: '//adamlevine.waywire.com',
      begin: [2014, 11, 5],
      end: [2020, 11, 7]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/HomePageSliderVinoVideo.jpg',
      url: '//vinovideo.waywire.com',
      begin: [2014, 11, 5],
      end: [2020, 11, 7]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/JustinBieber_HomePageSlider_1b.png',
      url: '//justinbieber.waywire.com',
      begin: [2014, 11, 5],
      end: [2020, 11, 7]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/HomePageSlider-Miley.jpg',
      url: '//mileycyrus.waywire.com',
      begin: [2014, 11, 7],
      end: [2020, 11, 9]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/HomePageSlider-KettyPerry_1.jpg',
      url: '//katyperry.waywire.com',
      begin: [2014, 11, 7],
      end: [2020, 11, 9]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/CONAN-OBRIAN_HomePageSlider-_1.jpg',
      url: '//conan.waywire.com',
      begin: [2014, 11, 7],
      end: [2020, 11, 9]
    },
    { src: 'http://waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/drwho.jpg',
      url: '//drwho.waywire.com',
      begin: [2014, 11, 1],
      end: [2020, 11, 3]
    }
];
