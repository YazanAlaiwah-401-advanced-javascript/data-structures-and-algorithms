/* eslint-disable no-undef */
'use strict';
const {Stack} = require('../../Data-Structures/stacks_and_queues/stacks-and-queues.js');


class PseudoQueue extends Stack {
  constructor(){
    super();
  }

  enqueue(value){
    let tempStack = new Stack();
    while(this.top){
      tempStack.push(this.dequeue());
    }
    this.push(value);
    while(tempStack.top){
      this.push(tempStack.pop());
    }
    return this;
  }
  dequeue(){
    return this.pop();
  }
}

module.exports = PseudoQueue;

