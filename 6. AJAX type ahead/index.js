const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//data fetch from api - have 2 method
//---------method-1 [.then]

// fetch(endpoint)
//    .then(data => data.json())
//    .then(data => {
//     console.log(data);
//     cities.push(...data);
//    })

//-----------method-2 [async-await]

const getData = async ()=>{
   let res = await fetch(endpoint);
   res = await res.json();
  //  console.log(res);
   cities.push(...res);
   console.log(cities)
}

getData();



const findMatches = (value, cities)=>{
      return cities.filter((item)=>{
        let pattern = new RegExp(value, "gi"); //w3school
        
      })
      
}




const displayMatches = () => {
  const matchArray = findMatches(this.value, cities);

}








const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
suggestions.addEventListener("keyup", displayMatches);

