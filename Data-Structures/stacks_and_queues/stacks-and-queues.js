/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if(this.isEmpty()) return 'exception';
    return this.top.data;
  }
  push(item) {
    let newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if(!!this.isEmpty()) return 'exception';
    if(this.top.next){
      let value = this.top.data;
      this.top = this.top.next;
      return value;
    }else{
      let value = this.top.data;
      this.top = null;
      return value;
    }
  }
  isEmpty(){
    return !this.top;
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.rare = null;
  }
  enqueue (item) {
    let newNode = new Node(item);
    if(this.rare){
      this.rare.next = newNode;
      this.rare = newNode;
    }else{
      this.front = newNode;
      this.rare = this.front;
    }
  }
  dequeue(){
    if(this.front === this.rare){
      this.front = null;
      this.rare = null;
      return 'exception';
    }
    let temp = this.front.data;
    this.front = this.front.next;
    return temp;
  }
  peek(){
    if(!this.isEmpty()) return this.front.data;
    return 'exception';
  }
  isEmpty(){
    return !this.front;
  }
}

module.exports= {
  Stack,
  Queue,
};
