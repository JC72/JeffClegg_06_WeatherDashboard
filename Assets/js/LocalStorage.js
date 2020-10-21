var citiesDiv = document.getElementById("previous_search_container");
var prvCities = [];

// runs when web page is opened to see if there is anything
// stored in local storage
$(document).ready(function() {

	$("#prevSearch").hide();

	var saved_cities = JSON.parse(localStorage.getItem("prvCities"));

	if (saved_cities !== null) {
		prvCities = saved_cities;
		$("#prevSearch").show();
		$("#fiveForecast").show();
		$("#currentWeather").show();
		city = prvCities[prvCities.length-1];
		currentData(city);
		forecastData(city);
	
	genButtons();
	}
});


// sets localstorage item to cities array 
function storeCities() {
	localStorage.setItem("prvCities", JSON.stringify(prvCities));
}


//render buttons for each cities array as a search history for user
function genButtons() {
	citiesDiv.innerHTML = "";
	if (prvCities === null) {
		return;
	}

    // found this solution via stackoverflow (Thank you to that site!)
	var unique_cities = [...new Set(prvCities)];
	for (var i = 0; i < unique_cities.length; i++) {
		var cityName = unique_cities[i];

		var listbutton = document.createElement("button");
		listbutton.textContent = cityName;
		listbutton.setAttribute("class", "listbtn");

		citiesDiv.appendChild(listbutton);
		listClicker();
	}
}
//on click function for search history buttons
function listClicker() {
	$(".listbtn").on("click", function(event) {
		event.preventDefault();
		var city = $(this).text().trim();
		//console.log(city);

		currentData(city);
		forecastData(city);

		$("#fiveForecast").show();
		$("#currentWeather").show();
	});
}

// event listener to search for city when search button is clicked

$("#searchBtn").on("click", function(event) {
	event.preventDefault();
	var city = $("#search_bar").val().trim();
	console.log(city);
	// Checks to make sure the is something in the input field
	if (city === "") {
		return false;
	}

	// Add new data to localStorage Array
	prvCities.push(city);
	


	forecastData(city);
	currentData(city);
	storeCities();
	genButtons();

	//shows the created forecast cards
	$("#fiveForecast").show();
	$("#prevSearch").show();
	$("#currentWeather").show();

});