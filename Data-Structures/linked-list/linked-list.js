/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    return;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
    this.count = 0;
  }
  append(value=''){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      this.count++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.count++;
    return this;
  }
  insertBefore(value,newValue){
    let node = new Node(newValue);
    let current = this.head;
    if(current.data === value){
      node.next = current;
      this.head = node;
      this.count++;
      return this;
    }
    while(current.next !== null){
      if(current.next.data===value){
        node.next = current.next;
        current.next = node;
        this.count++;
        return this;
      }
      current = current.next;
    }
    return 'the value you add is not in the linkedlest data';
  }
  insertAfter(value,newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current){
      if(current.data===value){
        node.next = current.next;
        current.next = node;
        this.count++;
        return this;
      }
      current = current.next;
    }
    return 'the value you add is not in the linkedlest data';
  }
  includes(value){
    let current = this.head;
    while(current){
      if(current.data === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(){
    let linkedDataInStringFormated = '';
    let current = this.head;
    while(current){
      linkedDataInStringFormated += `{${current.data}} -> `;
      current = current.next;
    }
    linkedDataInStringFormated += 'NULL';
    return linkedDataInStringFormated;
  }
  delete(value){
    let current = this.head;
    if(current.data === value){
      this.head = current.next;
      this.count--;
      return this;
    }
    while(current.next !== null){
      if(current.next.data===value){
        current.next = current.next.next;
        this.count--;
        return this;
      }
      current = current.next;
    }
    return 'the value you add is not in the linkedlist';
  }

  kthFromEnd(k){
    let current = this.head;
    let indexKey = this.count - k -1;
    let i = 0;
    while(i <= indexKey && k >= 0 ){
      if(i === indexKey) return current.data;
      current = current.next;
      i++;
    }
    return 'Exception';
  }

  findmiddel(){
    let index = Math.floor(this.count / 2);
    let current = this.head;
    while(index <= this.count){
      if(index === this.count) return current.data;
      current = current.next;
      index++;
    }
  }
  mergeLists(ll1,ll2){
    this.head = Object.assign({}, ll1.head);
    let current = this.head;
    current.next = Object.assign({}, ll2.head);
    ll1 = ll1.head.next;
    ll2 = ll2.head.next;
    current = current.next;
    while(ll1||ll2){
      if(ll1){
        current.next = Object.assign({}, ll1);
        current = current.next;
        ll1 = ll1.next;
      }
      if(ll2){
        current.next = Object.assign({}, ll2);
        current = current.next;
        ll2 = ll2.next;
      }
    }
    return this;
  }
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
let l1 = new LinkedList();
l1.append(1);
l1.append(3);
l1.append(5);
l1.append(5);
l1.append(5);
let l2 = new LinkedList();
l2.append(2);
l2.append(4);
l2.append(6);
l2.append(6);
l2.append(6);

let test = new LinkedList();
console.log(l1.head,l2);
console.log(test.mergeLists(l1,l2));
console.log(test.toString());
