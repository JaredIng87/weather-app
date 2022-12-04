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

  function initialize() {
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map"));
  }
  
  
  gobutton.addEventListener("click", function codeAddress() {
    var address = document.getElementById("user-search").value;
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == "OK") {
        userlocation = results;
        gettemp();
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  });
  
  
  function gettemp() {
  
    console.log("hello world");
  
    var address = document.getElementById("user-search").value;
  
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${address}&units=imperial&appid=04c358570a8428feb8acff9034f9c7b2`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var userlocationtemp = data.main.temp;
        console.log(userlocationtemp);

        var listname = document.createElement("h1");
        
          listname.textContent =
            "the temperature is " +
            Math.floor(userlocationtemp);

            displaylist.appendChild(listname);
        })
  }


    