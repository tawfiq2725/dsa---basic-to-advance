// // currying

// function call(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(call(1)(2)(3))

// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(1,2,3))

// closure

// function outer() {
//   let name = "Roshan";

//   function inner() {
//     return "Heelo " + name;
//   }

//   return inner();
// }
// console.log(outer());

// proxy object

let obj = {
  name: "Taw",
  age: 24,
};
// const handler = {
//   get: (target, prop) => {
//     console.log(`Accessing property: ${prop}`);
//     return target[prop];
//   },
// };
// const proxy = new Proxy(obj, {
//     getPrototypeOf:(tar),
//     get,
//     getOwnPropertyDescriptor
// });
// console.log(proxy)

// function secondLargest(arr = [1, 4, 2, 7, 9,8, 6]) {
//   let first = -Infinity;
//   let second = -Infinity;

//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }

//   return second;
// }
// // console.log(secondLargest());
// function secondLargest(arr = [1, 4, 2, 7, 9,8, 6]) {
//   let first = Infinity;
//   let second = Infinity;

//   for (let num of arr) {
//     if (num < first) {
//       second = first;
//       first = num;
//     } else if (num < second && num !== first) {
//       second = num;
//     }
//   }

//   return second;
// }
// console.log(secondLargest());

class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashkey(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  insert(key, value) {
    let index = this.hashkey(key);
    let bucket = this.table[index];
    if (!bucket) {
      bucket = [[key, value]];
      this.table[index] = bucket;
    } else {
      let sameKeyvalue = bucket.find((item) => item[0] === key);
      if (sameKeyvalue) {
        sameKeyvalue[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    let index = this.hashkey(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyvalue = bucket.find((item) => item[0] === key);
      if (sameKeyvalue) {
        return sameKeyvalue[1];
      }
    }
    return undefined;
  }
  remove(key) {
    let index = this.hashkey(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyvalue = bucket.find((item) => item[0]);
      if (sameKeyvalue) {
        bucket.splice(bucket.indexOf(sameKeyvalue), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table) {
        console.log(i, this.table[i]);
      }
    }
  }
}

function removeDuplicates(str = "suraj is a sadist") {
  const hash = new hashTable(50);
  let res = "";
  for (let char of str) {
    if (!hash.get(char)) {
      hash.insert(char, true);
      res += char;
    }
  }
  return res;
}
// console.log(removeDuplicates());

// class Stack {
//   constructor() {
//     this.size = 0;
//     this.stack = [];
//   }

//   push(val) {
//     if (this.stack.length === 0) {
//       this.stack[this.size] = val;
//     } else {
//       this.stack[this.stack.length] = val;
//     }
//     this.size++;
//   }

//   pop() {
//     if (this.size === 0) {
//       throw new Error("Underflow");
//     } else {
//       let val = this.stack[this.stack.length - 1];
//       this.stack[this.stack.length - 1] = undefined;
//       this.size--;
//       this.size = this.stack.length;
//       return val;
//     }
//   }
//   get(val) {
//     if (this.stack.length === 0) {
//       return "No ele";
//     } else {
//       for (let i = 0; i < this.stack.length; i++) {
//         if (val === this.stack[i]) {
//           return i;
//         }
//       }
//       return -1;
//     }
//   }
//   display() {
//     return [...this.stack];
//   }
// }
// let str = "strings";

// function remove(str="roshanreji"){
//     let stack = new Stack();

// }
// console.log(remove())

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.display());
// stack.pop(30);
// console.log(stack.display());

// function palindrome(str = "madam") {
//   if (str.length <= 1) {
//     return false;
//   }

//   if (str[0] === str[str.length - 1]) {
//     return true;
//   }

//   return palindrome(str.slice(1, -1));
// }
// console.log(palindrome());

// function reverse(str = "roshan") {
//   if (str.length <= 1) {
//     return str;
//   }

//   return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse());

// let map = new Map()

// map.set("name","Roshan")
// map.set("name","Tawfiq")
// console.log(map)


