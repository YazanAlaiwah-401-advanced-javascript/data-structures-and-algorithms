/* eslint-disable no-undef */
// eslint-disable-next-line no-redeclare
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  insertLast(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    node.prev = currentNode;
    currentNode.next = node;
    this.tail = node;
    return this;
  }
  insertFirst(value){
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return this;
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
    let linkedDataInStringFormated = 'NULL';
    let current = this.head;
    while(current){
      linkedDataInStringFormated += ` <- {${current.data}} -> `;
      current = current.next;
    }
    linkedDataInStringFormated += 'NULL';
    return linkedDataInStringFormated;
  }
}

module.exports.DoublyLinkedList = new DoublyLinkedList();
