var paginationObj = {
  page: 1,
  num_pages: 15,
  per_page: 20
}

$(function() {
  var checkForContainer = setInterval(function() {
    if ($('#paginate').length != 0) {
      clearInterval(checkForContainer);
      var pagination = new Pagination('#paginate', paginationObj);
    }
  }, 100);

});
