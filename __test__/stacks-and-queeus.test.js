/* eslint-disable no-undef */
'use strict';
let {Stack,Queue} = require('../Data-Structures/stacks_and_queues/stacks-and-queues.js');


describe('Stack Moduel',()=>{
  let stack = new Stack();

  it('Can successfully push onto a stack',()=>{
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });

  it('Can successfully push multiple values onto a stack',()=>{
    stack.push(4);
    stack.push(3);
    expect(stack.top).toMatchObject({data:3,next:{data:4,next:{data:5,next:null}}});
  });

  it('Can successfully pop off the stack',()=>{
    expect(stack.peek()).toEqual(3);
    stack.pop();
    expect(stack.peek()).toEqual(4);
  });

  it('Can successfully peek the next item on the stack',()=>{
    expect(stack.peek()).toEqual(4);
  });

  it('Can successfully empty a stack after multiple pops',()=>{
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });

  it('Can successfully instantiate an empty stack',()=>{
    let empty = new Stack();
    expect(empty.top).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception',()=>{
    expect(stack.pop()).toEqual('exception');
    expect(stack.peek()).toEqual('exception');
  });
});

describe('QUEUE MODUEL',()=>{
  let queue = new Queue();
  it('Can successfully enqueue into a queue',()=>{
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front).toMatchObject({data:1,next:{data:2,next:{data:3,next:null}}});
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value',()=>{
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully empty a queue after multiple dequeues',()=>{
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
    expect(queue.rare).toEqual(null);
  });

  it('Can successfully instantiate an empty queue',()=>{
    let empty = new Queue();
    expect(empty.rare).toEqual(null);
    expect(empty.front).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{
    expect(queue.peek()).toEqual('exception');
    expect(queue.dequeue()).toEqual('exception');
  });
});


