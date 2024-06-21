const inputBox = document.getElementById('inputBox');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.getElementById('img');
const temperature = document.getElementById('temp');
const description = document.getElementById('des');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const apiKey = "752bd5e0ca5e72dd5338404f7f743e10";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());
    
    if(weatherData.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none"
        return;
    }

    location_not_found.style.display = "none"
    weather_body.style.display = "flex"
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

    switch(weatherData.weather[0].main){
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.avif";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;

    }
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});