// const reverseIntege = (int = 123) => {
//   return parseInt(int.toString().split("").reverse().join(""));
// };
// console.log(reverseInteger());

const reverseInteger = (int = -123) => {
  let string = int.toString();
  let flag = false;
  let result = "";
  if (int < 0) {
    flag = true;
  }
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  if (flag) {
    return -parseInt(result);
  }
  return parseInt(result)
};
console.log(reverseInteger());
// const inte = -123;
// const str = inte.toString();
// console.log(typeof parseInt(str[0]) == "number");
