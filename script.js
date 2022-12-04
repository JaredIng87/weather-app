var map;
var service;
var infowindow;
var geocoder;
var gobutton = document.getElementById("gobutton");
var userlocation;
var displaylist = document.getElementById("list");
var userevent = document.getElementById("user-search");
var address;

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

        var listname = document.createElement("h1");
        
          listname.textContent =
            "Temperature: " + Math.floor(userlocationtemp) + 
            "Humidity: " + Math.floor(userlocationhumidity) + 
            "Wind Speed: " + Math.floor(userlocationwind);

            displaylist.appendChild(listname);
        })
  }


    