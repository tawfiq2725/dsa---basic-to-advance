const a = [10, 20, 30, 10, 40, 50, 10, 60, 70, 10];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Link {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.obj = {};
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  findOccurence() {
    const list = [];
    let curr = this.head;
    while (curr) {
      list.push(curr.value);
      curr = curr.next;
    }

    for (let num of list) {
      this.obj[num] = (this.obj[num] || 0) + 1;
    }
    return this.obj;
  }
  removeFinalOccurence(obj = this.obj) {
    let findMax;
    let timesMax = 0;
    for (let key in obj) {
      if (timesMax < obj[key]) {
        findMax = Number(key);
        timesMax = obj[key];
      }
    }
    let curr = this.head;
    let pre = null;
    let lastNode = null;
    let lastPre = null;

    while (curr) {
      if (curr.value === findMax) {
        lastNode = curr;
        lastPre = pre;
      }
      pre = curr;
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
    return curr.value;
  }

  print() {
    const list = [];
    let curr = this.head;
    while (curr) {
      list.push(curr.value);
      curr = curr.next;
    }
    const result = list.join("->");
    console.log(result);
  }
}

const link = new Link();
link.append(10);
link.append(20);
link.append(30);
link.append(10);
link.append(40);
link.append(50);
link.append(10);
link.append(60);
link.append(70);
link.append(10);
// link.print();
console.log(link.findOccurence());
console.log(link.removeFinalOccurence());
link.print();
