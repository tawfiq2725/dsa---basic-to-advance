// hashtables - wihtout collisions using separate chaining

class Hashtable {
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

  get(key) {
    let index = this.hashkey(key);
    let bucket = this.table[index];

    if (bucket) {
      let samekeyValue = bucket.find((item) => item[0] === key);
      if (samekeyValue) {
        return samekeyValue[1];
      }
    }
    return undefined;
  }

  set(key) {}

  remove(key) {}

  print() {}
}

const hashtable = new Hashtable(10);
