let btn = document.querySelector(".searchBtn"),
    cityName = document.querySelector(".city"),
    temperature = document.querySelector(".temp"),
    humidity = document.querySelector(".humidityVal"),
    windSpeed = document.querySelector(".windVal"),
    feelsLike = document.querySelector(".feelsLike"),
    weatherIcon = document.querySelector("#icon"),
    description = document.querySelector("#description");

const API_Key = "055b681eebdc7418e9439739458a2489";
// const API_Key = "VVCLEC6YQPGRPE9WNFKBCHW6M";

let checkWeather = async (cityNameVal)=>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityNameVal}`;
    // const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityNameVal}?unitGroup=metric&key=${API_Key}`;
    let response = await fetch(`${API_URL}&appid=${API_Key}`);
    // let response = await fetch(apiUrl);
    try {
        let data = await response.json();
        console.log(data);
        // cityName.textContent = data.resolvedAddress;
        // temperature.textContent = `${Math.round(data.currentConditions.temp)}°C`;
        // humidity.textContent = `${data.currentConditions.humidity}%`;
        // feelsLike.textContent = `Feels Like : ${data.currentConditions.feelslike}°C`;
        // windSpeed.textContent = `${data.currentConditions.windspeed} km/h`;

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        feelsLike.textContent = `Feels Like : ${data.main.feels_like}°C`;
        windSpeed.textContent = `${data.wind.speed} km/h`;
        description.textContent = data.weather[0].main;
        weatherIcon.src = getIcon(data.weather[0].main);
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.name + "')"

        document.querySelector(".info").style.opacity = 1;
        document.querySelector(".search input").value = "";
    }
     catch (error) {
        temperature.textContent = "City Not Found!!";
        document.querySelector(".info").style.opacity = 0;
        cityName.style.opacity = 0;
        cityName.style.opacity = 0;
        feelsLike.style.opacity = 0;
        document.querySelector(".search input").value = "";
    }
}

let getIcon = (data)=>{
    if(data === "Clear"){
        return "images/clear.png";
    }
    else if(data === "Clouds"){
        return "images/clouds.png";
    }
    else if(data === "Drizzle"){
        return "images/drizzle.png";
    }
    else if(data === "Mist"){
        return "images/mist.png";
    }
    else if(data === "Rain"){
        return "images/rain.png";
    }
    else{
        return "images/snow.png";
    }
}


btn.addEventListener("click", ()=>{
    checkWeather(document.querySelector(".search input").value);
});

document.querySelector(".search input")
.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        btn.click(); 
    }
});


// const apiKey = "VVCLEC6YQPGRPE9WNFKBCHW6M";
// // const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`;

// async function getWeather(city){
//     let response = await fetch( `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`);
//     let data = await response.json();
//     console.log(data);
// }

// getWeather('ghaziabad');
