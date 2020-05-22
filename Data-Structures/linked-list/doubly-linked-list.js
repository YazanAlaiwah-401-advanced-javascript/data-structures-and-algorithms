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
  }
  insertLast(value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  insertFirst(value){
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return this;
  }
}

let linked = new DoublyLinkedList();
console.log(linked.insertLast(5))
console.log(linked.insertFirst(7))
console.log(linked.insertFirst(8))



