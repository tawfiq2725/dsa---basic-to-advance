// function removeNull(arr = [null, undefined, 1, 5, null]) {
//   let result = [];
//   for (let num of arr) {
//     typeof num === "number" ? result.push(num) : null;
//   }
//   return result;
// }
// console.log(removeNull());

// function high(callback) {
//   return function (...args) {
//     callback(...args);
//     return `HELLO ${args}`;
//   };
// }

// function call(name) {
//   return name;
// }

// const callabckfucn = high(call);
// console.log(callabckfucn("Tawfiq"));
// let obj = {
//   a: 10,
//   b: 20,
//   c: function () {
//     return Number(this.a) + Number(this.b);
//   },
// };

// console.log(obj);

// let x = 10;
// let y = 20;

// console.log(eval(Number(x) + Number(y)));

// const sym = Symbol("hello");
// const sym2 = Symbol("hello");
// console.log(sym === sym2);

const arr = [
  [2, 3, 1],
  [2, 23, 4, 12],
  [12, 4, 12, 3],
  [2, -4, 12, 42, 14, 2],
];
// in this question uve to find the largest fro m each subarray

function dsa(array = arr) {
  let result = [];
  for (let sub of array) {
    let max = 0;

    for (let num of sub) {
      if (max < num) {
        max = num;
      }
    }
    result.push(max);
    max = 0;
  }
  let i = 1;
  for (let num of result) {
    console.log(`Number ${i} from array ${num}`);
    i++;
  }
}

// dsa();

// function Interval() {
//   let i = 1;
//   let timer = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 10) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }
// Interval();

// for(let loop in obj){
//     console.log(loop)
// }
// let obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// Object.defineProperty(obj, "age", { value: 21, writeable: false });

// console.log(obj);

// function call() {
//   return "tawfiq";
// }

// function hih(callback) {
//   return function () {
//     console.log(callback());
//     return "callback";
//   };
// }
// const callb = hih(call);
// console.log(callb());
