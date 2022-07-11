var ubicacion = navigator.geolocation;
var clima = document.getElementById("#clima");
var comuna = document.getElementById("comuna")
var temperatura= document.getElementById("temperatura")

ubicacion.getCurrentPosition(position=>{
     var latitud= position.coords.latitude;
      var longitud= position.coords.longitude;
     console.log(latitud,longitud)
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=3242b1dab11daf94dbb5c2c45df0e07a`).
     then(response=>response.json()).then(data=>clima.innerHTML(data.weather[0].description))
     
    

    
})
//fetch( `https://api.weatherbit.io/v2.0/current?lat=-33.4931768&lon=-70.6097705&key=6935272bfe794a07b91887d8f6d82fc1&include=minutely`)
//.then(response =>response.json()).then(data => console.log(data.data[0].temp +"°C"))



