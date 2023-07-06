var personalAPIKey = "3e4eb09559abbbf41149f0787750134c";
var searchButton = document.querySelector("#searchCityButton");
var userCity = document.querySelector("#searchCityName");


searchButton.addEventListener("click",function(){ 
  console.log(userCity)
  console.log(userCity.value)
  getLocation(userCity.value)
})

function getLocation (cityName){
    //console.log(cityName)
    var getCoordsAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=3e4eb09559abbbf41149f0787750134c";


    fetch(getCoordsAPI)
    .then(function(response){
       // console.log(response)
        return response.json()
    })
    .then(function(data){
    console.log("THIS IS DATA for cordinates: ", data)
    console.log(data[0].lat)
    console.log(data[0].lon)
    getWeather(data[0].lat, data[0].lon);
    })
    
}







function getWeather(lat,lon){
    console.log("This is lat", lat)
    console.log("This is lon", lon)
    var forecast = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=3e4eb09559abbbf41149f0787750134c&units=imperial";
    console.log(forecast)
    fetch(forecast)

    
    .then(function(response){
        //console.log(response)
        return response.json()
    })
    .then(function(data){ 
    console.log("THIS IS DATA: ", data)
    console.log(data.list[0].main.temp)
    //getWeather();
    //localStorage.setItem("city", JSON.stringify(data))
    //console.log(data)

    //var currentCity = document.getElementByID("current-city");
    //currentCity.textContext = city; 
    //setCurrentWeather(data.list[0]);
    //forecast(data.list);
    });
}

//function convertToFahrenheit(kelvin) {
   // var cityTemp = kelvin;
    //var cityToFar = (cityTemp - 273.15) * 1.8 + 32;
    //var message = cityToFar + " \xB0F";
    //return message;
 // }
  
  // Testing functionality of convert to fahrenheit function
  //console.log(convertToFahrenheit(273.15)); 
  
  

