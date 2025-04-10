class Hashtable {
  constructor(size = 25) {
    this.table = new Array(size);
    this.size = 0;
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length; // fixed
  }

  insert(key, value) {
    let index = this._hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]]; // fixed
    } else {
      let sameKeyValue = bucket.find((item) => item[0] === key);
      if (sameKeyValue) {
        sameKeyValue[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
    this.size++;
  }

  get(key) {
    let index = this._hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return -1;
  }

  delete(key) {
    let index = this._hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let keyIndex = bucket.findIndex((item) => item[0] === key); // fixed
      if (keyIndex !== -1) {
        bucket.splice(keyIndex, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  display() {
    this.table.forEach((bucket, index) => {
      if (bucket) {
        console.log(`${index}:`, bucket);
      }
    });
  }
}
