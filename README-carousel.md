## About
This light-weight carousel (2K) allows you to easily create a home page slider that run on a schedule. Customize the dates you want each slide to play as well as the speed of the carousel. It optimizes load time by only requesting the first image on initial page load, instead of downloading all the images at once.

## Implement the carousel

### Source code
Download the <a href="http://carousel-schedule.herokuapp.com/js/fullCarousel.js">carousel source code</a>.
            
### Require the scripts
The carousel is dependent on jQuery and jQuery UI.    
```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script>
<script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="/path/to/fullCarousel.js"></script>
```

### Input slideConfig 
In your own code, input your customized slideConfig. The format for begin and end date is [yyyy, mm, dd]:
```javascript
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
        }
    ];    
```

### Initialize the carousel
carousel.init() takes three parameters: the slide config array, CSS selector of container div for the carousel and the interval at which the slides play.
```javascript
        $(document).ready(function() {
            var carousel = new Carousel();
            carousel.init(slideConfig, '.slideshow-container', 4000);                       

            // Refresh carousel
            setInterval(function() {
                var carousel = new Carousel();
                carousel.init(slideConfig, '.slideshow-container', 4000);
            }, 43200000);                  
        });            
```
If you schedule different slides to be played on different dates, you need to re-initialize the carousel at an interval, where it will recalculate which slides are currently playing. The default interval is 43200000 milliseconds, which is 12 hours.

### Style the carousel
Choose a fixed width for your carousel and make sure it has `overflow: hidden`.
```css
        .carousel {
            width: 1274px;
            height: 345px;
            overflow: hidden;
        }                   

        .carousel a {
            overflow: auto;
            width: 100%;
            height: 100%;
            display: inline-block;
            vertical-align: top;  
        }                   

        .carousel img {
            width: 100%;
            height: auto;
        }           
``` 
