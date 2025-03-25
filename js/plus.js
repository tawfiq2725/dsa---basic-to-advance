// plus one

const plusOne = (digits = [1, 2, 3, 4]) => {
  let sum = "";
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  let result = String(parseInt(sum) + 1);
  let array = [];
  for (let i = 0; i < result.length; i++) {
    array[i] = parseInt(result[i]);
  }
  return array;
};
console.log(plusOne());
