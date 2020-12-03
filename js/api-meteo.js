//______________________________________________
//______________________________________________
// lien de l'api
// https://www.prevision-meteo.ch/services/json/

//http://www.prevision-meteo.ch/services/json/lat=xx.xxxlng=yy.yyy

//https://www.prevision-meteo.ch/services/json/list-cities
//______________________________________________

var apiUrl = "https://www.prevision-meteo.ch/services/json/"

var ladate = new Date()

var meteo_img = document.getElementById('meteo-img')
var info_meteo = document.getElementById('info-meteo')

var lng = 0;
var lat = 0;


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(meteo, showError);
  } else { 
    apiUrl = "https://www.prevision-meteo.ch/services/json/lille"
}
}


function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
        apiUrl = "https://www.prevision-meteo.ch/services/json/lille"
        break;
    case error.POSITION_UNAVAILABLE:
        apiUrl = "https://www.prevision-meteo.ch/services/json/lille"
        break;
    case error.TIMEOUT:
        apiUrl = "https://www.prevision-meteo.ch/services/json/lille"
        break;
    case error.UNKNOWN_ERROR:
        apiUrl = "https://www.prevision-meteo.ch/services/json/lille"
        break;
  }
}

function meteo(position){
    
    lng = position.coords.longitude;
    lat = position.coords.latitude

    url = apiUrl +  "lat=" + lat.toFixed(3) + "lng=" + lng.toFixed(3)

    console.log(url)

    fetch(url, {method: 'get'}).then(response => response.json()).then(results => {
        console.log(results)
        
        var img = document.createElement('img')
        img.src = results.current_condition.icon_big
        meteo_img.appendChild(img)

        var p = document.createElement('p')
        p.innerHTML = results.current_condition.tmp +  "°C " + "</br>" + results.fcst_day_0.day_long + " " + results.fcst_day_0.date + "<br>" + ladate.getHours()+":"+ladate.getMinutes()+":"+ladate.getSeconds() 
        info_meteo.appendChild(p)

    }).catch(err => {
        console.error(err)
    })
}

getLocation()
