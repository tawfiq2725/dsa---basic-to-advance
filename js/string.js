// String Coding Questions

/* 1. Given a string "hello", reverse it
    Input: "hello"
    Expected Output: "olleh"

2. Count the number of vowels in a string
    Input: "javascript"
    Expected Output: 3

3. Find the first non-repeated character
    Input: "programming"
    Expected Output: "p"

4. Check if string is palindrome
    Input: "racecar"
    Expected Output: true

5. Convert string to title case
    Input: "hello world"
    Expected Output: "Hello World"

6. Find the longest word in a string
    Input: "I love JavaScript programming"
    Expected Output: "JavaScript"

7. Count occurrence of specific character
    Input: "hello world", "l"
    Expected Output: 3

8. Remove all spaces from string
    Input: "  hello  world  "
    Expected Output: "helloworld"

9. Check if two strings are anagrams
    Input: "listen", "silent"
    Expected Output: true

10. Convert string to camelCase
     Input: "hello world javascript"
     Expected Output: "helloWorldJavascript"

// Array Coding Questions

1. Find the largest number in array
    Input: [1, 5, 2, 9, 3]
    Expected Output: 9

2. Remove duplicates from array
    Input: [1, 2, 2, 3, 3, 4, 5, 5]
    Expected Output: [1, 2, 3, 4, 5]

3. Find missing number in sequence
    Input: [1, 2, 4, 5]
    Expected Output: 3

4. Rotate array by k positions
    Input: [1, 2, 3, 4, 5], k=2
    Expected Output: [4, 5, 1, 2, 3]

5. Find intersection of two arrays
    Input: [1, 2, 3, 4], [3, 4, 5, 6]
    Expected Output: [3, 4]

6. Find pairs that sum to target
    Input: [2, 4, 5, 1, 3], target=5
    Expected Output: [[2,3], [4,1]]

7. Find second largest number
    Input: [10, 5, 8, 12, 3]
    Expected Output: 10

8. Group array elements by size
    Input: [1, 2, 3, 4, 5], size=2
    Expected Output: [[1,2], [3,4], [5]]

9. Find frequency of elements
    Input: [1, 2, 2, 3, 3, 3]
    Expected Output: {1:1, 2:2, 3:3}

10. Flatten nested array
     Input: [1, [2, 3], [4, [5, 6]]]
     Expected Output: [1, 2, 3, 4, 5, 6]
*/

const reverseString = (str = "hello") => {
  // method1
  //   let string = str.split("").reverse().join("");
  //   return string;
  //   -----------------------------------
  // method2
  //   let string = "";
  //   for (let char of str) {
  //      string = char+string
  //   }
  //   return string;
  // --------------------------------------
  //   method3
};
console.log(reverseString());
