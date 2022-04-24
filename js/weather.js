const API_KEY = "0412a1f1fb2fcb7e2d2d275ab6a3bc21";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather");
        const temp = weather.querySelector("span:first-child");
        const city = weather.querySelector("span:last-child");

        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const temp_calc = Math.floor( data.main.temp );
        const temp_Text = `${temp_calc}℃`;

        const wImg = document.createElement("img");
        wImg.src = `${icon}`;

        weather.prepend(wImg);

        temp.innerText = `${temp_Text}`;
        city.innerText = data.name;
    });
}
function onGeoErr(){
    alert( "Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition( onGeoOk, onGeoErr );

/*
fetch(url).then(response => response.json()).then(data =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
});
*/
