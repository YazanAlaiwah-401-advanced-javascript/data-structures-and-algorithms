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
      this.count++
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
      this.count--
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
    console.log(indexKey)
    while(i <= indexKey && k >= 0 ){
      console.log(i)
      if(i === indexKey) return current.data;
      current = current.next;
      i++;
    }
    return 'Exception';
  }

  findmiddel(){
    let index = Math.floor(this.count / 2)
    let current = this.head;
    while(index <= this.count){
      if(index === this.count) return current.data;
      current = current.next;
      index++;
    }
  }

}
// console.log( )
module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
// let l = new LinkedList()
// console.log(l.append(1))
// console.log(l.append(2))
// console.log(l.append(3))
// console.log(l.append(4))
// console.log(l.append(5))
// console.log(l.append(6))
// console.log(l.append(7))
// console.log(l.append(8))
// console.log(l.delete(8))
// console.log(l.toString())
// console.log(l.count)
// console.log(l.kthFromEnd(6))
// console.log(l.findmiddel())