(function () {

  var offices = [{
    "id": 1,
    "name": "Office 1",
    "address": "Burdujeni,Suceava,Romania",
    "coordinates":
    {
      "lat": 47.6778626,
      "lng": 26.279035199999953
    },
    "phone": "0230 222888",
  },
  {
    "id": 2,
    "name": "Office 2",
    "address": "Marasesti,Suceava,Romania",
    "coordinates":
    {
      "lat": 47.64147326310967,
      "lng": 26.255965015405323
    },
    "phone": "0230 222777",
  }, {
    "id": 3,
    "name": "Office 3",
    "address": "Centru,Suceava,Romania",
    "coordinates":
    {
      "lat": 47.643551928926165,
      "lng": 26.260277050817898
    },
    "phone": "0230 222666",
  },
  {
    "id": 4,
    "name": "Office 4",
    "address": "Obcini,Suceava,Romania",
    "coordinates":
    {
      "lat": 47.642464446280485,
      "lng": 26.23478963920898
    },
    "phone": "0230 222555",
  }];

  function initMap(coordinates, address) {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: address,
      // label: address
    });
    google.maps.event.trigger(map, 'resize');
  }


  function renderOffices() {
    var template = '';
    var initialMap = offices[0];

    initMap(initialMap.coordinates, initialMap.address);

    offices.forEach(function (item) {
      template =
        '<h3 id="' + item.id + '"> <a href="#">' + item.name + '</a></h3>' +
        '<div class="info-txt">' +
        '<p>' + item.address + '</p>' +
        '<p>' + item.phone + '</p>' +
        '<button class="acc-btn btn-acc" onclick="selectOffice(' + item.id+ ')">Select</button>'
      '</div > '

      $('.accordion').append($(template));

    });

    $(".accordion").accordion({
      change: function (event, ui) {
        var index = parseInt(ui.newContent.context.id) - 1;
        initMap(offices[index].coordinates, offices[index].address);
        // initMap(offices[index.coordinates], offices[index.address]);
      }
    });
  };

  function selectOffice(officeId) {
    $(".services-container").show();
    $(".office-container").hide();
    window.renderServices(officeId);

    window.offices.find(function(item) {
      if (item.id == officeId) {
        window.mySelection.office = item;
      }
    });
  }

  window.offices = offices;
  window.renderOffices = renderOffices;
  window.selectOffice = selectOffice;

})();