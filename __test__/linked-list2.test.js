/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
let {LinkedList} = require('../Data-Structures/linked-list/linked-list.js');

describe('LINKEDLIST MODULE',()=>{
  let linkedlist = new LinkedList();

  it('Can successfully add a node to the end of the linked list',()=>{
    linkedlist.append(1);
    expect(linkedlist).toMatchObject({head:{data:1,next:null}});
  });

  it('Can successfully add multiple nodes to the end of a linked list',()=>{
    linkedlist.append(2);
    linkedlist.append(5);
    expect(linkedlist).toMatchObject({head:{data:1,next:{data:2,next:{data:5,next:null}}}});
  });

  it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
    linkedlist.insertBefore(5,3);
    expect(linkedlist.toString()).toEqual('{1} -> {2} -> {3} -> {5} -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list',()=>{
    linkedlist.insertBefore(1,0);
    expect(linkedlist.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {5} -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list',()=>{
    linkedlist.insertAfter(3,4);
    expect(linkedlist.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {5} -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list',()=>{
    linkedlist.insertAfter(5,6);
    expect(linkedlist.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  });

  it('Can successfully delete a node that have the value',()=>{
    linkedlist.delete(5);
    expect(linkedlist.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {6} -> NULL');
  });

  it('Where k is greater than the length of the linked list',()=>{
    expect(linkedlist.kthFromEnd(10)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same',()=>{
    expect(linkedlist.kthFromEnd(5)).toEqual(0);
  });

  it('Where k is not a positive integer',()=>{
    expect(linkedlist.kthFromEnd(-5)).toEqual('Exception');
  });
  let newLink = new LinkedList();
  newLink.append(1);
  it('Where the linked list is of a size 1',()=>{
    expect(newLink.kthFromEnd(0)).toEqual(1);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    expect(linkedlist.kthFromEnd(2)).toEqual(3);
  });

});
