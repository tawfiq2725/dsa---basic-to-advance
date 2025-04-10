const debounce = (func, delay) => {
  let timer;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const gree = () => {
  console.log("Hii");
};

const global = debounce(gree, 1000);
// global();

// print 100 to 1 with 1 second delay

const reverse = () => {
  setTimeout(() => {
    for (let i = 100; i >= 1; i--) {
      console.log(i);
    }
  }, 1000);
};
// reverse();

// print tomorrow date
let date = new Date().toLocaleDateString();
// console.log(date);
let tomorrow = new Date(date);
tomorrow.setDate(tomorrow.getDate() + 1);
// console.log("Tomorrow's Date", tomorrow.toLocaleDateString());

// generator function

function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// Higher order function and callback funciton

function HigherOrderfunction(callback) {
  return function (...args) {
    callback(...args);
  };
}

function call(name) {
  console.log("Hello ", name);
}

let callbackFunction = HigherOrderfunction(call);
// callbackFunction("Tawfiq");

function Higher(callback) {
  console.log("Hello this is hihger order function");
  callback();
}

function callback() {
  console.log("Hello Callback function");
}

// Higher(callback);

// Currying
function mult(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(mult(3)(2)(1));

function promise() {
  let condition = false;
  return new Promise((resolve, rejected) => {
    if (condition) {
      resolve("This promise resolved ");
    } else {
      rejected("This promise has some issues");
    }
  });
}

// promise()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log("Promise Objecte Successfully done")
//   })

const promiseFunc = async () => {
  try {
    Promise.reject("Rejected");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
  }
};
// let check = await promiseFunc();

const person = {
  name: "Tawfiq",
  greet: () => {
    console.log("Hello, my name is " + this.name);
  },
};

//   person.greet();

const person1 = { name: "Tawfiq" };
const person2 = { name: "Sirajudeen" };
function wait() {
  const introduce = (city) => {
    console.log(`Hello, I am ${this.name} from ${city}`);
  };
  introduce();
}

wait.call(person1, "Chennai");
wait.call(person2, "Mumbai");
