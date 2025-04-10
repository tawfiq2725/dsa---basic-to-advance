class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  //   append(value) {
  //     const node = new Node(value);
  //     if (!this.head) {
  //       this.head = node;
  //     } else {
  //       let curr = this.head;
  //       while (curr.next) {
  //         curr = curr.next;
  //       }
  //       curr.next = node;
  //     }
  //     this.size++;
  //   }

  //   insert(index, val) {
  //     const node = new Node(val);
  //     if (index < 0 || index > this.size) {
  //       throw new Error("Something wrong");
  //     }
  //     if (index === 0) {
  //       this.prepend(val);
  //     } else {
  //       let curr = this.head;
  //       for (let i = 0; i < index - 1; i++) {
  //         curr = curr.next;
  //       }
  //       node.next = curr.next;
  //       curr.next = node;
  //       this.size++;
  //     }
  //   }

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

  delete(val) {
    if (this.isEmpty()) {
      throw new Error("underflow");
    }
    let remove;
    if (this.head.val === val) {
      remove = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = remove.next;
    }
    this.size--;
  }
  delete(index) {
    if (this.isEmpty()) {
      throw new Error("underflow");
    }
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }
    let remove;
    if (index === 0) {
      remove = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = remove.next;
    }
    this.size--;
    return remove;
  }

  reverse() {
    if (this.isEmpty()) {
      throw new Error("underflow");
    } else {
      let curr = this.head;
      let pre = null;
      while (curr) {
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
      }
      this.head = pre;
    }
  }

  deleteMiddle() {
    let remove;
    if (this.isEmpty()) {
      throw new Error("under flow");
    } else {
      let mid = Math.floor(this.size / 2);
      let curr = this.head;
      for (let i = 0; i < mid - 1; i++) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = remove.next;
    }
    this.size--;
    return remove;
  }

  inserttoAvoidDuplicates(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return;
        }
        if (!curr.next) {
          break;
        }
        curr = curr.next;
      }
      curr.next = node;
      this.size++;
    }
  }

  search(val) {
    if (this.isEmpty()) {
      throw new Error("No Elements");
    }
    if (this.head.value === val) {
      return 0;
    } else {
      let curr = this.head;
      let i = 0;

      while (curr) {
        if (curr.value === val) {
          return i;
        }
        i++;
        curr = curr.next;
      }
      return null;
    }
  }

  remove(value) {
    let remove;
    if (this.isEmpty()) {
      throw new Error("Underflow");
    }
    if (this.head.value === value) {
      remove = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value !== value) {
        curr = curr.next;
      }
      remove = curr.next;
      curr.next = remove.next;
    }
    this.size--;
    return remove.value;
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

const list = new Linkedlist();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.print();

console.log(list.search(20));
