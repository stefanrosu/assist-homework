(function () {

  function renderOfficeAndService(element) {
    var template = '';
    $(element).empty();

      template =
        '<li><span class="about-left">Photo Shoot: </span><span class="about-right">' + window.mySelection.service.title + '</span></li>' + 
        '<li><span class="about-left">Description: </span><span class="about-right">' + window.mySelection.service.description + '</span></li>' +
        '<li><span class="about-left">Price: </span><span class="about-right">' + window.mySelection.service.price + '$</span></li>' +
        '<li><span class="about-left">Address: </span><span class="about-right">' + window.mySelection.office.address + '</span></li>' +
        '<li id="selected_date"><span class="about-left">Date: </span><span class="about-right">' + window.mySelection.selected_date || 'Not selected yet' + '</span></li>';

      $(element).append($(template));
  

  };

  function renderSelectedDate(selectedDate) {
    $('#selected_date .about-right').text(window.mySelection.selected_date);
  }

  window.renderOfficeAndService = renderOfficeAndService;
  window.renderSelectedDate = renderSelectedDate;

})();