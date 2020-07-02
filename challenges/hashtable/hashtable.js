/* eslint-disable no-undef */
'use strict';

const LinkedList = require('./ll.js');
class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; // 2000
  }
  add(key, value) {
    // we need to get index in the storage (Array)
    const hash = this.hash(key);
    // we need to check if there is already value at that index
    if (!this.storage[hash]) {
      // if there is no value create linkedlist
      const ll = new LinkedList();
      ll.append({ [key]: value });
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      // we already have a value at that index so just append to the front of the linkedList
      this.storage[hash].append({ [key]: value });
    }
  }
  get(key) {
    let hash = this.hash(key);
    if (this.storage[hash]) {
      let ll = this.storage[hash].head;
      while (ll) {
        if (ll.value[key]) {
          return ll.value[key];
        }
        ll = ll.next;
      }
    }
    return null;
  }

  contains(key) {
    let hash = this.hash(key);
    if (this.storage[hash]) {
      let ll = this.storage[hash].head;
      while (ll) {
        if (ll.value[key]) {
          return true;
        }
        ll = ll.next;
      }
    }
    return false;
  }
}
const hashmap = new Hashmap(4000); // ==> [4000]
hashmap.add('name', 'mahmoud');
hashmap.add('one', 'thing');
hashmap.add('eno', '1');
hashmap.add('neo', '2');
hashmap.add('this', 'nothing');
console.log(hashmap.hash('one'));
console.log(hashmap.storage);
console.log(hashmap.storage[3923].head, hashmap.storage[2118].head.next);
module.exports = Hashmap;
