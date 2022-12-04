var map;
var service;
var infowindow;
var geocoder;
var gobutton = document.getElementById("gobutton");
var userlocation;
var displaylist = document.getElementById("results");
var userevent = document.getElementById("user-search");
var address;
var userResults = document.createElement("ul");
var temperature = document.createElement("li");
var humidity = document.createElement("li");
var windSpeed = document.createElement("li");
var uvIndex = document.createElement("li");
var li4 = document.createElement("li");

userevent.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      gobutton.click();
    }
  });

  gobutton.addEventListener("click", function codeAddress() {
    getresults();
  });
  
  
  function getresults() {
  
    console.log("hello world");
  
    var city = document.getElementById("user-search").value;
  
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=04c358570a8428feb8acff9034f9c7b2`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var userlocationtemp = data.main.temp;
        var userlocationhumidity = data.main.humidity;
        var userlocationwind = data.wind.speed;
        
          temperature.textContent = "Temperature: " + Math.floor(userlocationtemp);
          humidity.textContent = "Humidity: " + Math.floor(userlocationhumidity); 
          windSpeed.textContent = "Wind Speed: " + Math.floor(userlocationwind);

            displaylist.appendChild(userResults);
            userResults.appendChild(temperature);
            userResults.appendChild(humidity);
            userResults.appendChild(windSpeed);
        })
  }


    