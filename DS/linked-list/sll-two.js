class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class TwoPointerLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    if (this.head) {
      return this.head;
    } else {
      console.log("add you first node");
    }
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }


}
const linkedlist = new TwoPointerLinkedList();
linkedlist.getHead();
console.log(linkedlist.getSize());
