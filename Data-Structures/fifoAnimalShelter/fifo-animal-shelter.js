/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rare = null;
  }
  enqueue(item) {
    let node = new Node(item);
    if (node.data.type !== 'cat' && node.data.type !== 'dog') {
      return 'its only dogs and cats';
    }
    if (this.rare) {
      this.rare.next = node;
      this.rare = node;
    } else {
      this.front = node;
      this.rare = this.front;
    }
  }
  dequeue(type) {
    if (this.front === null) return 'empty';
    if (!type) {
      let value = this.front.data;
      this.front = this.front.next;
      return value;
    }
    if (type === 'dog' || type === 'cat') {
      if (this.front.type === type) {
        let data = this.front.data;
        this.front = this.front.next;
        return data;
      }
      let current = this.front;
      while (current.next) {
        if (current.next.data.type === type) {
          let data = current.next.data;
          current.next = current.next.next;
          current.next ? null : (this.rear = current);
          return data;
        }
        current = current.next;
      }
      return 'not found';
    } else {
      return null;
    }
  }
}
