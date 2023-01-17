const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


//some 

// const some = people.some((item)=>{
//     const date = (new Date()).getFullYear();
//     return date - item.year > 100;
// })

// console.log(some)

//every

// const every = people.every((item)=>{
//     const date = (new Date()).getFullYear();
//     return date - item.year > 18;
// })

// console.log(every)

//find

// const find = people.find((item)=>{
//     return item.name === 'Wes';
// })

// console.log(find)


//findIndex

// const find = people.findIndex((item)=>{
//     return item.name === 'Irv';
// })

// console.log(find)



//splice

const splice = people.splice(1,1)

console.log(people)