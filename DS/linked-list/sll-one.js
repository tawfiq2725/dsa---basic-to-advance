class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  print() {
    let lists = [];
    let curr = this.head;
    while (curr) {
      lists.push(curr.value);
      curr = curr.next;
    }
    console.log(lists.join("->"));
  }
}
// const linkedlist = new LinkedList();
linkedlist.prepend(10);
linkedlist.prepend(20);
linkedlist.prepend(30);
console.log(linkedlist.print());
