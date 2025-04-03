// EASY PROBLEMS (10)

// 1. Sum of Natural Numbers
// Input: 5
// Output: 15 (1+2+3+4+5)
function sumOfNaturalNumbers(n) {
  // Your code here
  if (n === 1) {
    return 1;
  }
  return n + sumOfNaturalNumbers(n - 1);
}
// console.log(sumOfNaturalNumbers(5));

// 2. Factorial
// Input: 5
// Output: 120 (5*4*3*2*1)
function factorial(n) {
  // Your code here
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));

// 3. Fibonacci Series
// Input: 6
// Output: 8 (Sequence: 0,1,1,2,3,5,8)
function fibonacci(n) {
  // Your code here
  if (n <= 1 && n >= 0) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(6));

// 4. Count Digits
// Input: 123
// Output: 3 (Number of digits)
function countDigits(n = 123) {
  // Your code here
  if (n === 0) {
    return 0;
  }
  return 1 + countDigits(Math.floor(n / 10));
}
// console.log(countDigits());

// 5. Sum of Digits
// Input: 123
// Output: 6 (1+2+3)
function sumOfDigits(n) {
  // Your code here
  if (n === 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// 6. Product of Array
// Input: [1,2,3,4]
// Output: 24
function productOfArray(arr = [1, 2, 3, 4]) {
  // Your code here
  if (arr.length <= 0) {
    return 1;
  }
  return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
}
// console.log(productOfArray());

// 7. Power of Two
// Input: 16
// Output: true (16 = 2^4)
// Input: 12
// Output: false
function isPowerOfTwo(n) {
  // Your code here
}

// 8. Print Numbers
// Input: 5
// Output: 5 4 3 2 1
function printNumbers(n = 1) {
  // Your code here 
  if (n === 5) {
    return [5];
  }
  return [...printNumbers(n + 1), n];
}
// console.log(printNumbers());

// 9. GCD
// Input: a = 48, b = 18
// Output: 6 (Greatest Common Divisor)
// Input: a = 54, b = 24
// Output: 6
function gcd(a, b) {
  // Your code here
}

// 10. Count Zeros
// Input: 1020
// Output: 2 (number of zeros)
// Input: 10204
// Output: 2
function countZeros(n) {
  // Your code here
}

// MEDIUM PROBLEMS (10)

// 1. Array Sum
function arraySum(arr) {
  // Your code here
}

// 2. String Reverse
function reverseString(str) {
  // Your code here
}

// 3. Power Function
function power(x, n) {
  // Your code here
}

// 4. Binary Search
function binarySearch(arr, target, start, end) {
  // Your code here
}

// 5. Print Array Pattern
// Input: 3
// Output: [*,**,***]
function arrayPattern(n) {
  // Your code here
}

// 6. First Uppercase
// Find first uppercase letter
function firstUppercase(str) {
  // Your code here
}

// 7. String Length
// Calculate string length recursively
function strLength(str) {
  // Your code here
}

// 8. Array Product Except Self
function productExceptSelf(arr, i) {
  // Your code here
}

// 9. Remove Duplicates
function removeDuplicates(str) {
  // Your code here
}

// 10. Check Sorted Array
function isSorted(arr) {
  // Your code here
}

// HARD PROBLEMS (10)

// 1. Palindrome Check
function isPalindrome(str) {
  // Your code here
}

// 2. Subset Sum
function hasSubsetSum(arr, sum) {
  // Your code here
}

// 3. Tower of Hanoi
function towerOfHanoi(n, source, auxiliary, destination) {
  // Your code here
}

// 4. Permutations
function findPermutations(str) {
  // Your code here
}

// 5. N Queens
function solveNQueens(n) {
  // Your code here
}

// 6. Rat in Maze
function ratInMaze(maze) {
  // Your code here
}

// 7. Word Break
function wordBreak(str, dictionary) {
  // Your code here
}

// 8. Regular Expression Matching
function regexMatch(str, pattern) {
  // Your code here
}

// 9. Combinations
function findCombinations(arr, r) {
  // Your code here
}

// 10. Sudoku Solver
function solveSudoku(board) {
  // Your code here
}

// Test cases can be added here
