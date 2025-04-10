class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  addFront(value) {
    if (this.stack.length === 0) {
      this.stack[0] = value;
    } else {
      for (let i = this.size; i > 0; i--) {
        this.stack[i] = this.stack[i - 1];
      }
      this.stack[0] = value;
    }
    this.size++;
  }

  addLast(value) {
    this.stack[this.size] = value;
    this.size++;
  }

  addMiddle(value) {
    const mid = Math.floor(this.size / 2);
    for (let i = this.size; i > mid; i--) {
      this.stack[i] = this.stack[i - 1];
    }
    this.stack[mid] = value;
    this.size++;
  }

  deletFirst() {
    if (this.size === 0) {
      throw new Error("No Element");
    } else {
      for (let i = 0; i < this.size - 1; i++) {
        this.stack[i] = this.stack[i + 1];
      }
      this.stack[this.size - 1] = undefined;
      this.size--;
    }
  }

  deleteLast() {
    if (this.size === 0) {
      throw new Error("No Element");
    } else {
      const element = this.stack[this.size - 1];
      this.stack[this.size - 1] = undefined;
      this.size--;
      this.stack.length = this.size;
      return element
    }
  }

  log() {
    console.log([...this.stack]);
  }
}

const stack = new Stack();
stack.addFront(10);
stack.addFront(20);
stack.addFront(30);
stack.addFront(40);
stack.addLast(20);
stack.addLast(30);
stack.addLast(40);
stack.log();
console.log(stack.deleteLast());
stack.log()
