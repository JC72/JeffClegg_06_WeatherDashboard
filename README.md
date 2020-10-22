# JeffClegg_06_WeatherDashboard

This project was designed as a homework assignment for MSU's coding bootcamp. 

This application was created to emphasize the use of HTML, CSS , jQuery & Moment.js. Also, this project was introduced APIs and using ajax to pull information out of them and into the project.

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Assignment](#Assignment)
4. [Project Requirements](#projectrequirements)
5. [Scripted Features](#scriptedfeatures)
6. [Execution](Execution)
7.[Contains](#Contains)
8.[Creators](#Creators)


## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_06_WeatherDashboard)
* [Deployed GitHub IO](https://jc72.github.io/JeffClegg_06_WeatherDashboard/) 

## Project Overview <a name="projectoverview"></a>

* HTML, CSS, jQuery (using Moment.js) and OpenWeatheMap API were used to create a weather dashboard that allows a user to find the daily weather for a specific city buy typing that city in the input field and either hitting enter or click on th search icon.  It also shows a brief 5 day forecast and generates a previous search. It also keeps the previous city search hisory and stores it in local storage so when the site is reopened it returns the search history and the forecast for the last city that was searched.

## Assignment
### This assignment contains the following features: 
* The Initial Opening Page
    <details>
        <summary>Click to expand</summary>

    - Only contains the Main Header and the City Search Input Page
    
    *Opening Page*![Opening Page](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/OpenPage.png)
    
    - Allows the user to start their initial weather search
    
    *Start Search Page*![Start Search](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/StartSearch.png)

    </details>

* The Result Page
    <details>
        <summary>Click to expand</summary>

    - Show the current weather with all the information required
    - Shows the 5-Day forecast information below the current weather with all the required information
    - Shows the area with the previous search history
    
    *Initial Results*![Initial Results](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/InitialResults.png)
    
    *Second City Search*![Second Search](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/SecondSearch.png)

    </details>

* The Reopened Website
    <details>
        <summary>Click to expand</summary>

    - Shows the user all of the cities that were searched
    - Also the weather data for the last city the user searched using the site


    *Web Page Reopened*![Reopen Page](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/ReOpenPage.png)


    *Search History showing Local Storage*![Search History](https://github.com/JC72/JeffClegg_06_WeatherDashboard/blob/main/Assets/images/ScreenShots/SearchHistory.png)

    </details>

## Project Requirements: <a name="projectrequirements"></a>
<details>
    <summary>Click to expand</summary>

* The user when opening the dashboard will see a input field to search for a city.
* The user will enter a specific city and click either enter or search button. 
* The user will then see the current conditions for that city showing the following:
    * city name, the current date & a icon of the current weather conditions
    * the current temperature, the humidity, the wind speed and the UV Index
* The user will see that the UV Index will be color coded based on its condition as follows:
    * Green - Low
    * Aqua - Moderate
    * Yellow - High
    * Red - Very High
    * Black - Extreme
* The user will also see the future forecast for the next five days displaying the following information:
    * the date
    * icon of the weather condition
    * temperature
    * humidity
* After the user searches for that city is will be stored in previous search field and will allow the user the ability to search for that city again by pressing on that city in the previous search field.
* Finally when the user visits the dashboard again. The user will see all the previously searched cities and the forecast for the last city searched.

</details>

## Scripted Features <a name="scriptedfeatures"></a>
### This project has several scripted features of:
<details>
    <summary>Click to expand</summary>

* Event listener (onclick) to allow the user to send the city name and retrieve the weather conditions.
* An array & forEach loop with a function that generates all the weather card bodies for the five day forecast into the HTML.
* A funtion using moment & ajax which pulls the current date and weather data. a formula to calculate the temperature from Kelvin to Fahrenheit. It also sets the date format then places all the information in the current weather container.
* A function containing a for loop and ajax that checks the UV Index number and creates a disabled colored button specific to its condition criteria and places it in the current weather container along with the condition it represents.
* Function that uses the current date, with for loop and ajax which pulls forecast data for the next five days and places each day data into its respective specific individual forecastCard.
* a document.ready funtion that pulls data from local storage and shows the last searched city's weather conditions and creates the previous search list when site is opened. 
* Two event listener functions for the search button and the previous city search buttons in the previous search list.
* A function that sets the city name that is currently search and adds it to local storage.
* A function that generates previous searched cities by pulling the data from local storage and then individual going through the array with a for loop and creating list buttons for the previous search area.

</details>

## Execution
### To Execute File:
> Open in browser by way of Deployed IO link

## Contains: 
* One HTML Page
    * Index.html 

* One CSS Page
    * Styles.css
        * Contains styling for html user input features
        
* Three Javascript Pages
    * fiveDayCard.js
        * Contains:
            * forEach Loop
            * Variables
            * Array

    * LocalStroage.js
        * Contains:
            * Variables, including arrays and value placeholders
            * Functions & Funtion Calls
            * Jquery Button creators
            * JSON for localStorage

    * weather.js
        * Contains:
            * moment(); to pull in the date and time 
            * Variables, including arrays and value placeholders
            * Event listeners & functions
            * ajax, url & Get method to pull from OpenWeatherMap API
            * if/else if statement


## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp