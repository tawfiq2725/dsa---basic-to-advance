/*
You are given two strings s and t, both consisting 
of english letters. Return the number of distinct subsequences of s which are equal to t.


Input: s = "caaat", t = "cat"
Output: 3

Input: s = "xxyxy", t = "xy"
Output: 5

*/

const subsequences = (string = "caaat", word = "cat") => {
  if (string.length === 1 && word.length === 1) return 1;
  let lengthS = string.length;
  let count = 0;
  let current=""
  for (let i = 0; i < lengthS; i++) {

  }
};
console.log(subsequences());

