// const consecutiveNums = (nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]) => {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   if (nums.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   const sortedArr = nums.sort((a, b) => a - b).map((num)=>{
//     num>0
//   });
//   console.log(sortedArr);
//   const lengthArr = sortedArr.length;
//   for (let i = 0; i < lengthArr; i++) {
//     if (sortedArr[i] === sortedArr[i + 1] - 1) {
//       count++;
//     }
//   }
//   return count + 1;
// };
// console.log(consecutiveNums());

const consecutiveNums = (nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]) => {
  const set = new Set(nums);
  let count = 1;
  let max = 1;
  if (nums.length === 1) return 1;
  if (nums.length === 0) return 0;
  const sortedArr = [...set].sort((a, b) => a - b);
  const lengthArr = sortedArr.length;
  for (let i = 1; i < lengthArr; i++) {
    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  return max;
};
console.log(consecutiveNums());
