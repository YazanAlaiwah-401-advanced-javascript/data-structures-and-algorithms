/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
'use strict';

class Node {
  constructor(data, left = null, right = null) {
    this.value = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // Root -> Left -> Right
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Root -> Right
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Right -> Root
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
  add(value) {
    let currentNode = this.root;
    let node = new Node(value);
    if (!currentNode) {
      this.root = node;
      return this;
    }
    while (currentNode) {
      if (currentNode.value < node.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return this;
        } else {
          currentNode = currentNode.right;
          continue;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = node;
          return this;
        } else {
          currentNode = currentNode.left;
          continue;
        }
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    if (currentNode === null) {
      return false;
    }
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  breadthFirstTraversal(tree) {
    let resulte = [];
    let childs = [];
    let node = tree.root;
    if (!node) return 'nothing in the tree';
    childs.push(node);
    while (childs.length) {
      let tempNode = childs.shift();
      resulte.push(tempNode.value);
      if (tempNode.left) childs.push(tempNode.left);
      if (tempNode.right) childs.push(tempNode.right);
    }
    return resulte;
  }
}

module.exports = BinaryTree;
