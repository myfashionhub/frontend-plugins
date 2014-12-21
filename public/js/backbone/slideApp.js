// Make this a router, #carousel-page
function slideAppInit(collection) {
    var slidesView = new SlidesView({
        collection: collection,
        el: $('.slide-config')
    });

    $('.new-slide').submit(function(e) {
        saveSlide(e, collection);
    });

    $('.save-slide').click(function(e) {
        saveSlide(e, collection);
    });
}

function saveSlide(e, collection) {
    e.preventDefault();

    var form = $('.new-slide');
    var src = form.find('input.src').val();
    var url = form.find('input.url').val();
    var begin = form.find('input.begin').val();
    var end = form.find('input.end').val();

    if (validateEntries(src, url, begin, end)) {
        collection.add({src: src, url: url, begin: begin, end: end});
        $('.success').html('Slide added successfully').css('display', 'block').fadeIn();
        setTimeout(function() {
            //$('.success').hide();
        }, 2000)
    }
}

function validateEntries(src, url, begin, end) {
    validateLinks(src, url);
    validateDates(begin, 'begin');
    validateDates(end, 'end');
    var errors = 0;
    _.each($('.error span'), function(span) {
        if ($(span).html() !== '') {
            errors += 1;
        }
    });
    if (errors === 0) {
        return true;
    } else {
        return false;
    }
}


function validateLinks(src, url) {
    if (src.indexOf('http://') === -1 || (src.indexOf('.jpg') === -1 && src.indexOf('.png') === -1)){
        var error = 'Invalid image link.';
        processError('src', error);
    } else {
        processError('src', '');
    }

    if (url.indexOf('.waywire.com') === -1) {
        var error = 'Invalid channel link.';
        $('.error .url').html(error);
        processError('url', error);
    } else {
        processError('url', '');
    }
}

function validateDates(dateString, whichDate) {
    var dateArray = [];
    _.each(dateString.split(','), function(dateNum) {
        dateArray.push(parseInt(dateNum.trim()));
    });

    if (dateArray[0].toString().length != 4 || dateArray[1] < 1 || dateArray[1] > 12 || dateArray[2] < 1 || dateArray[2] > 31) {
        var error = 'Invalid ' +whichDate+' date.';
        processError(whichDate, error);
    } else {
        processError(whichDate, '');
    }
}

function processError(className, error) {
    $('.error .' + className).html(error);
    if (error !== '') {
        $('.error .' + className).css('display', 'block').fadeIn();
    } else {
        $('.error .' + className).hide();
    }
}
