// 1) Check if any number in the array is divisible by 5 and if true,find its index

// const nums =  [3, 6, 10, 12]

// nums.reduce((tot,curr, index)=>{
//   if(curr % 5 === 0){
//     console.log(`this number is: ${curr}, index: ${index}`)
//   }
// },0)


// 2) Filter out negative numbers from a nested array

// const nums = [[1, -2], [3, -4], [5]]

// console.log(nums.flat(Infinity).filter((number)=> number > 0))


// 3) Filter out non-array elements and then check if the remaining elements are arrays
//  e.g: [1, [2, 3], "hello", [4]] → true for remaining arrays

// const arr = [1, [2, 3], "hello", [4]]

// console.log(arr.filter(item => Array.isArray(item)))


// 4) Flatten a nested array and find the sum of all elements

// const arr = [[2, 4], [6, 8]];

// console.log(arr.flat(Infinity).reduce((tot,curr)=> tot + curr))


// 5) Flatten a nested array, then square each number, and calculate sum the squares

// const arr = [[2, 4], [6, 8]];

// console.log(arr.flat(Infinity).reduce((tot,curr)=>{
//   return tot + curr * curr
// },0))


// 6) Get the total number of characters by eye color (hint. a map of eye color to count)

// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// const eyeColorGrouped = characters.reduce((group,character)=>{
//   const eyeColor = character.eye_color;
//   if(!group[eyeColor]){
//     group[eyeColor] = 1;
//   }else{
//     group[eyeColor] = group[eyeColor] + 1
//   }
//   return group
// },{})

// console.log(eyeColorGrouped)