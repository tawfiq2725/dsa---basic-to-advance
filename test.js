// function removeDuplicates(str = "programming") {
//     if (str.length < 1) {
//         return str;
//     }

//     let hashTable = new Set();
//     let result = "";

//     for (let char of str) {
//         if (!hashTable.has(char)) {
//             hashTable.add(char);
//             result += char;
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates());

function removeDuplicates(str = "programming") {
  let obj = {};
  let result = "";

  for (let char of str) {
    if (!obj[char]) {
      obj[char] = true;
      result += char;
    }
  }

  return result;
}
// console.log(removeDuplicates());

const ab = [
  {
    a: [3, 34, 33],
    n: 34,
  },
  {
    a: [3, 34, 33],
    n: 34,
  },
  {
    a: [3, 34, 33],
    n: 34,
  },
  {
    a: [3, 34, 33],
    n: 34,
  },
];

// function addAll(arr = ab) {
//   let result = 0;

//   for (let ele of arr) {
//     //arr

//     for (let nums in ele) {
//       //obj

//       if (Array.isArray(ele[nums])) {

//         for (let num of ele[nums]) {
//           result = result + Number(num);
//         }
//       } else {
//         result += Number(ele[nums]);
//       }
//     }
//   }
//   return result;
// }
// console.log(addAll());

function addAll(arr = ab) {
  if (arr.length === 0) {
    return 0;
  }

  const [first, ...rest] = arr;
  let sum = 0;

  for (let key in first) {
    if (Array.isArray(first[key])) {
      sum += first[key].reduce((acc, num) => acc + Number(num), 0);
    } else {
      sum += Number(first[key]);
    }
  }

  return sum + addAll(rest);
}
// console.log(addAll());

function addAll(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let [first, ...rest] = arr;
  let sum = 0;
  for (let nums in first) {
    if (Array.isArray(first[nums])) {
      sum += first[nums].reduce((acc, curr) => acc + curr, 0);
    } else {
      sum += first[nums];
    }
  }

  return sum + addAll(rest);
}
// console.log(addAll(ab));

// console.log(1 + + "1")
// console.log("a" + 1)
// console.log("A"+ + 1)
// console.log(null == undefined)
// console.log(null === undefined)

function reverseDigit(digit = 123) {
  console.log(digit);
  let str = digit.toString();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return Number(result);
}
// console.log(reverseDigit()); //321

// recursion

// 5
// 120
function factorial(num = 6) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
// console.log(factorial());

// check paranthesis is valid
// {} [] ()

function validParanthesis(str = "{}") {
  let stack = [];
  let bracks = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let brack of str) {
    if (bracks[brack]) {
      stack.push(brack);
    } else {
      let last = stack.pop();
      if (bracks[last] !== brack) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

