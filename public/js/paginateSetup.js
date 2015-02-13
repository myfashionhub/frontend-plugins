var paginationObj = {
  page: 1,
  num_pages: 15,
  per_page: 20
}

$(function() {
  var pagination = new Pagination('#pagninate', paginationObj);
});
