//services render
(function() {
	
	var services = [{
		"id":1,
		"price": 170,
		"title": "Children Photo",
		"img_url": "components/images/children.jpg",
		"description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
	},{
		"id":2,
		"price": 110,
		"title": "Classic Photo",
		"img_url": "components/images/classic.jpg",
		"description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
	},{
		"id":3,
		"price": 100,
		"title": "Nature Photo",
		"img_url": "components/images/nature.jpg",
		"description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
	},{
		"id":4,
		"price": 90,
		"title": "Passport Photo",
		"img_url": "components/images/passport.jpg",
		"description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
	}];

	function renderServices() {
		var template = '';
		services.forEach(function (item) {
			template =
				'<div class="services" id="' + item.id + '">'
				+ '<h2 class="title-services">' + item.title + '</h2>'
				+ '<p class="subtitle-services">' + item.price + ' $</p>'
				+ '<div class="panel-services">'
				+ '<div class="thumbnail">'
				+ '<img class="page-logo" src=" ' + item.img_url + '"></div>'
				+ '<div class="panel-text">'
				+ '<p>' + item.description + ' </p></div></div>'
				+ '<div class="btn-service"><button class="button"> Select</button></div>'
				+ '</div>';

			$('#services_panel').append($(template));
		})

	}

	renderServices();

})();


//steps

$(document).ready(function() {
	$('.container').load('.office-container');
	$(".time-container").hide();
    $(".details-container").hide();
    $(".services-container").hide();
    
    $(".acc-btn").click(function () {
    $(".services-container").show();
    $(".office-container").hide();
	});

	$(".back-index").click(function () {
    $(".services-container").hide();
    $(".office-container").show();
	});

	$(".btn-service").click(function () {
    $(".time-container").show();
    $(".services-container").hide();
	});
	$(".down-btn-left").click(function () {
    $(".time-container").hide();
    $(".services-container").show();
	});
    $(".down-btn-right").click(function () {
    $(".time-container").hide();
    $(".details-container").show();
    });
      $(".btn-back").click(function () {
    $(".time-container").show();
    $(".details-container").hide();
    });

});

//google maps
function initMap() {
  var myLatLng1 = {lat: 47.6778626, lng: 26.279035199999953}; // Burdujeni Suceava
  var myLatLng2 = {lat: 44.4267674, lng: 26.102538399999958}; //Bucuresti

  var map1 = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: myLatLng1
  });

  var map2 = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: myLatLng2
  });

  var marker1 = new google.maps.Marker({
  position: myLatLng1,
  map: map1,
  title: 'Hello World!'
  });

  var marker2 = new google.maps.Marker({
  position: myLatLng2,
  map: map2,
  title: 'MA-TA!'
  });
}
$(document).on('click', '#map-acc-b', function(event){
  alert('test');
  
});


$("#map-acc-c").click(function(){

  
});
