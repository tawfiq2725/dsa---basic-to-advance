// [[2,3,1],[2,23,4,12],[12,4,12,3],[2,-4,12,42,14,2]]

const returnLargest = (
  arr = [
    [2, 3, 1],
    [2, 23, 4, 12],
    [12, 4, 12, 3],
    [2, -4, 12, 42, 14, 2],
  ]
) => {
  let result = [];
  for (let nums of arr) {
    let largest = 0;
    for (let num of nums) {
      if (largest < num) {
        largest = num;
      }
    }
    result.push(largest);
    largest = 0;
  }
  return result;
};
// console.log(returnLargest());

// common keys in objects

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 3,
  c: 2,
};
const commonKeys = (
  obj1 = {
    a: 1,
    b: 2,
    c: 3,
  },
  obj2 = {
    a: 3,
    c: 2,
    d: 3,
  }
) => {
  // imbuild
  let result = [];
  let object1 = Object.keys(obj1);
  for (let key of object1) {
    if (key in obj2) {
      result.push(key);
    }
  }
  return result;
};
// console.log(commonKeys());

const findSecondLargest = (arr = [1, 5, 2, 3, 4]) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (secondLargest < num && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};
// console.log(findSecondLargest());
const findSecondSmallest = (arr = [1, 5, 2, 3, 4]) => {
  let firstLargest = Infinity;
  let secondLargest = Infinity;

  for (let num of arr) {
    if (num < firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (secondLargest > num && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};
// console.log(findSecondSmallest())

/*
1 . Write a function to take an array of sorted elements and find the given target's index 
2 . If the target isn't present return where the position of the target will be in the given array.*
Ex:
nums = [2,4,5,7,8]
Target = 7
Ans = 3

nums = [2,4,5,7,8]
Target = 3
Ans = 1
*/

const findTargetIndex = (nums = [2, 4, 5, 7, 8], target = 68) => {
  if (nums.length === 1 || target <= 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (target + 1 === nums[i]) {
      return i;
    } else if (target - 1 === nums[i]) {
      return i + 1;
    } else {
      return nums.length;
    }
  }
};
// console.log(findTargetIndex());

// Proxy object
let obj = {
  name: "Tawfiq",
  age: 22,
};

let proxy = new Proxy(obj, {
  get: (target, key) => {
    return typeof target[key] === "number" ? target[key] + 1 : target[key];
  },
});
console.log(proxy.age);
console.log(proxy.name);
