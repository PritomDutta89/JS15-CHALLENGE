const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

//data fetch from api - have 2 method
//---------method-1 [.then]

// fetch(endpoint)
//    .then(item => item.json())
//    .then(data => {
//     console.log(data);
//     cities.push(...data);
//    });

//-----------method-2 [async-await]

const getData = async () => {
  let res = await fetch(endpoint);
  res = await res.json();
  //  console.log(res);
  cities.push(...res);
  console.log(cities);
};

getData();

const findMatches = (data, cities) => {
  return cities.filter((item) => {
    const pattern = new RegExp(data, "gi"); //w3school
    return item.city.match(pattern) || item.state.match(pattern);
  });

  // return updateCities;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//here we dont use arrow function, bcz for get input value we use this keyword, but we know in arrow function this works different way than normal function, if you use arrow function here this gives undefine [Source - w3school]
function displayMatches() {
  // console.log(this.value);
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((item) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = item.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = item.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
       <li>
         <span class="name">${cityName}, ${stateName}</span>
         <span class="population">${numberWithCommas(item.population)}</span>
       </li>
      `;
    }).join(" ");

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
