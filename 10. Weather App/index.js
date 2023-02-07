const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '239d80bcbdmshb698dece18354d6p1b2254jsne161b8fa9db8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const weather4 = (city) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct2.innerHTML = response.cloud_pct;
  
        temp3.innerHTML = response.temp;
  
        feels_like2.innerHTML = response.feels_like;
  
        humidity3.innerHTML = response.humidity;
  
        min_temp2.innerHTML = response.min_temp;
  
        max_temp2.innerHTML = response.max_temp;
  
        wind_speed3.innerHTML = response.wind_speed;
  
        wind_degrees2.innerHTML = response.wind_degrees;
  
        sunrise2.innerHTML = response.sunrise;
  
        sunset2.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

const weather3 = (city) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct3.innerHTML = response.cloud_pct;
  
        temp4.innerHTML = response.temp;
  
        feels_like3.innerHTML = response.feels_like;
  
        humidity4.innerHTML = response.humidity;
  
        min_temp3.innerHTML = response.min_temp;
  
        max_temp3.innerHTML = response.max_temp;
  
        wind_speed4.innerHTML = response.wind_speed;
  
        wind_degrees3.innerHTML = response.wind_degrees;
  
        sunrise3.innerHTML = response.sunrise;
  
        sunset3.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

  const weather2 = (city) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        cloud_pct4.innerHTML = response.cloud_pct;
  
        temp5.innerHTML = response.temp;
  
        feels_like4.innerHTML = response.feels_like;
  
        humidity5.innerHTML = response.humidity;
  
        min_temp4.innerHTML = response.min_temp;
  
        max_temp4.innerHTML = response.max_temp;
  
        wind_speed5.innerHTML = response.wind_speed;
  
        wind_degrees4.innerHTML = response.wind_degrees;
  
        sunrise4.innerHTML = response.sunrise;
  
        sunset4.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };



const weather1 = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
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
};

const getWeather = (city) => {
  city_name.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);


      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;

      feels_like.innerHTML = response.feels_like;
  
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
    

      min_temp.innerHTML = response.min_temp;
  
 
      max_temp.innerHTML = response.max_temp;
   
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    
   
      wind_degrees.innerHTML = response.wind_degrees;


      sunrise.innerHTML = response.sunrise;
 

      sunset.innerHTML = response.sunset;
   

    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

//bydefault call 1st time
getWeather("Kolkata");

//city1 - Delhi
weather4("Delhi");

//city2 - Boston
weather3("Boston");

//city3 - Lucknow
weather2("Lucknow");
//city4 - Boston
weather1("Kolkata");

//city2 - Boston
weather("siliguri")



