//loop to create cards for the 5-day forecast div
var days = [1, 2, 3, 4, 5]

days.forEach(function(setDay) {

	var startCard = $("<div>");
	startCard.attr("id", "forecastCards");

	var indCard = $("<div>");
	indCard.addClass("forecastCard");

	var dayCard = $("<div>");
	dayCard.attr("id", "day-" + setDay);
	dayCard.addClass("cardbody p-2");

	var hClass = $("<span>");
	hClass.addClass("card-date");
	hClass.attr({
		id: "date-" + setDay
	});

	var imgClass = $("<span>");
	imgClass.addClass("weatherIcon");
	imgClass.attr({
		id: "img-" + setDay
	});

	var p1Class = $("<p>");
	p1Class.addClass("temp");
	p1Class.attr({
		id: "temp-" + setDay
	});

	var p2Class = $("<p>");
	p2Class.addClass("humidity");
	p2Class.attr({
		id: "humd-" + setDay
	});

	dayCard.append(hClass);
	dayCard.append(imgClass);
	dayCard.append(p1Class);
	dayCard.append(p2Class);
	indCard.append(dayCard)
	startCard.append(indCard);
	$("#fiveForecast").append(startCard);

	//Hides the created individual cards
	$("#fiveForecast").hide();
	$("#prevSearch").hide();
	$("#currentWeather").hide();

});








