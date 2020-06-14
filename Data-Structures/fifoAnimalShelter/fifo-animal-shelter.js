/* eslint-disable no-redeclare */
'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.rare = null;
  }
  enqueue (item) {
    let node = new Node(item);
    if(node.data.type!=='cat'&&node.data.type!=='dog'){
      return 'its only dogs and cats';
    }
    if(this.rare){
      this.rare.next = node;
      this.rare = node;
    }else{
      this.front = node;
      this.rare = this.front;
    }
  }
  dequeue(type){
    let currentNode = this.front;
    if(this.front === this.rare){
      this.front = null;
      this.rare = null;
      return 'exception';
    }
    if(type!=='cat'&&type!=='dog'){
      return null;
    }
    while(currentNode){
      if(currentNode.type === type){

      }
    }
    if()
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