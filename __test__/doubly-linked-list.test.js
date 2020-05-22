/* eslint-disable no-undef */
let linked = require('../Data-Structures/linked-list/doubly-linked-list.js').DoublyLinkedList;

describe('DOUBLY LINKED LIST MODULE', () => {
  it('its should the head and the tail to equal the first value add', () => {
    expect(linked.insertLast(5)).toMatchObject({ head: { prev: null, data: 5, next: null }, tail: { prev: null, data: 5, next: null } });
  });

  it('its should the head to equal the first value add and the tail the last value add', () => {
    expect(linked.insertLast(6)).toMatchObject({ head: { data: 5, }, tail: { data: 6 }});
  });

  it('the insertFirst should add the value in the head and the head value will be next for the new value', () => {
    expect(linked.insertFirst(4)).toMatchObject({ head: {prev:null, data: 4,next:{data:5} }, tail: { data: 6 }});
  });

  it('the include should return boolead if the value is in the likend', () => {
    expect(linked.includes(4)).toBeTruthy();
    expect(linked.includes(3)).toBeFalsy();
  });

  it('the toString should return a chain of the data in strung type', () => {
    expect(linked.toString()).toEqual('NULL <- {4} ->  <- {5} ->  <- {6} -> NULL');
  });

});
