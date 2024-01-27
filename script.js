let btn = document.querySelector(".searchBtn");
let cityName = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidityVal");
let windSpeed = document.querySelector(".windVal");
let feelsLike = document.querySelector(".feelsLike");
let weatherIcon = document.querySelector("#icon");
const API_Key = "055b681eebdc7418e9439739458a2489";


// btn.addEventListener("click",()=>{
//     let cityNameVal = document.querySelector(".search input").value;
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityNameVal}`;

//     console.log(cityNameVal);

//     (async function (){
//         let response = await fetch(API_URL + `&appid=${API_Key}`);
//         let data = await response.json();
//         console.log(data);

//         cityName.textContent = data.name;
//         temperature.textContent = `${Math.round(data.main.temp)}°C`;
//         humidity.textContent = `${data.main.humidity}%`;
//         feelsLike.textContent = `Feels Like:- ${data.main.feels_like}°C`;
//         windSpeed.textContent = `${data.wind.speed} km/h`;
//         weatherIcon.src = "images/clouds.png";
//     })()
    
//     document.querySelector(".search input").value = "";
// })




let checkWeather = async (cityNameVal)=>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityNameVal}`;
    let response = await fetch(`${API_URL}&appid=${API_Key}`);
    try {
        let data = await response.json();
        console.log(data);
        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        feelsLike.textContent = `Feels Like : ${data.main.feels_like}°C`;
        windSpeed.textContent = `${data.wind.speed} km/h`;
        document.querySelector(".info").style.opacity = 1;
        document.querySelector(".search input").value = "";
    } catch (error) {
        temperature.textContent = "City Not Found!!";
        document.querySelector(".info").style.opacity = 0;
        cityName.style.opacity = 0;
        cityName.style.opacity = 0;
        feelsLike.style.opacity = 0;
        document.querySelector(".search input").value = "";
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