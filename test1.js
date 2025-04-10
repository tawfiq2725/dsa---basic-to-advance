// start this by 10 - 11.30

// sort - 5
// bubble

function bubble(arr = [1, 6, 4, 3, 2, 3]) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(bubble());

function selectionSort(arr = [1, 6, 4, 3, 2, 3]) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort());

function insertion(arr = [1, 6, 4, 3, 2, 3]) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let min = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > min) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = min;
  }
  return arr;
}
// console.log(insertion());

function mergeSort(arr = [1, 6, 4, 3, 7, 2, 3]) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(mid));
  let right = mergeSort(arr.slice(0, mid));
  return merge(left, right);
}
function merge(left, right) {
  let res = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  return res.concat(left.slice(i)).concat(right.slice(j));
}
// console.log(mergeSort());

function quickSort(arr = [1, 2, 6, 5, 4, 3, 9]) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [],
    right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort());

// queue - dequeue

class Node {
  constructor(val, priority) {
    this.value = val;
    this.next = null;
    this.priority = priority;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // isEmpty
  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // insert
  enqueue(val, priority) {
    const node = new Node(val, priority);
    if (this.isEmpty() || priority < this.head.priority) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.priority <= priority) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  // remove - front
  dequeue() {
    let remove;
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      remove = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return remove;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("No Elemes");
    }
    return this.head.value;
  }

  print() {
    let list = [];
    let curr = this.head;
    while (curr) {
      list.push(curr.value);
      curr = curr.next;
    }
    console.log(list.join("->"));
    return list;
  }
}

const queue = new Queue();
queue.enqueue("clean", 4);
queue.enqueue("sleep", 1);
queue.enqueue("study", 2);
queue.enqueue("play", 3);
// queue.print();
// console.log(queue.peek())

// without adding priority property just add based on priority

// reverse the linkedlist

// function reverse() {
//   if (this.isEmpty()) {
//     console.log("no ele");
//   } else {
//     let curr = this.head;
//     let pre = null;

//     while (curr) {
//       let next = curr.next;
//       curr.next = pre;
//       pre = curr;
//       curr = next;
//     }
//     this.head = pre;
//   }
// }

// delete - front , mid , last , index - using ll and array

// add - front , mid , last , index - using ll and array

// recursion - fibnocci 2, prime , binary , reverse ll

// Function to get the nth Fibonacci number without recursion
// function fibnocci(n = 55) {
//   let a = 0,
//     b = 1,
//     c;
//   if (n <= 1) {
//     return 1;
//   }
//   for (let i = 1; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fibnocci())

function fibnocci(n = 15) {
  if (n <= 1) {
    return n;
  }
  return fibnocci(n - 1) + fibnocci(n - 2);
}
// console.log(fibnocci());

// Function to get the Fibonacci series up to the nth number without recursion
function helper(n = 10) {
  let push = [0, 1];
  if (n <= 1) {
    return n;
  }

  for (let i = 1; i < n; i++) {
    push.push(fibnocci(i));
  }
  return push;
}
// console.log(helper())

// function fi
// bonacciSeries(n) {
//   let series = [];
//   let a = 0,
//     b = 1,
//     c;
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       series.push(a);
//     } else if (i === 1) {
//       series.push(b);
//     } else {
//       c = a + b;
//       series.push(c);
//       a = b;
//       b = c;
//     }
//   }
//   return series;
// }
// console.log(fibonacciSeries(55)); // Output: [0, 1, 1, 2, 3] (Fibonacci series up to 5 numbers)

// Example usage:
// console.log(fibonacci(5)); // Output: 5 (5th Fibonacci number)

// dll - add , delete , search , reverse

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//     this.pre = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   add() {}
// }

// binary search
// function binarySearch(arr = [1, 2, 4, 5, 6, 7, 8], tar = 8) {
//   let left = 0,
//     right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === tar) {
//       return mid;
//     } else if (arr[mid] < tar) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch());

function binarySearch(arr = [1, 2, 3, 4, 5, 6, 7], tar = 2) {
  let left = 0,
    right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] < tar) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// console.log(binarySearch())

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function removePrimeNumberS(arr = [1, 2, 3, 4, 5, 6, 7]) {
  let result = arr.filter((num) => {
    return !isPrime(num);
  });

  return result;
}

// console.log(removePrimeNumberS());

// let arr = [1, 2, 4, 10];
// console.log(arr);
// arr[100] = 100;

// console.log(arr[100]);
// console.log(arr[99]);
// console.log(arr)

function long(str = "Hi hello this is Roshan") {
  let word = "";
  let longest = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== " " && str[i] !== undefined) {
      word += str[i];
    } else {
      if (word.length > longest.length) {
        longest = word;
        word = "";
      }
    }
  }

  return word;
}

console.log(long());
