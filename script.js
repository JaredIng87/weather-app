var map;
var service;
var infowindow;
var gobutton = document.getElementById("gobutton");
var displaylist = document.getElementById("results");
var userevent = document.getElementById("user-search");
var userIcon = document.createElement("img");
var userResults = document.createElement("ul");
var usercity = document.createElement("li");
var userIcon = document.createElement("img");
var temperature = document.createElement("li");
var humidity = document.createElement("li");
var windSpeed = document.createElement("li");
var uvIndex = document.createElement("li");
var li4 = document.createElement("li");
var today = moment().format('M/D/YYYY');
var cities = [];

//renderLastRegistered();

userevent.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      gobutton.click();
    }
  });

  gobutton.addEventListener("click", function codeAddress() {
    getresults();
  });

  function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
  }
  
  
  function getresults() {
  
    var city = document.getElementById("user-search").value;

  if (city === "") {
    return;
  }

  cities.push(city);
  storeCities();
  //renderCities();

    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=71c555be8a9ce2565b6198f3d788a54a`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var userlocation = data.name;
        var userlocationicon = data.icon;
        var userlocationtemp = data.main.temp;
        var userlocationhumidity = data.main.humidity;
        var userlocationwind = data.wind.speed;
     
          userIcon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
          usercity.textContent = userlocation + " " + today;
          temperature.textContent = "Temperature: " + Math.floor(userlocationtemp);
          humidity.textContent = "Humidity: " + Math.floor(userlocationhumidity); 
          windSpeed.textContent = "Wind Speed: " + Math.floor(userlocationwind);

            userResults.appendChild(userIcon);
            displaylist.appendChild(userResults);
            userResults.appendChild(usercity);
            userResults.appendChild(temperature);
            userResults.appendChild(humidity);
            userResults.appendChild(windSpeed);
        })
        renderCities();
}




  /*function renderLastRegistered() {
    var city = localStorage.getItem("city");
  
     console.log(city);

    if (!city) {
      return;
    }
  };*/

  var citiesList = document.querySelector("#citiesList");

  function renderCities() {
    citiesList.innerHTML = "";
  
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
  
      var li = document.createElement("li");
      li.textContent = city;
      li.setAttribute("data-index", i);

      citiesList.appendChild(li);
    }
    prevResults.appendChild(citiesList);
  }
  
  function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
  
    if (storedCities !== null) {
      cities = storedCities;
    }
  
    renderCities();
  }

  init()





