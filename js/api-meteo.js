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

var loading = document.getElementById("loading")

var rotation = 0;
var stock = 0;

var lng = 0;
var lat = 0;


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(meteo, showError);
  } else { 
    meteo()
  }
}

function showError(error) {
  console.error(error)
  meteo()
}

function meteo(position){
    if(position == undefined){
      lat = 50.6333
      lng = 3.0667
    } else {
      lng = position.coords.longitude;
      lat = position.coords.latitude
    }
    meteo_img.innerHTML = ""
    info_meteo.innerHTML = ""

    url = apiUrl +  "lat=" + lat.toFixed(3) + "lng=" + lng.toFixed(3)
    console.log(url)

    fetch(url, {method: 'get'}).then(response => response.json()).then(results => {
        console.log(results)
        
        var img = document.createElement('img')
        img.src = results.current_condition.icon_big
        meteo_img.appendChild(img)

        var p = document.createElement('p')
        p.innerHTML = results.current_condition.tmp +  "°C " + "</br> <span class=\"date\">" + results.fcst_day_0.day_long + " " + results.fcst_day_0.date + "</span><br>" + ladate.getHours()+":"+ladate.getMinutes()+":"+ladate.getSeconds() 
        info_meteo.appendChild(p)

    }).catch(err => {
        console.error(err)
    })
    clearInterval(inter)
}

getLocation()

var inter = setInterval(function(){
              stock += 10
              rotation += 360 + stock
              loading.style.transform = "rotate(" + rotation +"deg)";
              if(stock > 100){
                stock = 0
              }
              console.log(stock)
            }, 1000);

// setTimeout(meteo(),30000)