export default class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  printInfo() {
    console.log(this.size, this.capacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);

    oldBuckets.forEach((bucket) => {
      bucket.forEach((pair) => {
        const hash = this.hash(pair[0]);
        this.buckets[hash].push([pair[0], pair[1]]);
      });
    });
  }

  set(key, value) {
    const hash = this.hash(key);

    const bucket = this.buckets[hash];

    for (const arr of bucket) {
      if (arr[0] === key) {
        arr[1] = value;
        return;
      }
    }

    const arr = [key, value];

    bucket.push(arr);
    this.size++;
    if (this.size / this.capacity > this.loadFactor) this.resize();
  }

  get(key) {
    const hash = this.hash(key);

    const bucket = this.buckets[hash];

    for (const [savedKey, value] of bucket) {
      if (savedKey === key) return value;
    }

    return;
  }

  has(key) {
    const hash = this.hash(key);

    const bucket = this.buckets[hash];

    for (const [savedKey, value] of bucket) {
      if (savedKey === key) return true;
    }

    return false;
  }

  remove(key) {
    const hash = this.hash(key);

    const bucket = this.buckets[hash];

    let i = 0;

    for (const pair of bucket) {
      if (pair[0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    let length = 0;

    this.buckets.forEach((bucket) => {
      length += bucket.length;
    });

    return length;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  keys() {
    const keys = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => keys.push(pair[0]));
    });

    return keys;
  }

  values() {
    const values = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => values.push(pair[1]));
    });

    return values;
  }

  entries() {
    const entries = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((pair) => entries.push(pair));
    });

    return entries;
  }
}
