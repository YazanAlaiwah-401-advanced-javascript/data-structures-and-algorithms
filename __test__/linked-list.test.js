/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
let {Node,LinkedList} = require('../Data-Structures/linked-list/linked-list.js');

describe('NODE MODULE',()=>{
  it('the node class should return an object with data and next = null',()=>{
    expect(new Node(5)).toMatchObject({ data: 5, next: null });
    expect(new Node('hello')).toMatchObject({ data: 'hello', next: null });
    expect(new Node(true)).toMatchObject({ data: true, next: null });
  });
});

describe('LINKEDLIST MODULE',()=>{
  let linkedlist = new LinkedList();
  linkedlist.append(1);
  linkedlist.append(2);
  linkedlist.append(3);
  it('Can properly append into the linked list',()=>{
    expect(linkedlist).toMatchObject({head:{data:1,next:{data:2,next:{data:3,next:null}}}});
  });

  it('Will return true when finding a value within the linked list that exists',()=>{
    expect(linkedlist.includes(2)).toBeTruthy();
    expect(linkedlist.includes(3)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    expect(linkedlist.includes(5)).toBeFalsy();
    expect(linkedlist.includes('invalide')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    expect(linkedlist.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
    linkedlist.append('hello');
  });

  it('Can properly append multiple nodes into the linked list',()=>{
    expect(linkedlist.toString()).toEqual('{1} -> {2} -> {3} -> {hello} -> NULL');
  });

  it('The head property will properly point to the first node in the linked list',()=>{
    expect(linkedlist.head.data).toEqual(1);
  });
  it('Can successfully instantiate an empty linked list',()=>{
    linkedlist.append();
    linkedlist.append();
    linkedlist.append();
    expect(linkedlist.toString()).toEqual('{1} -> {2} -> {3} -> {hello} -> {} -> {} -> {} -> NULL');
  });

});
