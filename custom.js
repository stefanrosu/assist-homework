
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
		$(".time-container").show();
		$(".details-container").hide();
	}
	function confirmNext() {
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