const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// ----------
  // 1. Filter the list of inventors for those who were born in the 1500's

//   const updateInventors = inventors.filter((item)=>{
//        return item.year>=1500 && item.year<1600;
//   })

// OR

// const updateInventors = inventors.filter(function(item){
//     if(item.year>=1500 && item.year<1600)
//       return true;
//     else
//      return false;
// })


// //   console.log(updateInventors);
// console.table(updateInventors);

// ----------------------------------

 // 2. Give us an array of the inventor first and last names

//  const updateInventors = inventors.map((item)=>{
//     return `{First : ${item.first}, Last: ${item.last}}`;
//  })

//  console.log(updateInventors);

// ----------------------------------
    // 3. Sort the inventors by birthdate, oldest to youngest

// const sort = inventors.sort((a,b)=>{
//     if(a.year>b.year)
//       return 1;
//     else
//       return -1;

//     return 0;
// })

// or

// const sort = inventors.sort((a,b)=>{
//     return a.year-b.year;
// })

// console.table(sort);
// console.table(inventors);


// ----------------------------------
   // 4. How many years did all the inventors live?

// const reduce = inventors.reduce((a,item)=>{
//     a.push(item.passed - item.year);
//     return a;
// },[])

// const reduce = inventors.reduce((sum,item)=>{
//     // sum= sum + (item.passed - item.year);
//     // or direct return
//     return sum + (item.passed - item.year);;
// },0)

// const reduce = inventors.reduce((a,item)=>{
//     a.push(item.passed - item.year);
//     return a;
// },[]).sort((a,b)=>{
//    return a-b;
// })

// console.table(reduce);


// --------
 // 5. Sort the inventors by years lived

// const sortLive = inventors.sort((a,b)=>{
//    let a1 = a.passed - a.year;
//    let b1 = b.passed - b.year;
//    return a1-b1;
// })

// console.table(sortLive);

// -----------------------

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));


//------------------

// 6. Sort the people alphabetically by last name

// const sortLast = people.sort((a,b)=>{
//     // const [p,q] = a.split(', ');
//     // const [x,y] = b.split(', ');

//     // OR you dont use p & x so, no need to take it

//     const [,q] = a.split(', ');
//     const [,y] = b.split(', ');

//     return q>y?1:-1;
// })


// console.table(sortLast);


//---------------------------------------

 // 7. Sum up the instances of each of these

//  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];


//  const p = data.reduce((a,b)=>{
//     if(!a[b])
//       a[b]=0;

//     a[b]++;
    
//     return a;
//  },{});

//  console.log(p);

//----------------------------------------------------------------


//play with JS object

// const p = {
//     name: 'car',
//     color: "blue",
//     fun: [1,2,3,4,5],
//     age: 36,
//     tire: function() {
//         return `${this.name} ${this.color}`;
//     },
//     hd: {
//         color: "green",
//         age: "90"
//     }

// }

// // const t = "name";
// // p.fun.push(100)
// console.log(p["hd"]["colo"]);