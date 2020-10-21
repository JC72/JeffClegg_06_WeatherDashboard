//These two variables are to store the cities coordinates to get the UV Index
var latitude = "";
var longitude = "";


var myAPI = "&appid=3e749baca353e5b24305a53868c86b75";

//function to retrieve future weather forecast for the next 5 days
//from openweathermap using ajax method
function forecastData(city) {
	// console.log(city);
	var cnt = "&5";
	var futureURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

	var queryURL = futureURL + city + cnt + myAPI;
	var nowDate = moment();

	$.ajax({
		url: queryURL,
		method: "GET"

	})

	.then(function(future) {
		//console log data to pull the needed attributes for this assigment (marked for comment because it works)     
		// console.log(future);
		// console.log(queryURL);

		//sets a loop to go thru the future forecast array and displays
		//a single forecast for the next 5 days
		for (var i = 6; i < future.list.length; i += 8) {

			var futPosition = (i + 2) / 8;
			var futDayCard = "#date-" + futPosition;
			var futImgCard = "#img-" + futPosition;
			var futTempCard = "#temp-" + futPosition;
			var futHumCard = "#humd-" + futPosition;

			//This is a placeholder in case I want to add later
			//var futDayCard = "#high-"+ futPosition;
			//var futDayCard = "#low-"+ futPosition;

			//clears out the previous information from the previous search for the individual
			//future forecast cards
			$(futDayCard).empty();
			nowDate.add(1, 'days');
            //console.log(nowDate);
            
			$(futDayCard).text(nowDate.format("M/D/YYYY"));

			//Future Icon Place Holder
			var futIcon = $("<img>");
			futIcon.attr("src", "https://openweathermap.org/img/w/" +
				future.list[i].weather[0].icon + ".png");

			$(futImgCard).empty();
			$(futImgCard).append(futIcon);

			//Future Temperature Place Holder
			var farhconv3 = (future.list[i].main.temp - 273.15) * 1.8 + 32;
			$(futTempCard).text("Temp: " + farhconv3.toFixed(1) + " °F");

			//Future Humidity Place Holder
			$(futHumCard).text("Humidity: " + future.list[i].main.humidity + "%");

		}

	});





}
//This function retrieves current data for chosen city from
//from openweathermap using ajax method
function currentData(city) {

	var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
	var queryURL2 = currentUrl + city + myAPI;

	$("#currentWeather").css("border", "1px solid");
	$("#currentWeather").css("border-color", "rgba(0,0,0,.125)");

	$.ajax({
		url: queryURL2,
		method: "GET"

	})

	.then(function(today) {

        //this section pulls the current date
		var nowDate = moment();        
        var curDate = nowDate.format("M/D/YYYY");

        //this section builds the current weather card
		var cityNm = $("<h3>").text(today.name + " Weather for " + curDate + " ");
        $("#cityName").empty();
        $("#cityName").append(cityNm);

		var weatherIcon = $("<img>");
		weatherIcon.attr(
			"src",
			"https://openweathermap.org/img/w/" + today.weather[0].icon + ".png"
		);
		$("#curIcon").empty();
		$("#curIcon").append(weatherIcon);

		//converts the temperatures from Kelvin to Fahrenheit
		var farhconv1 = (today.main.temp - 273.15) * 1.8 + 32;
		var farhconv2 = (today.main.feels_like - 273.15) * 1.8 + 32;
		//console.log(farhconv1);

		$("#curTemp").text("Temperature: " + farhconv1.toFixed(1) + " °F");
		$("#curFeels").text("Feels Like: " + farhconv2.toFixed(1) + " °F");
		$("#curHumidity").text("Humidity: " + today.main.humidity + "%");
		$("#curWind").text("Wind Speed: " + today.wind.speed + " MPH");

		//retrieves the longitude and latitude to 
		latitude = today.coord.lat;
		//console.log(latitude);
		longitude = today.coord.lon;
		//console.log(longitude);

		UVpull();

	});

}

//This function will pull the necessary UV Index from the lat & lon of the City
function UVpull() {

	var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat=";
	var queryURL3 = uvURL + latitude + "&lon=" + longitude + myAPI;

	$.ajax({
		url: queryURL3,
		method: "GET"
	})

	.then(function(UVI) {
		//console log data to pull the needed attributes for this assigment
		// console.log(UVI);
		// console.log(queryURL3);
		// console.log(UVI.value);

		var uvValue = UVI.value;
		var uvDisplay = $("<button>");
		var condition = "";

        //if else statement to create disabled button and
        //define color and condition of UV index
		if (uvValue < 2) {
			uvDisplay.addClass("btn btn-success disabled");
			condition = "Low";
		} else if (uvValue > 2 && uvValue <= 5) {
			uvDisplay.addClass("btn btn-info disabled");
			condition = "Moderate";
		} else if (uvValue > 5 && uvValue <= 7) {
			uvDisplay.addClass("btn btn-warning disabled");
			condition = "High";
		} else if (uvValue > 7 && uvValue <= 10) {
			uvDisplay.addClass("btn btn-danger disabled");
			condition = "Very High";
		} else if (uvValue > 11) {
			uvDisplay.addClass("btn btn-dark disabled");
			condition = "Extreme";
		}

		//adds text to created disabled button, labels and appends into html
		var uvLabel = $("<label>");
		uvLabel.attr({
			id: "uvLabel"
		});
		uvLabel.text(" " + condition);

		$("#curUVI").text("UV Index: ");
		$("#curUVI").append(uvDisplay.text(uvValue));
		$("#curUVI").append(uvLabel);
	});
}