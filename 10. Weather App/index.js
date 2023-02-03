const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "",
  },
};

// const weather = (city)=>{
//     fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(response);

//         cloud_pct2.innerHTML = response.cloud_pct;
//         cloud_pct3.innerHTML = response.cloud_pct;
//         cloud_pct4.innerHTML = response.cloud_pct;
//         cloud_pct5.innerHTML = response.cloud_pct;
//         temp.innerHTML = response.temp;
//         temp2.innerHTML = response.temp;
//         temp3.innerHTML = response.temp;
//         temp4.innerHTML = response.temp;
//         temp5.innerHTML = response.temp;
//         temp6.innerHTML = response.temp;
//         feels_like.innerHTML = response.feels_like;
//         feels_like2.innerHTML = response.feels_like;
//         feels_like3.innerHTML = response.feels_like;
//         feels_like4.innerHTML = response.feels_like;
//         feels_like5.innerHTML = response.feels_like;
//         humidity.innerHTML = response.humidity;
//         humidity2.innerHTML = response.humidity;
//         humidity3.innerHTML = response.humidity;
//         humidity4.innerHTML = response.humidity;
//         humidity5.innerHTML = response.humidity;
//         humidity6.innerHTML = response.humidity;
//         min_temp.innerHTML = response.min_temp;
//         min_temp2.innerHTML = response.min_temp;
//         min_temp3.innerHTML = response.min_temp;
//         min_temp4.innerHTML = response.min_temp;
//         min_temp5.innerHTML = response.min_temp;
//         max_temp.innerHTML = response.max_temp;
//         max_temp2.innerHTML = response.max_temp;
//         max_temp3.innerHTML = response.max_temp;
//         max_temp4.innerHTML = response.max_temp;
//         max_temp5.innerHTML = response.max_temp;
//         wind_speed.innerHTML = response.wind_speed;
//         wind_speed2.innerHTML = response.wind_speed;
//         wind_speed3.innerHTML = response.wind_speed;
//         wind_speed4.innerHTML = response.wind_speed;
//         wind_speed5.innerHTML = response.wind_speed;
//         wind_speed6.innerHTML = response.wind_speed;
//         wind_degrees.innerHTML = response.wind_degrees;
//         wind_degrees2.innerHTML = response.wind_degrees;
//         wind_degrees3.innerHTML = response.wind_degrees;
//         wind_degrees4.innerHTML = response.wind_degrees;
//         wind_degrees5innerHTML = response.wind_degrees;
//         sunrise.innerHTML = response.sunrise;
//         sunrise2.innerHTML = response.sunrise;
//         sunrise3.innerHTML = response.sunrise;
//         sunrise4.innerHTML = response.sunrise;
//         sunrise5.innerHTML = response.sunrise;
//         sunset.innerHTML = response.sunset;
//         sunset2.innerHTML = response.sunset;
//         sunset3.innerHTML = response.sunset;
//         sunset4.innerHTML = response.sunset;
//         sunset5.innerHTML = response.sunset;
//     })
//     .catch((err) => console.error(err));
// }

const weather = (city)=>{
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);

  
        cloud_pct5.innerHTML = response.cloud_pct;

        temp6.innerHTML = response.temp;
      
        feels_like5.innerHTML = response.feels_like;
      
        humidity6.innerHTML = response.humidity;
      
        min_temp5.innerHTML = response.min_temp;
   
        max_temp5.innerHTML = response.max_temp;
        
        wind_speed6.innerHTML = response.wind_speed;
     
        wind_degrees5.innerHTML = response.wind_degrees;
      
        sunrise5.innerHTML = response.sunrise;
     
        sunset5.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}


const getWeather = (city)=>{
        city_name.innerHTML = city;
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);

        cloud_pct2.innerHTML = response.cloud_pct;
        cloud_pct3.innerHTML = response.cloud_pct;
        cloud_pct4.innerHTML = response.cloud_pct;
        cloud_pct5.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        temp3.innerHTML = response.temp;
        temp4.innerHTML = response.temp;
        temp5.innerHTML = response.temp;
        temp6.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        feels_like2.innerHTML = response.feels_like;
        feels_like3.innerHTML = response.feels_like;
        feels_like4.innerHTML = response.feels_like;
        feels_like5.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        humidity3.innerHTML = response.humidity;
        humidity4.innerHTML = response.humidity;
        humidity5.innerHTML = response.humidity;
        humidity6.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        min_temp2.innerHTML = response.min_temp;
        min_temp3.innerHTML = response.min_temp;
        min_temp4.innerHTML = response.min_temp;
        min_temp5.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        max_temp2.innerHTML = response.max_temp;
        max_temp3.innerHTML = response.max_temp;
        max_temp4.innerHTML = response.max_temp;
        max_temp5.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_speed3.innerHTML = response.wind_speed;
        wind_speed4.innerHTML = response.wind_speed;
        wind_speed5.innerHTML = response.wind_speed;
        wind_speed6.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        wind_degrees2.innerHTML = response.wind_degrees;
        wind_degrees3.innerHTML = response.wind_degrees;
        wind_degrees4.innerHTML = response.wind_degrees;
        wind_degrees5innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunrise2.innerHTML = response.sunrise;
        sunrise3.innerHTML = response.sunrise;
        sunrise4.innerHTML = response.sunrise;
        sunrise5.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        sunset2.innerHTML = response.sunset;
        sunset3.innerHTML = response.sunset;
        sunset4.innerHTML = response.sunset;
        sunset5.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}

submit.addEventListener("click", (e) =>{
    e.preventDefault();
    getWeather(city.value)
})

//bydefault call 1st time
getWeather("Kolkata")

//city1 - Delhi
weather("Delhi")

//city2 - Boston
weather("Boston")

//city2 - Boston
weather("Lucknow")

//city2 - Boston
weather("siliguri")
