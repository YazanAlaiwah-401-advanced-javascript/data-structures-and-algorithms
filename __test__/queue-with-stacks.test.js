/* eslint-disable no-undef */
'use strict';
let PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks.js');

describe('QUEUE MODUEL', () => {
  let queue = new PseudoQueue();
  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.top).toMatchObject({ data: 1, next: { data: 2, next: { data: 3, next: null } } });
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.top).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    let empty = new PseudoQueue();
    expect(empty.top).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    expect(queue.peek()).toEqual('exception');
    expect(queue.dequeue()).toEqual('exception');
  });
});


