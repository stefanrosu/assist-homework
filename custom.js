
	(function () {

	function servicesBack() {
		$(".services-container").hide();
		$(".office-container").show();
	}

	function calendarBack() {
		$(".time-container").hide();
		$(".services-container").show();
	}
	function detailsNext() {
		$(".time-container").hide();
		$(".details-container").show();
	}
	function timeBack() {
		var d = document.getElementById("date").value;
		document.getElementById("time").innerHTML = "Date:  " + d;
		$(".time-container").show();
		$(".details-container").hide();
	}
	function confirmNext() {
		 var f = document.getElementById("f-name").value;
         var l = document.getElementById("l-name").value;
         var e = document.getElementById("Email").value;
         var m = document.getElementById("Mobile").value;
         document.getElementById("first-name").innerHTML = "First Name:  " + f;
         document.getElementById("last-name").innerHTML = "Last Name:  " + l;
         document.getElementById("email").innerHTML = "Email:  " + e;
         document.getElementById("mobile").innerHTML = "Mobile:  " + m;

		$(".confirm-container").show();
		$(".details-container").hide();
	}
	function render() {
		window.renderOffices();
	}

	render();

	window.servicesBack = servicesBack;
	window.calendarBack = calendarBack;
	window.detailsNext = detailsNext;
	window.timeBack = timeBack;
	window.confirmNext = confirmNext;

})();
