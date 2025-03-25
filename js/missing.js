// missing number

// const input = [1, 2, 3];

const missingNumber = (input = [0, 1]) => {
  let sortedArr = input.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (i !== input[i]) {
      return i;
    }
  }
  return sortedArr.length
};
console.log(missingNumber());
