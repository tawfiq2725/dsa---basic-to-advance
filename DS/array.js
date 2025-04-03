class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const array = new MyArray();
array.push("Tawfiq");
array.push("Tawfiq");
array.push("Tawfiq");
array.push("Tawfiq");
console.log(array);
console.log(array.pop());
console.log(array);
