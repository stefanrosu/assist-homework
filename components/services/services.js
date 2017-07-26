(function () {

  var services = [{
    "id": 1,
    "office_id": 1,
    "price": 170,
    "title": "Children Photo",
    "img_url": "components/images/children.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 2,
    "office_id": 1,
    "price": 100,
    "title": "Classic Photo",
    "img_url": "components/images/classic.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 3,
    "office_id": 1,

    "price": 90,
    "title": "Nature Photo",
    "img_url": "components/images/nature.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 4,
    "office_id": 1,
    "price": 200,
    "title": "Passport Photo",
    "img_url": "components/images/passport.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }];



  function renderServices(officeId) {
    var template = '';
    $('#services_panel').empty();

    services.forEach(function (item) {
      if (item.office_id == 1) {

        template =
          '<div class="services" id="' + item.id + '">'
          + '<h2 class="title-services">' + item.title + '</h2>'
          + '<p class="subtitle-services">' + item.price + ' $</p>'
          + '<div class="panel-services">'
          + '<div class="thumbnail">'
          + '<img class="page-logo" src=" ' + item.img_url + '"></div>'
          + '<div class="panel-text">'
          + '<p>' + item.description + ' </p></div></div>'
          + '<div class="btn-service" onclick="selectService(' + item.id + ')"><button class="button"> Select</button></div>'
          + '</div>';

        $('#services_panel').append($(template));
      }
    })

  };

  function selectService(serviceId) {
    $(".time-container").show();
    $(".services-container").hide();
    // window.selectTime(serviceId);
  }

  window.services = services;
  window.renderServices = renderServices;
  window.selectService = selectService;

})();