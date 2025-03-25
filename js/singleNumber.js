// single number

// const singleNumber = (nums = [3, 2, 3]) => {
//   let result =0;
//   for(let num of nums){
//     result = result ^ num
//   }
//   return result
// };
// console.log(singleNumber());

// const singleNumber = (nums = [3, 2, 3]) => {
//   let obj = {};
//   for (let num of nums) {
//     obj[num] = (obj[num] || 0) + 1;
//   }
//   for (let key in obj) {
//     if (obj[key] === 1) {
//       return parseInt(key);
//     }
//   }
// };
// console.log(singleNumber());
