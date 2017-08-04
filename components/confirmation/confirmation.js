(function () {

  //  function initMap(coordinates, address) {

  //   var map = new google.maps.Map(document.getElementById('map-confirmation'), {
  //     zoom: 14,
  //     center: coordinates
  //   });

  //   var marker = new google.maps.Marker({
  //     position: coordinates,
  //     map: map,
  //     title: address,
  //     // label: address
  //   });
  //   google.maps.event.trigger(map, 'resize');
  // }


  function renderConfirmationPage() {
   var first_name = document.getElementById("f-name").value;
   var last_name = document.getElementById("l-name").value;
   var email = document.getElementById("Email").value;
   var mobile = document.getElementById("Mobile").value;

   window.mySelection.details = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    mobile: mobile,
   }

    window.renderOfficeAndService("#details-list-confirmation");
    window.renderSelectedDate();

    var template = '';
    $("#user-details-confirmation").empty();

      template =
        '<li><span class="about-left">First name: </span><span class="about-right">' + window.mySelection.details.first_name + '</span></li>' + 
        '<li><span class="about-left">Last name: </span><span class="about-right">' + window.mySelection.details.last_name + '</span></li>' +
        '<li><span class="about-left">email: </span><span class="about-right">' + window.mySelection.details.email + '$</span></li>' +
        '<li><span class="about-left">Mobile: </span><span class="about-right">' + window.mySelection.details.mobile + '</span></li>';

    $("#user-details-confirmation").append($(template));

      // initMap(window.mySelection.office.coordinates, window.mySelection.office.address);

    $(".confirm-container").show();
    $(".details-container").hide();
  }

  window.renderConfirmationPage = renderConfirmationPage;

})();