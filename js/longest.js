// -find the longest repeating character in “etrrrtutraaaaa” output should be “aaaaa”

// ip-“etrrrtutraaaaa”
// op-“aaaaa”

function longestRepeating(str = "etrrrtutraaaaa") {
  let obj = {};
  let result = "";
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  let max = 0;
  let maxChar;
  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      maxChar = key;
    }
  }

  console.log(obj);
  console.log(max);
  console.log(maxChar);
  for (let i = 0; i < max; i++) {
    if (maxChar) result += maxChar;
  }
  return result;
}
console.log(longestRepeating());
