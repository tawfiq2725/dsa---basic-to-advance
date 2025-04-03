// String Manipulation Questions

// 3. Input: "hello world"
//    Output: "Hello World"
//    Question: Write a function to convert string to title case.

const titleCase = (str = "hello world") => {
  const imbuild = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  //   return result;

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
};
// console.log(titleCase());

// 4. Input: "racecar"
//    Output: true
//    Question: Write a function to check if string is palindrome.

// 5. Input: "leetcode"
//    Output: "l"
//    Question: Write a function to find first non-repeating character.

// 6. Input: str1 = "listen", str2 = "silent"
//    Output: true
//    Question: Write a function to check if two strings are anagrams.

// 7. Input: "programming"
//    Output: "progamin"
//    Question: Write a function to remove duplicate characters.

const removeDuplicates = (str = "programming") => {
  // imbuild
  let result = "";
  let set = new Set();
  for (let char of str) {
    if (!set.has(char)) {
      set.add(char);
      result += char;
    }
  }
  return result;
};
// console.log(removeDuplicates());
// 8. Input: "aabbbcccc"
//    Output: "a2b3c4"
//    Question: Write a function to compress the string.

const compressString = (str = "aabbbcccc") => {
  let obj = {};
  let result = "";
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let key in obj) {
    result += `${key}${obj[key]}`;
  }
  return result
};
// console.log(compressString());

// 9. Input: "This is a sample sentence"
//    Output: 5
//    Question: Write a function to count words in a sentence.

// 10. Input: "hello world"
//    Output: "HELLO world"
//    Question: Write a function to capitalize first word only.
